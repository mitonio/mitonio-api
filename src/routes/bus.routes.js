const express = require('express');
const busController = require('../controllers/Bus.controller');
const busMiddleware = require('../middlewares/busMiddleware.middleware');

const router = express.Router();

router.get('/line/:busNumber', busController.findBusLocation);
router.get('/stop/:busNumber', busController.findBusLocalization);

module.exports = router;
