let mongoose = require('mongoose');
let MoodSchema = require('../schema/mood');

let Mood = mongoose.model('mood', MoodSchema);

module.exports = Mood;

