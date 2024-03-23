// controllers/donationController.js

const Donation = require('../models/donationModel');


// Controller to create a new donation
exports.createDonation = async (req, res) => {
  const donationData = req.body;

  try {
    const newDonation = new Donation(donationData);
    await newDonation.save();
    res.json({ message: 'Donation created successfully' });
  } catch (error) {
    console.error('Error creating donation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    console.error('Error fetching Donations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update registration
exports.updateDonation = async (req, res) => {
  const { id } = req.params;

  try {
    const donation = await Donation.findByIdAndUpdate(id, req.body, { new: true });

    if (!donation) {
      return res.status(404).json({ message: 'donation not found' });
    }

    res.status(200).json(donation);
  } catch (error) {
    console.error('Error updating donation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteDonation = async (req, res) => {
  const { id } = req.params;

  try {
    const donation = await Donation.findByIdAndDelete(id);

    if (!donation) {
      return res.status(404).json({ message: 'donation not found' });
    }

    res.status(200).json({ message: 'donation deleted successfully' });
  } catch (error) {
    console.error('Error deleting donation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

