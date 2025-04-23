
const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  vehicleDetails: String,
  currentLocation: {
    lat: Number,
    lng: Number,
  },
  status: {
    type: String,
    enum: ['online', 'offline'],
    default: 'offline'
  }
});

module.exports = mongoose.model('Driver', DriverSchema);
