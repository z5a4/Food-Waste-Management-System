const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    volunteerId: { type: String, required: true },
    volunteerName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    volunteeraddress: { type: String, required: true },
    email: { type: String, required: true },
    volunteermobileNo: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    securityQuestion: { type: String, required: true },
    answer: { type: String, required: true },
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
