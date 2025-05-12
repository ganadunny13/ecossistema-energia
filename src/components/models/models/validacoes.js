const express = require('express');
const router = express.Router();
const Validacao = require('../models/Validacao');

router.post('/', async (req, res) => {
  try {
    const validacao = new Validacao(req.body);
    await validacao.save();
    res.status(201).json({ mensagem: 'Validação salva com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar validação:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const validacoes = await Validacao.find();
    res.json(validacoes);
  } catch (error) {
    console.error('Erro ao buscar validações:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar registros.' });
  }
});

module.exports = router;
