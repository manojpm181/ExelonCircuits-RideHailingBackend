const express = require('express');
const { updateStatus, updateLocation } = require('../controllers/driverController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

// Update driver status (online/offline)
router.post('/:driverId/status', protect, updateStatus);

// Update driver location
router.post('/:driverId/location', protect, updateLocation);

module.exports = router;