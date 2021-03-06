let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let blog = new Schema({
  title:{
    type: String
  },
  content:{
    type: String
  },
  user_id:{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  is_remove:{
    type: Number,
    default: 0
  },
  created_time:{
    type:Date,
    default: Date.now
  }
});

module.exports = blog;
  
