let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let photoList = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  title:{
    type: String
  },
  cover:{
    type: String,
    default: " \/api\/photos\/timg.jpg"
  },
  is_remove:{
    type:Number,
    default: 0
  },
  photo_num:{
    type: Number,
    default:0
  }
});

module.exports = photoList;


