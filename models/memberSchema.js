const monggose= require('mongoose');

const memberSchema= new monggose.Schema({
    id: {type:String,
        unique:true},
    name:  {type:String},
    dateOfBirth: {type:Date},
    address: {type:String},
    email: {type:String},
    mobileNo: {type:String},
    username:{type:String},
    password: {type:String},
    BeVolunteer:{type:String},

    securityQuestion: {type:String},
    answer: {type:String},

});
module.exports=monggose.model('memberschema',memberSchema);