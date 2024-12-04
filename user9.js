const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['employer', 'seeker'] },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
