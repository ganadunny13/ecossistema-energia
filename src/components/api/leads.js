const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // Seu modelo Mongoose

router.post('/leads', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;

        // Validação básica
        if (!nome || !email) {
            return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
        }

        // Criar o novo usuário (ou lead)
        const novoUsuario = new Usuario({
            nome: nome,
            email: email,
            telefone: telefone,
            leadSource: 'Formulário' // Exemplo: Canal de origem do lead
        });

        const usuarioSalvo = await novoUsuario.save();

        res.status(201).json({ message: 'Lead cadastrado com sucesso!', usuario: usuarioSalvo });

    } catch (error) {
        console.error('Erro ao cadastrar lead:', error);
        res.status(500).json({ error: 'Erro ao cadastrar lead. Tente novamente.' });
    }
});

module.exports = router;