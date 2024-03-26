// controllers/transporterController.js

const Transporter=require('../models/transporterSchema');

// Controller to create a new transporter
exports.createTransporter = async (req, res) => {
  const transporterData = req.body;

  try {
    const newTransporter = new Transporter(transporterData);
    await newTransporter.save();
    res.json({ message: 'Transporter created successfully' });
  } catch (error) {
    console.error('Error creating transporter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getTransporter = async (req, res) => {
  try {
    const transporter = await Transporter.find();
    res.json(transporter);
  } catch (error) {
    console.error('Error fetching Transporter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update registration
exports.updateTransporter = async (req, res) => {
  const { id } = req.params;

  try {
    const transporter = await Transporter.findByIdAndUpdate(id, req.body, { new: true });

    if (!transporter) {
      return res.status(404).json({ message: 'Transporter not found' });
    }

    res.status(200).json(transporter);
  } catch (error) {
    console.error('Error updating Transporter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteTransporter = async (req, res) => {
  const { id } = req.params;

  try {
    const transporter = await Transporter.findByIdAndDelete(id);

    if (!transporter) {
      return res.status(404).json({ message: 'Transporter not found' });
    }

    res.status(200).json({ message: 'Transporter deleted successfully' });
  } catch (error) {
    console.error('Error deleting Transporter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getTransporterData = async (req, res) => {
  const { transporterId } = req.params;

  try {
    const TransporterData = await Transporter.findOne({ transporterId });

    if (TransporterData) {
      res.json({
        vehicleNo: TransporterData.vehicleNo,
        driverName: TransporterData.driverName,
        licenseNo: TransporterData.licenseNo,
        rentRate: TransporterData.rentRate,
        mobileNo: TransporterData.mobileNo,
        address:TransporterData.address,
      });
    } else {
      res.status(404).json({ error: 'Transporter not found' });
    }
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

