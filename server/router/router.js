'use strict';

const { Router } = require('express');
const router = Router();

const exhibitionController = require('../controller/exhibition');
const artworkController = require('../controller/artwork');

router.get('/exhibition', exhibitionController.getExhibitions);
router.post('/exhibition', exhibitionController.postExhibition);
router.delete('/exhibition/:id', exhibitionController.deleteExhibition);

router.get('/artwork', artworkController.getArtworks);
router.post('/artwork', artworkController.postArtwork);
router.delete('/artwork', artworkController.deleteArtwork);

module.exports = router;
