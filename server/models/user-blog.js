let mongoose = require('mongoose');
let UserBlogSchema = require('../schema/user-blog');

let UserB = mongoose.model('user_atricle', UserBlogSchema);

module.exports = UserB;


