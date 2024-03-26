const mongoose = require('mongoose');

// Create a schema for the slurry request
const slurryRequestSchema = new mongoose.Schema({
  farmerName: String,
  phoneNumber: String,
  address: String,
  date: Date
});

const SlurryRequest = mongoose.model('SlurryRequest', slurryRequestSchema);

module.exports = SlurryRequest;