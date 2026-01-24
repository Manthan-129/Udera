// const mongoose= require('mongoose');

// const userSchema = new mongoose.Schema({
//   _id: { type: String, required: true },
//   name: { type: String },
//   email: { type: String, default: null },
//   imageUrl: { type: String },
// }, { timestamps: true });

// const User = mongoose.models.User || mongoose.model('User', userSchema);

// module.exports= User;


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String },
  email: { type: String, default: null },
  imageUrl: { type: String },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
