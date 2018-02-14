const express = require('express');
const router = express.Router();
const busRoutes = require('../bus/bus.routes');

router.use('/bus', busRoutes);

router.use((req, res) => res.status(404).json({ error: 'Not found' }));

module.exports = router;
