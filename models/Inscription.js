const mongoose = require('mongoose');

const InscriptionSchema = new mongoose.Schema({
  membre: { type: mongoose.Schema.Types.ObjectId, ref: 'Membre' },
  seance: { type: mongoose.Schema.Types.ObjectId, ref: 'Seance' }
});

module.exports = mongoose.model('Inscription', InscriptionSchema);
