
const mongoose = require('mongoose');

const RiderSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  currentLocation: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model('Rider', RiderSchema);
