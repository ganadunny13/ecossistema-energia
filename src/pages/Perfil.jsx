// src/pages/Perfil.jsx
import React, { useState } from 'react';

export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nome: 'Gabriela Alves Rodrigues',
    email: 'gabriela@example.com',
    telefone: '(62) 91234-5678',
    endereco: 'Rua das Flores, 123 - Goiânia, GO',
    creditos: 150,
  });

  const [editando, setEditando] = useState(false);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Lógica para salvar as alterações
    setEditando(false);
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4 text-primary">Perfil do Usuário</h2>
      <div className="card p-4">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            name="telefone"
            value={usuario.telefone}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Endereço</label>
          <input
            type="text"
            className="form-control"
            name="endereco"
            value={usuario.endereco}
            onChange={handleChange}
            disabled={!editando}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Créditos Acumulados</label>
          <input
            type="text"
            className="form-control"
            value={`${usuario.creditos} kWh`}
            disabled
          />
        </div>
        <div className="d-flex justify-content-end">
          {editando ? (
            <button className="btn btn-success" onClick={handleSave}>
              Salvar
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => setEditando(true)}>
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
