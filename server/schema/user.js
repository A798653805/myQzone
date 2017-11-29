let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let user = new Schema({
    userid:{
      type: String,
      unique:true,
    },
    username: {
        type: String,
        require: true
    },
    pwd: {
      type: String,
      require: true
    }
});

modules.export = user;
