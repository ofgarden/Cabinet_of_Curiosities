'use strict';

const Mongoose = require('mongoose');

// TODO: IMAGE
const artworkSchema = new Mongoose.Schema ({
  artist: String,
  title: String,
  date: Date,
  medium: String,
  memo: String
})

module.exports = Mongoose.model('Artwork', artworkSchema);