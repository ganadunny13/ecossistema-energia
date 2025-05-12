import React from 'react';

export default function FinanceiroRh() {
  const colaboradores = [
    { nome: 'Ana Vendedora', papel: 'Comercial', comissao: 1200, pago: true },
    { nome: 'Carlos Técnico', papel: 'Instalador', comissao: 950, pago: false },
    { nome: 'Fernanda RH', papel: 'RH/Admin', comissao: 2500, pago: true },
  ];

  return (
    <div className="container-fluid">
      <h2 className="text-primary mb-4">Painel Financeiro & RH 💰</h2>

      <table className="table table-hover">
        <thead className="table-light">
          <tr>
            <th>Nome</th>
            <th>Papel</th>
            <th>Comissão / Salário</th>
            <th>Status de Pagamento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colab, index) => (
            <tr key={index}>
              <td>{colab.nome}</td>
              <td>{colab.papel}</td>
              <td>R$ {colab.comissao},00</td>
              <td>
                {colab.pago ? (
                  <span className="badge bg-success">Pago</span>
                ) : (
                  <span className="badge bg-warning text-dark">Pendente</span>
                )}
              </td>
              <td>
                <button className="btn btn-outline-primary btn-sm">
                  Visualizar Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
