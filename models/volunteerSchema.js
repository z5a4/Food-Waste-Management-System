const mongoose=require('mongoose');

const volunteerSchema = new mongoose.Schema({
    volunteerId: String,
    volunteerName: String,
    dateOfBirth: Date,
    volunteeraddress: String,
    email: String,
    volunteermobileNo: String,
    username: String,
    password: String,
    securityQuestion: String,
    answer: String,

});
module.exports=mongoose.model('volunteerschema',volunteerSchema);