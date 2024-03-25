const Route = require('../models/Route');
const Transporter = require('../models/transporterSchema');
const Volunteer = require('../models/volunteerSchema');



exports.createRoute = async (req, res) => {
  const routedata = req.body;

  try {
    const NewRoute = new Route(routedata);
    await NewRoute.save();
    res.json({ message: 'Route created successfully' });
  } catch (error) {
    console.error('Error creating Route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

