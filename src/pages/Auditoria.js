// models/Auditoria.js
const mongoose = require('mongoose');

const AuditoriaSchema = new mongoose.Schema({
  fatura: { type: String, required: true },
  checklist: {
    type: Map,
    of: Boolean,
    required: true,
  },
  observacoes: { type: String },
  status: { type: String, enum: ['aprovado', 'reprovado'], required: true },
  dataHora: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Auditoria', AuditoriaSchema);
