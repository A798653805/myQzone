let mongoose = require('mongoose');
let MsgSchema = require('../schema/msg');

let Msg = mongoose.model('msg', MsgSchema);

module.exports = Msg;


