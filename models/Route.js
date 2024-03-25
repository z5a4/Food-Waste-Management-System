const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  routeId:
   {
    type: String,
    default: 'RT000',
    unique: true,
  },
  routeName:
   {
    type: String,
    required: true,
  },
  routeLandmark:
   {
    type: String,
    required: true,
  },
  transporterId:
   {
    type: String,
    required:true, // Change to String type
   
  },
  transporterdriveName: 
  {
    type: String, // Change to String type
  },
  transportermobileNo:
   {
    type: String, // Change to String type
  },
  transportervehicleNo:
   {
    type: String, // Change to String type
  },
  transporterlisenceNo: 
  {
    type: String, // Change to String type
  },
  transporteraddress:
   {
    type: String, // Change to String type
  },
  transporterrentRate:
   {
    type: String, // Change to String type
  },
  volunteerId: 
  {
    type: String,
    required:true, // Change to String type
  },
  volunteerName:
  { 
   type: String,
  },
  volunteeraddress:
  { 
   type: String,
  },
  volunteermobileNo:
  { 
   type: String,
    },
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
