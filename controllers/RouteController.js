const Route = require('../models/Route');



exports.createRoute = async (req, res) => {
  try {
    const newRoute = new Route(req.body);
    await newRoute.save();
    res.json({ message: 'Route registered successfully' });
  } catch (error) {
    console.error('Error creating Route:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }

};

exports.getRoute = async (req, res) => {
  try {
    const getRoute = await Route.find();
    res.json(getRoute);
  } catch (error) {
    console.error('Error fetching Route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};