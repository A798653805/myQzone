let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let photo = new Schema({
  photo_path:{
    type: String
  },
  photo_list_id:{
    type: Schema.Types.ObjectId,
    ref: 'photo_list'
  },
  is_remove: {
    type: Number,
    default: 0
  },
  created_time: {
    type: Date,
    default: Date.now
  }
});

module.exports = photo;


