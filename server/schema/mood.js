let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let message = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  friend_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  is_remove: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    default: 2 //0拒绝 1成功 2未处理
  },
  created_time: {
    type: Date,
    default: Date.now
  }
});

module.exports = message;

