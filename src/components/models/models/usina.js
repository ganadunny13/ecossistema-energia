// models/Usina.js
const mongoose = require('mongoose');

const UsinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  localizacao: { type: String, required: true },
  status: { type: String, required: true },
  responsavel: { type: String, required: true },
  criadaEm: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Usina || mongoose.model('Usina', UsinaSchema);
