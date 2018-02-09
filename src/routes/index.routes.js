const express = require('express');
const router = express.Router();
const busRoutes = require('../bus/bus.routes');

router.use('/bus', busRoutes);

module.exports = router;
