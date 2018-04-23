const express = require('express');
const router = express.Router();
const artistsController =require('../controllers/artists');

router.get('/', artistsController.readAll);
router.get('/:id', artistsController.readIndividual);
router.post('/', artistsController.create);
router.put('/:id', artistsController.update);
router.delete('/:id', artistsController.destroy);

module.exports = router;
