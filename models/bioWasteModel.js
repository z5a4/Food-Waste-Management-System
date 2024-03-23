// bioWasteModel.js

const mongoose = require('mongoose');

const bioWasteSchema = new mongoose.Schema({
  biogasId: {
    type: String,
    required: true,
    unique: true,
  },
  biogasName: {
    type: String,
    required: true,
  },
  biogasAddress: {
    type: String,
    required: true,
  },
  biogasMobileNo: {
    type: Number, // Assuming it is a string, adjust as needed
    required: true,
  },
  biogasEmail: {
    type: String,
    required: true,
    unique: true,
    // Additional validation for email format can be added using a regex pattern
  },
  biogasSlurryLimit: {
    type: Number,
    required: true,
  },
});

const BioWaste = mongoose.model('BioWaste', bioWasteSchema);

module.exports = BioWaste;
