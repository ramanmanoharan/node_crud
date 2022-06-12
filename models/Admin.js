var mongoose = require('mongoose');
var AdminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Admin', AdminSchema);