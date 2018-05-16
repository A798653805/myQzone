let mongoose = require('mongoose');
let PhotoSchema = require('../schema/photo');

let Photo = mongoose.model('photo', PhotoSchema);


module.exports = Photo;


