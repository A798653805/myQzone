let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let user = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
      type: String,
      require: true
    }
});

module.exports = user;
