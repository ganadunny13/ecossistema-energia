import React from 'react';

export default function Indicadores() {
  const dadosIndicadores = [
    {
      nome: 'Ana Costa',
      indicados: 5,
      clientesAtivos: 3,
      economiaGerada: 'R$ 1.200,00',
      comissao: 'R$ 150,00',
    },
    {
      nome: 'Carlos Silva',
      indicados: 8,
      clientesAtivos: 6,
      economiaGerada: 'R$ 2.800,00',
      comissao: 'R$ 320,00',
    },
  ];

  return (
    <div className="container-fluid">
      <h2 className="text-primary mb-4">Painel de Indicadores</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Indicações</th>
            <th>Clientes Ativos</th>
            <th>Economia Gerada</th>
            <th>Comissão</th>
          </tr>
        </thead>
        <tbody>
          {dadosIndicadores.map((ind, index) => (
            <tr key={index}>
              <td>{ind.nome}</td>
              <td>{ind.indicados}</td>
              <td>{ind.clientesAtivos}</td>
              <td>{ind.economiaGerada}</td>
              <td>{ind.comissao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
