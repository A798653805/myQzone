let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let photoList = new Schema({
  user_id: {
    type: Schema.Types.ObjectId
  },
  title:{
    type: String
  },
  photo_num:{
    type: Number,
    default:0
  }
});

module.exports = photoList;


