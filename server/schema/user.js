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
    },
    nickname: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    }
});

module.exports = user;
