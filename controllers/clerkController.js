const Clerk = require('../models/clerkSchema');
const axios = require('axios');


exports.registerUser = async (req, res) => {
  const formData = req.body;
  
  try {
    const newClerk = new Clerk(formData);
    await newClerk.save();
    res.json({ message: 'Clerk successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getClerks = async (req, res) => {
  try {
    const clerks = await Clerk.find();
    res.json(clerks);
  } catch (error) {
    console.error('Error fetching Clerks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update Clerk
exports.updateClerk = async (req, res) => {
  const { id } = req.params;

  try {
    const clerk = await Clerk.findByIdAndUpdate(id, req.body, { new: true });

    if (!clerk) {
      return res.status(404).json({ message: 'Clerk not found' });
    }

    res.status(200).json(Clerk);
  } catch (error) {
    console.error('Error updating Clerk:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Clerk
exports.deleteClerk = async (req, res) => {
  const { id } = req.params;

  try {
    const clerk = await Clerk.findByIdAndDelete(id);

    if (!clerk) {
      return res.status(404).json({ message: 'Clerk not found' });
    }

    res.status(200).json({ message: 'Clerk deleted successfully' });
  } catch (error) {
    console.error('Error deleting Clerk:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
