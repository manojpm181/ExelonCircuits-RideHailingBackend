const express = require('express');
const { requestRide, getRideStatus } = require('../controllers/rideController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

// Request a ride
router.post('/request', protect, requestRide);

// Get ride status
router.get('/:rideId/status', protect, getRideStatus);

module.exports = router;