
const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Rider' },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  startLocation: Object,
  endLocation: Object,
  status: {
    type: String,
    enum: ['matched', 'en_route', 'completed'],
    default: 'matched',
  },
  startTime: Date,
  endTime: Date,
});

module.exports = mongoose.model('Ride', RideSchema);
