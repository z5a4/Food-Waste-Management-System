const SlurryRequest = require('../models/slurryrequestModel');

// Controller function to handle the creation of a new slurry request
exports.createRequest = async (req, res) => {
  try {
    const { farmerName, phoneNumber, address, date } = req.body;

    // Check if the user has made a request within the last 15 days
    const lastRequest = await SlurryRequest.findOne({ farmerName, phoneNumber }).sort({ date: -1 });

    if (lastRequest) {
      const currentDate = new Date();
      const lastRequestDate = new Date(lastRequest.date);
      const daysSinceLastRequest = Math.floor((currentDate - lastRequestDate) / (1000 * 60 * 60 * 24));

      if (daysSinceLastRequest < 15) {
        // Calculate the date when the next request can be made
        const nextEligibleDate = new Date(lastRequestDate.setDate(lastRequestDate.getDate() + 15));
        return res.status(400).json({ message: `You can make a request only once every 15 days. Next eligible date: ${nextEligibleDate.toDateString()}` });
      }
    }

    // If no recent request or more than 15 days have passed, proceed with creating a new request
    const newRequest = new SlurryRequest({ farmerName, phoneNumber, address, date });
    await newRequest.save();

    // Send success response
    res.status(200).json({ message: 'Request Registered Successfully' });

  } catch (error) {
    console.error('Error creating Request:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
};