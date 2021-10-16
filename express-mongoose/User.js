const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', userSchema);