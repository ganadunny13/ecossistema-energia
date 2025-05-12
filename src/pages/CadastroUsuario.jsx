// src/pages/CadastroUsuario.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    senha: '',
    telefone: '',
    endereco: '',
    cpf: '',
    dataNascimento: '',
    tipoUsuario: '',
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await axios.post('http://localhost:5000/api/auth/cadastro', formData);
      setMensagem(resposta.data.message || 'Cadastro realizado!');
      setFormData({
        nomeCompleto: '',
        email: '',
        senha: '',
        telefone: '',
        endereco: '',
        cpf: '',
        dataNascimento: '',
        tipoUsuario: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setMensagem('Erro ao cadastrar. Verifique os dados ou tente novamente.');
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4 text-primary">Cadastro de Novo Usuário</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Nome Completo</label>
            <input name="nomeCompleto" className="form-control" value={formData.nomeCompleto} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Senha</label>
            <input name="senha" type="password" className="form-control" value={formData.senha} onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label>Telefone</label>
            <input name="telefone" className="form-control" value={formData.telefone} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>CPF</label>
            <input name="cpf" className="form-control" value={formData.cpf} onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Endereço</label>
            <input name="endereco" className="form-control" value={formData.endereco} onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <label>Data de Nascimento</label>
            <input name="dataNascimento" type="date" className="form-control" value={formData.dataNascimento} onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <label>Tipo de Usuário</label>
            <select name="tipoUsuario" className="form-select" value={formData.tipoUsuario} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="cliente">Cliente</option>
              <option value="administrador">Administrador</option>
              <option value="vendedor">Vendedor</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-success">Cadastrar</button>
        {mensagem && <div className="mt-3 text-info">{mensagem}</div>}
      </form>
    </div>
  );
}






 //  usar msm logica  do cadastro de usuario/ para  o outro projeto 
 // # vem aleinware 
 