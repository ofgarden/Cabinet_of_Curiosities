'use strict';

const Exhibition = require('../model/exhibition');

async function getExhibitions (req, res) {
  try {
    const request = await Exhibition.find();
    res.json(request);
    res.status(200);
  } catch (error) {
    console.log('[ERROR] ', error);
    res.status(400);
  }
}

async function postExhibition (req, res) {
  try {
    const request = await Exhibition.create(req.body);
    res.json(request);
    res.status(201);
  } catch (error) {
    console.log('[ERROR] ', error);
    res.status(400);
  }
}

async function deleteExhibition (req, res) {
  try {
    await Exhibition.findByIdAndDelete(req.params.id);
    res.json('Deleted!');
  } catch (error) {
    console.log('[ERROR] ', error);
    res.status(400);
  }
}

module.exports = { getExhibitions, postExhibition, deleteExhibition };
