// models/Validacao.js
const mongoose = require('mongoose');

const ValidacaoSchema = new mongoose.Schema({
  fatura: { type: String, required: true },
  checklist: { type: Object, required: true },
  observacoes: { type: String },
  status: { type: String, required: true, enum: ['aprovado', 'reprovado', 'pendente'] },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Validacao || mongoose.model('Validacao', ValidacaoSchema);
