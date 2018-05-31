let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let msg = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  target:{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  content:{
    type: String,
  },
  is_remove:{
    type: Number,
    default: 0
  },
  created_time:{
    type: Date,
    default: Date.now()
  }
});

module.exports = msg;

