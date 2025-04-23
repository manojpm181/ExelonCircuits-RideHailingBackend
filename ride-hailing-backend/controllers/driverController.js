
const Driver = require('../models/Driver');
const Ride = require('../models/Ride');

// Update driver status (online/offline)
exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  const driver = await Driver.findById(req.params.driverId);

  if (!driver) return res.status(404).json({ message: "Driver not found" });

  driver.status = status;
  await driver.save();

  res.status(200).json({ message: Driver status updated to ${status} });
};

// Update driver location
exports.updateLocation = async (req, res) => {
  const { lat, lng } = req.body;
  const driver = await Driver.findById(req.params.driverId);

  if (!driver) return res.status(404).json({ message: "Driver not found" });

  driver.currentLocation = { lat, lng };
  await driver.save();

  res.status(200).json({ message: "Driver location updated" });
};