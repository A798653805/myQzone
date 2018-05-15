let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let blog = new Schema({
  title:{
    type: String
  },
  content:{
    type: String
  },
  author:{
    type: String
  },
  comment:{
    type: Array
  },
  user_id:{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  created_time:{
    type:Date,
    default: Date.now
  }
});

module.exports = blog;

