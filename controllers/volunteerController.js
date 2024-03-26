const Volunteer = require('../models/volunteerSchema');

exports.createVolunteer = async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.json({ message: 'Volunteer registered successfully' });
  } catch (error) {
    console.error('Error creating Volunteer:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
};


exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (error) {
    console.error('Error fetching Volunteers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update registration
exports.updateVolunteer = async (req, res) => {
  const { id } = req.params;

  try {
    const volunteer = await Volunteer.findByIdAndUpdate(id, req.body, { new: true });

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    res.status(200).json(volunteer);
  } catch (error) {
    console.error('Error updating Volunteer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteVolunteer = async (req, res) => {
  const { id } = req.params;

  try {
    const volunteer = await Volunteer.findByIdAndDelete(id);

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    res.status(200).json({ message: 'Volunteer deleted successfully' });
  } catch (error) {
    console.error('Error deleting Volunteer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getVolunteerData = async (req, res) => {
  const { VolunteerId } = req.params;

  try {
    const VolunteerData = await Volunteer.findOne({ VolunteerId });

    if (VolunteerData) {
      res.json({
        volunteerName: VolunteerData.volunteerName,
        volunteeraddress: VolunteerData.volunteeraddress,
        volunteermobileNo: VolunteerData.volunteermobileNo,
      });
    } else {
      res.status(404).json({ error: 'Volunteer not found' });
    }
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
