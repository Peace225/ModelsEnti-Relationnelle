const mongoose = require('mongoose');

const SeanceSchema = new mongoose.Schema({
  type_sport: String,
  horaire: Date,
  max_adherents: { type: Number, default: 20 },
  gymnase: { type: mongoose.Schema.Types.ObjectId, ref: 'Gymnase' },
  coachs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coach' }]
});

module.exports = mongoose.model('Seance', SeanceSchema);
