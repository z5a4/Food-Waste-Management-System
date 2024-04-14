const Registration = require('../models/registrationSchema');
const axios = require('axios');


exports.registerUser = async (req, res) => {
  const formData = req.body;
  
  try {
    const newRegistration = new Registration(formData);
    await newRegistration.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update registration
exports.updateRegistration = async (req, res) => {
  const { id } = req.params;

  try {
    const registration = await Registration.findByIdAndUpdate(id, req.body, { new: true });

    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.status(200).json(registration);
  } catch (error) {
    console.error('Error updating registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete registration
exports.deleteRegistration = async (req, res) => {
  const { id } = req.params;

  try {
    const registration = await Registration.findByIdAndDelete(id);

    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.status(200).json({ message: 'Registration deleted successfully' });
  } catch (error) {
    console.error('Error deleting registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};