
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Driver = require('../models/Driver');
const Rider = require('../models/Rider');

const generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  const { role, name, email, password, vehicleDetails } = req.body;
  const hash = await bcrypt.hash(password, 10);

  try {
    let user;
    if (role === 'driver') {
      user = new Driver({ name, email, password: hash, vehicleDetails });
    } else {
      user = new Rider({ name, email, password: hash });
    }

    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { role, email, password } = req.body;

  const Model = role === 'driver' ? Driver : Rider;
  const user = await Model.findOne({ email });

  if (!user) return res.status(400).json({ message: "Invalid email" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = generateToken({ id: user._id, role });
  res.json({ token });
};
