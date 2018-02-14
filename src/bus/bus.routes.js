const express = require('express');
const busController = require('./Bus.controller');
const busMiddleware = require('./busMiddleware.middleware');

const router = express.Router();

router.get('/line/:busNumber', busMiddleware.getTokenAuth, busController.findBusByLine);
router.get('/localization/:busNumber', busMiddleware.getTokenAuth, busController.findBusLocalization);

module.exports = router;
