// routes/cadastroUsuario.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario'); // Modelo Mongoose
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  arquivos: Array,
  dataCadastro: Date
});

module.exports = mongoose.model('Usuario', UsuarioSchema);


router.post('/cadastro', async (req, res) => {
  try {
    const {
      nomeCompleto,
      email,
      senha,
      telefone,
      endereco,
      tipoUsuario,
      dataNascimento,
      cpf
    } = req.body;

    // Verificação básica
    if (!nomeCompleto || !email || !senha) {
      return res.status(400).json({ error: 'Nome, e-mail e senha são obrigatórios.' });
    }

    // Verifica duplicidade de e-mail
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    // Criptografa a senha
    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    // Cria e salva o usuário
    const novoUsuario = new Usuario({
      nome: nomeCompleto,
      email,
      senha: senhaCriptografada,
      telefone,
      endereco,
      tipoUsuario,
      dataNascimento,
      cpf,
      dataCadastro: new Date()
    });

    const usuarioSalvo = await novoUsuario.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuario: usuarioSalvo });

  } catch (error) {
    console.error('❌ Erro ao cadastrar usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário. Tente novamente.' });
  }
});

module.exports = router;
