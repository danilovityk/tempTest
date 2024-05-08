const mongoose = require('mongoose');

const User = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  telegram: String,
  whatsApp: String,
});

export default mongoose.models.User || mongoose.model("User", User);