import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/leads', formData);
            console.log('Lead cadastrado com sucesso!', response.data);
            // Exibir mensagem de sucesso
        } catch (error) {
            console.error('Erro ao cadastrar lead:', error);
            // Exibir mensagem de erro
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
            <input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default LeadForm;