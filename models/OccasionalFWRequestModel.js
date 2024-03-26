const mongoose = require('mongoose');

const OccasionalFWRequestModel = new mongoose.Schema({
  requestId: { 
    type: String, 
    required: true, 
},
  description: {
    type: String,
    required: true,
  },
  date: {
     type: Date,
      default: Date.now, 
    },
  requesterName: {
     type: String,
      required: true,
     },
  approxQuantity: {
     type: Number,
      required: true 
    },
  address: {
    type: String,
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
  
  
});

module.exports = mongoose.model('OccasionalFWRequestModel', OccasionalFWRequestModel);
