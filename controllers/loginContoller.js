const Registration = require('../models/registrationSchema'); // Import the existing schema
const nodemailer = require('nodemailer');
const crypto = require('crypto');

exports.loginUser = async (req, res) => {
  const formData=req.body;
  const { username, password, category } = formData;

 
  if (!category) {
    return res.json({ success: false, message: 'Select a category', focus: 'category' });
  }
  if (!username){
    return res.json({success:false,message:'Username is Required',focus:'username'})
  }
  if (!password){
    return res.json({success:false,message:'Password is Required',focus:'password'})
  }
  
  
  try {
 

 const user = await Registration.findOne({ username, password, category });

    if (user) {
      req.session.userId = user._id;
      const { password, ...clearedFormData } = formData;
      res.json({
        success: true,
        message: 'Login successful',

      });

    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials or category',
      });
     
 
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};


exports.getUserDetails = async (req, res) => {
  try {
      if (!req.session.userId) {
          throw new Error('Unauthorized');
      }
      const user = await Registration.findById(req.session.userId);
      if (!user) {
          throw new Error('User not found');
      }
      const { username, email, mobileNo, organisationName, name,address } = user;
      res.status(200).json({ username, email, mobileNo,organisationName,name,address});
  } catch (error) {
      res.status(401).json({ error: error.message });
  }
};

exports.logout = (req, res) => {
  try {
      req.session.destroy((err) => {
          if (err) {
              console.error('Error destroying session:', err);
              res.status(500).json({ error: 'Failed to logout' });
          } else {
              res.clearCookie('connect.sid'); // Clear the session cookie
              res.status(200).json({ message: 'Logout successful' });
          }
      });
  } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ error: 'Failed to logout' });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
      const userId = req.session.userId; // Assuming you have authentication middleware to get user ID from the request
      const updatedData = req.body; // The updated data from the request body

      // Find the user by ID and update their profile
      const user = await Registration.findByIdAndUpdate(userId, updatedData, { new: true });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Return the updated user profile as a JSON response
      res.json(user);
  } catch (error) {
      console.error('Failed to update profile:', error);
      res.status(500).json({ error: 'Failed to update profile' });
  }
};

// controllers/authController.js


