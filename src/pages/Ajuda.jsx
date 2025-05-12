import React, { useState } from 'react';
import axios from 'axios';

export default function Ajuda() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !email || !mensagem) return;

    try {
      await axios.post('http://localhost:5000/api/ajuda', { nome, email, mensagem });
      setNome('');
      setEmail('');
      setMensagem('');
      setEnviado(true);
      setTimeout(() => setEnviado(false), 3000);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4 text-primary">Central de Ajuda 💬</h2>

      {/* ... FAQs ... */}

      <div className="bg-light p-4 rounded shadow-sm mb-4">
        <h5 className="text-success mb-3">Falar com o Suporte</h5>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            className="form-control mb-2"
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="form-control mb-2"
            rows="4"
            placeholder="Digite sua mensagem aqui..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
          {enviado && <div className="text-success mt-2">Mensagem enviada com sucesso! ✅</div>}
        </form>
      </div>

      {/* ... Base de conhecimento ... */}
    </div>
  );
}
