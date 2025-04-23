
const Driver = require('../models/Driver');

// Haversine formula to calculate distance between two lat-lng points
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

// Find nearest available driver
exports.findNearestDriver = async (riderLocation) => {
  const { lat, lng } = riderLocation;

  // Find all drivers who are online
  const drivers = await Driver.find({ status: 'online' });

  // Calculate distance and find the nearest driver
  let nearestDriver = null;
  let minDistance = Infinity;

  drivers.forEach(driver => {
    const distance = haversineDistance(lat, lng, driver.currentLocation.lat, driver.currentLocation.lng);
    if (distance < minDistance) {
      nearestDriver = driver;
      minDistance = distance;
    }
  });

  return nearestDriver;
};