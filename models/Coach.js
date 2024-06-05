const mongoose = require('mongoose');

const CoachSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  age: Number,
  specialite: String
});

module.exports = mongoose.model('Coach', CoachSchema);
