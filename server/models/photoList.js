let mongoose = require('mongoose');
let PhotoListSchema = require('../schema/photoList');

let PhotoList = mongoose.model('photo_list', PhotoListSchema);


module.exports = PhotoList;


