'use strict';

const Artwork = require('../model/artwork');

async function getArtworks (req, res) {
  try {
    const request = await Artwork.find();
    res.json(request);
    res.status(200);
  } catch (error) {
    console.log('[ERROR] ', error);
    res.status(400);
  }
}

async function postArtwork (req, res) {
  try {
    const request = await Artwork.create(req.body);
    res.json(request);
    res.status(201);
  } catch (error) {
    console.log('[ERROR] ', error);
    res.status(400);
  }
}

async function deleteArtwork (req, res) {
  try {
    await Artwork.findByIdAndDelete(req.params.id);
    res.json('Deleted!');
  } catch (error) {
    console.log('[ERROR] ', error);
    res.status(400);
  }
}

module.exports = { getArtworks, postArtwork, deleteArtwork };
