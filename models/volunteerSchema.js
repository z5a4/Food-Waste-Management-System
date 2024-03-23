const mongoose=require('mongoose');

const volunteerSchema = new mongoose.Schema({
    id: String,
    name: String,
    dateOfBirth: Date,
    address: String,
    email: String,
    mobileNo: String,
    username: String,
    password: String,
    securityQuestion: String,
    answer: String,

});
module.exports=mongoose.model('volunteerschema',volunteerSchema);