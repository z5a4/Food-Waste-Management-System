const OccasionalFWRequestModel = require('../models/OccasionalFWRequestModel');

exports.createFWOccasionalRequest = async (req, res) => {
  try {
    
    const newOFWRequest = new OccasionalFWRequestModel(req.body);
    await newOFWRequest.save();
    res.json({ message: 'Occasional Food Waste Request registered successfully' });
  } catch (error) {
    console.error('Error creating Occasional FWRequest:', error);
    res.status(500).json({ message: 'Occasional Food Waste Request failed. Please try again.' });
  }
};


exports.getOccasionalFW = async (req, res) => {
    try {
      const OccasionalFW = await OccasionalFWRequestModel.find();
      res.json(OccasionalFW);
    } catch (error) {
      console.error('Error fetching OccasionalFW:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


// Update registration
exports.updateOccasionalFWRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const OccasionalFWRequest = await OccasionalFWRequestModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!OccasionalFWRequest) {
      return res.status(404).json({ message: 'OccasionalFWRequest not found' });
    }

    res.status(200).json(OccasionalFWRequest);
  } catch (error) {
    console.error('Error updating OccasionalFWRequest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteOccasionalFWRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const OccasionalFWRequest = await OccasionalFWRequestModel.findByIdAndDelete(id);

    if (!OccasionalFWRequest) {
      return res.status(404).json({ message: 'OccasionalFWRequest not found' });
    }

    res.status(200).json({ message: 'OccasionalFWRequest deleted successfully' });
  } catch (error) {
    console.error('Error deleting OccasionalFWRequest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//fetch according to yesterday date
exports.ScheduleOccasional = async(req,res)=>{

  try {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Get yesterday's date
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const OccasionalFWRequests = await OccasionalFWRequestModel.find({ date: formattedDate });
    res.json(OccasionalFWRequests);
} catch (error) {
    console.error('Error fetching Occasional:', error);
    res.status(500).json({ error: 'Failed to fetch Occasional' });
}
};


