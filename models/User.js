const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please add a username'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please add a valid email'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  hashedPassword: {
    type: String,
    required: [true, 'Please add a password']
  }
},
  {
    timestamps: true
  });

const User = mongoose.model('User', userSchema);

module.exports = User;