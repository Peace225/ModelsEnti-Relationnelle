const mongoose = require('mongoose');

const GymnaseSchema = new mongoose.Schema({
  nom: String,
  adresse: String,
  telephone: String
});

module.exports = mongoose.model('Gymnase', GymnaseSchema);
