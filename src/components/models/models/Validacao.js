const mongoose = require('mongoose');

const ValidacaoSchema = new mongoose.Schema({
  fatura: String,
  checklist: Object,
  observacoes: String,
  status: String,
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Validacao', ValidacaoSchema);
