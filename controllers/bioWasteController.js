// controllers/bioWasteController.js

const BioWaste = require('../models/bioWasteModel');


// Controller to create a new bio waste
exports.createBioWaste = async (req, res) => {
  const bioWasteData = req.body;

  try {
    const newBioWaste = new BioWaste(bioWasteData);
    await newBioWaste.save();
    res.json({ message: 'Bio Waste created successfully' });
  } catch (error) {
    console.error('Error creating bio waste:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.getBiogas = async (req, res) => {
  try {
    const biogas = await BioWaste.find();
    res.json(biogas);
  } catch (error) {
    console.error('Error fetching Bio Gas Plant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update biogas
exports.updateBiogas = async (req, res) => {
  const { id } = req.params;

  try {
    const biogas = await BioWaste.findByIdAndUpdate(id, req.body, { new: true });

    if (!biogas) {
      return res.status(404).json({ message: 'Biogas Plant not found' });
    }

    res.status(200).json(biogas);
  } catch (error) {
    console.error('Error updating Biogas Plant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete registration
exports.deleteBiogas = async (req, res) => {
  const { id } = req.params;

  try {
    const biogas = await BioWaste.findByIdAndDelete(id);

    if (!biogas) {
      return res.status(404).json({ message: 'biogas Plant not found' });
    }

    res.status(200).json({ message: 'BioGas Plant deleted successfully' });
  } catch (error) {
    console.error('Error deleting Biogas Plant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
