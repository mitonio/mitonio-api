const express = require('express');
const busController = require('../controllers/Bus.controller');

const router = express.Router();

router.get('/', busController.findBusLocation);
router.get('/:hall', busController.findStopsByBusHall);

module.exports = router;