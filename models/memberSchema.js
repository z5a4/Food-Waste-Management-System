const monggose= require('mongoose');

const memberSchema= new monggose.Schema({
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
module.exports=monggose.model('memberschema',memberSchema);