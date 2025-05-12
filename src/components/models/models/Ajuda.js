// routes/ajuda.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');

// Schema e Model definidos aqui mesmo
const AjudaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  mensagem: { type: String, required: true },
  data: { type: Date, default: Date.now }
});

const Ajuda = mongoose.models.Ajuda || mongoose.model('Ajuda', AjudaSchema);

// Rota POST /api/ajuda
router.post('/', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
    await new Ajuda({ nome, email, mensagem }).save();

    const webhookSlack = 'https://hooks.slack.com/services/SEU/WEBHOOK/URL'; // Substitua pela sua URL real
    await axios.post(webhookSlack, {
      text: `💬 *Nova mensagem de ajuda:*\n👤 *${nome}*\n📧 ${email}\n📝 ${mensagem}`
    });

    res.status(201).json({ mensagem: 'Mensagem registrada e enviada ao suporte!' });
  } catch (error) {
    console.error('Erro na rota /ajuda:', error);
    res.status(500).json({ mensagem: 'Erro ao processar a solicitação.' });
  }
});

module.exports = router;
