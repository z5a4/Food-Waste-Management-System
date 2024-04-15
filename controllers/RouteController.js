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

// Controller function to fetch route names according to date
// Function to fetch routeName according to the current date
exports.fetchRoutesByCurrentDate = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    
    // Extract year, month, and day from the current date
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const day = String(currentDate.getDate()).padStart(2, '0');

    // Construct the date string in the format YYYY-MM-DD
    const dateString = `${year}-${month}-${day}`;

    // Find routes for the current date
    const routes = await Route.find({ date: { $gte: new Date(dateString), $lt: new Date(dateString + 'T23:59:59.999Z') } });

    // Extract routeName from the routes
    const routeNames = routes.map(route => route.routeName);

    // Send the routeNames as the response
    res.json({ routeNames });
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message });
  }
};


//fetch according to yesterday date
exports.viewdailyroutes = async(req,res)=>{

  try {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Get yesterday's date
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const route = await Route.find({ date: formattedDate });
    res.json(route);
} catch (error) {
    console.error('Error fetching Route:', error);
    res.status(500).json({ error: 'Failed to fetch Route' });
}
};
