let mongoose = require('mongoose');
let MessageSchema = require('../schema/message');

let message = mongoose.model('message', MessageSchema);


module.exports = message;


