// src/pages/Historico.jsx
import React from 'react';

export default function Historico() {
  const faturas = [
    {
      mes: 'Abril 2025',
      consumo: 250,
      creditos: 50,
      valor: 'R$ 200,00',
      status: 'Pago',
    },
    {
      mes: 'Março 2025',
      consumo: 230,
      creditos: 30,
      valor: 'R$ 180,00',
      status: 'Pendente',
    },
    // Adicione mais faturas conforme necessário
  ];

  return (
    <div className="container-fluid">
      <h1 className="text-primary mb-4">Histórico de Energia</h1>
      <p>Aqui você poderá consultar todas as faturas, injeções de energia, gastos e créditos acumulados.</p>

      <h2 className="mb-4 text-primary mt-5">Histórico de Faturas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Consumo (kWh)</th>
            <th>Créditos Utilizados</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Fatura</th>
          </tr>
        </thead>
        <tbody>
          {faturas.map((fatura, index) => (
            <tr key={index}>
              <td>{fatura.mes}</td>
              <td>{fatura.consumo}</td>
              <td>{fatura.creditos}</td>
              <td>{fatura.valor}</td>
              <td>{fatura.status}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
