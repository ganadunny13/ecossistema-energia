import React from 'react';

export default function Faturas() {
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
  ];

  const handleDownload = (mes) => {
    alert(`Iniciando download da fatura de ${mes}...`);
    // Aqui pode colocar lógica real de download com link de arquivo.
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4 text-primary">Histórico de Faturas</h2>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Mês</th>
              <th>Consumo (kWh)</th>
              <th>Créditos Utilizados</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {faturas.map((fatura, index) => (
              <tr key={index}>
                <td>{fatura.mes}</td>
                <td>{fatura.consumo}</td>
                <td>{fatura.creditos}</td>
                <td>{fatura.valor}</td>
                <td>
                  <span className={`badge ${fatura.status === 'Pago' ? 'bg-success' : 'bg-warning text-dark'}`}>
                    {fatura.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleDownload(fatura.mes)}
                  >
                    <i className="fas fa-download me-1"></i> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
