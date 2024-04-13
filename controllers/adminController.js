const Admin = require('../models/adminSchema');
const axios = require('axios');


exports.registerUser = async (req, res) => {
  const formData = req.body;
  
  try {
    const newAdmin = new Admin(formData);
    await newAdmin.save();
    res.json({ message: 'Admin successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const Admins = await Admin.find();
    res.json(Admins);
  } catch (error) {
    console.error('Error fetching Admins:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update Admin
exports.updateAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const Admin = await Admin.findByIdAndUpdate(id, req.body, { new: true });

    if (!Admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json(Admin);
  } catch (error) {
    console.error('Error updating Admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Admin
exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const Admin = await Admin.findByIdAndDelete(id);

    if (!Admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting Admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
