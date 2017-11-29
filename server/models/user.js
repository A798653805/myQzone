let mongoose = require('mongoose');
let UserSchema = require('../schema/user');

let User = mongoose.model('Users',UserSchema);

module.exports = User;
