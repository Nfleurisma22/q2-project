const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songs');

router.get('/artists/:artist_id', songsController.readAll);
router.post('/artists/:artist_id', songsController.create);
router.put('/:song_id/artists/:artist_id', songsController.update);
router.delete('/:song_id/artists/:artist_id', songsController.destroy);

module.exports = router;
