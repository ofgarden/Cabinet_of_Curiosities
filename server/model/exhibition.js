'use strict';

const Mongoose = require('mongoose');

// TODO: IMAGE
const exhibitionSchema = new Mongoose.Schema ({
  title: String,
  date: Date,
  venue: String,
  review: String
})

module.exports = Mongoose.model('Exhibition', exhibitionSchema);