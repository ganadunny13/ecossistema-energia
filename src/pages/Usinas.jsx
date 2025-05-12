import React from 'react';

export default function Usinas() {
  const usinas = [
    { nome: 'Usina Solar A', local: 'Goiás', status: 'Ativa' },
    { nome: 'Usina Solar B', local: 'Minas Gerais', status: 'Manutenção' },
    { nome: 'Usina Solar C', local: 'Bahia', status: 'Ativa' },
  ];

  return (
    <div className="container-fluid">
      <h2 className="text-primary mb-4">Gestão de Usinas</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Localização</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {usinas.map((usina, index) => (
            <tr key={index}>
              <td>{usina.nome}</td>
              <td>{usina.local}</td>
              <td>{usina.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
