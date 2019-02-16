const express = require('express');
const router = express.Router();

const featuredController = require('./../controllers/featuredBooks-controller');

router.get('/', featuredController.getAllFeatured);
router.delete('/:id', featuredController.deleteFeatured);
router.post('/', featuredController.addFeatured);
router.post('/seedFeatured', featuredController.seedDBFeatured);

module.exports = router;