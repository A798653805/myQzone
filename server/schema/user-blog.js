let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userB = new Schema({
  user_id:{
    type: Schema.Types.ObjectId
  },
  blog_id: {
    type: Schema.Types.ObjectId
  }

});

module.exports = userB;


