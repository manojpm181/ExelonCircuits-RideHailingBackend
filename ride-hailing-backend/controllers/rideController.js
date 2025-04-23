const Ride = require('../models/Ride');
const Driver = require('../models/Driver');
const Rider = require('../models/Rider');
const { findNearestDriver } = require('../utils/findNearestDriver');

// Request a ride (rider)
exports.requestRide = async (req, res) => {
  const { riderId, startLocation, endLocation } = req.body;

  // Find the nearest available driver
  const driver = await findNearestDriver(startLocation);

  if (!driver) {
    return res.status(404).json({ message: "No available drivers nearby" });
  }

  // Create a new ride
  const ride = new Ride({
    riderId,
    driverId: driver._id,
    startLocation,
    endLocation,
    status: 'matched',
    startTime: new Date(),
  });

  await ride.save();
  res.status(201).json({ message: "Ride requested", ride });
};

// Get ride status
exports.getRideStatus = async (req, res) => {
  const ride = await Ride.findById(req.params.rideId);

  if (!ride) return res.status(404).json({ message: "Ride not found" });

  res.status(200).json({ status: ride.status });
};