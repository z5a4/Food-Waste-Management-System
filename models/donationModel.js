// donationModel.js

const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donationId: {
    type: String,
    required: true,
    unique: true,
  },
  donationType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  donationDate: {
    type: Date,
    required: true,
  },
  donorName: {
    type: String,
    required: true,
  },
  donorMobileNo: {
    type: String,
    required: true,
  },
  donorEmail: {
    type: String,
    required: true,
  },
  donationPaymentMode: {
    type: String,
    enum: ['Credit Card', 'Debit Card', 'Net Banking', 'UPI', 'Other'],
    required: true,
  },
  donationAmount: {
    type: Number,
    required: true,
  },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
