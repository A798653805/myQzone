let mongoose = require('mongoose');
let FriendSchema = require('../schema/friend');

let Friend = mongoose.model('friend_list', FriendSchema);

module.exports = Friend;
