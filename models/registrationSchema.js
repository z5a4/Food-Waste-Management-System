// registrationSchema.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  organisationName: {
    type: String,
    
  },
  regid: {
    type: String,
    required: true,
    unique: true, // Assuming you want 'id' to be unique
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  securityQuestion: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
