const mongoose = require('mongoose');

const MembreSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  adresse: String,
  date_naissance: Date,
  sexe: String,
  gymnase: { type: mongoose.Schema.Types.ObjectId, ref: 'Gymnase' }
});

module.exports = mongoose.model('Membre', MembreSchema);
