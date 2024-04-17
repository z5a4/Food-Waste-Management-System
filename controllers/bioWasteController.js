// controllers/bioWasteController.js

const BioWaste = require('../models/bioWasteModel');


// Controller to create a new bio waste
exports.createBioWaste = async (req, res) => {
  const bioWasteData = req.body;
  const {biogasEmail, biogasbiogasMobileNo } = req.body; // Extract biogasEmail, biogasEmail, and biogasMobileNo from the form data

  // Additional validation checks
  const { biogasName ,biogasAddress,biogasSlurryLimit} = formData;
  const biogasMobileNoRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

 
  if (!biogasName) {
    return res.json({ success: false, message: 'Bio-Plant Name is required', focus: 'biogasName' });
  }
  if(!biogasAddress){
    return res.json({ success: false, message: 'Address is required', focus: 'biogasAddress' });
  }
  if(!biogasSlurryLimit){
    return res.json({success:false,message:'SlurryLimit is required',focus:'biogasSlurryLimit'});
  }
  if(!biogasbiogasMobileNo) {
    return res.json({success:false,message:'Mobile number is required',focus:'biogasbiogasMobileNo'});
  }

  // Check if the date of birth is after the current date
 
  // Check if the biogasEmail is in a valid format
  if (!biogasEmail.includes('@')) {
    return res.json({ success: false, message: 'Invalid biogasEmail format', focus: 'biogasEmail' });
  }

  // Check if the mobile number matches the regex pattern
  if (!biogasMobileNo.match(biogasMobileNoRegex)) {
    return res.json({ success: false, message: 'Invalid mobile number format', focus: 'biogasMobileNo' });
  }

  // Check if the organisation name contains digits or special characters
  if (biogasName.match(/[0-9!@#$%^&*]/)) {
    return res.json({ success: false, message: 'Bio-Plant Name should not contain any digits or special characters', focus: 'organisationName' });
  }

  // Check if the password matches the regex pattern
  if (!password.match(passwordRegex)) {
    return res.json({ success: false, message: 'Password should contain at least one digit, one special character, and have a minimum length of 8 characters', focus: 'password' });
  }

  try {
    // Check if the biogasEmail, biogasEmail, or mobile number already exists in the database
    const user = await BioWaste.findOne({ $or: [{ biogasEmail },  { biogasMobileNo }] });

    if (user) {
      if (user.biogasEmail === biogasEmail) {
        return res.json({ success: false, message: 'biogas Email already occupied', focus: 'biogasEmail' });
      } else  (user.biogasMobileNo === biogasMobileNo) 
      {
        return res.json({ success: false, message: 'biogas Mobile No already registered', focus: 'biogasMobileNo' });
      } 
    } else {
     const newBioWaste = new BioWaste(bioWasteData);
    await newBioWaste.save();
    res.json({ message: 'Bio Waste created successfully' });
    }
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
