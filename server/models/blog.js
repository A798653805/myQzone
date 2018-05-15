let mongoose = require('mongoose');
let BlogSchema = require('../schema/blog');

let Blog = mongoose.model('article', BlogSchema);



module.exports = Blog;


