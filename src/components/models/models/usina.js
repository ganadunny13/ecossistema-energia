const mongoose = require('mongoose');

const UsinaSchema = new mongoose.Schema({
  nome: String,
  localizacao: String,
  status: String,
  responsavel: String,
  criadaEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usina', UsinaSchema);
