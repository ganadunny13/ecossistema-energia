import React from 'react';

export default function Comissionados() {
  const indicacoes = [
    { indicador: 'João Silva', indicados: 5, totalComissao: 750, pago: false },
    { indicador: 'Maria Gomes', indicados: 3, totalComissao: 450, pago: true },
    { indicador: 'Pedro Santos', indicados: 7, totalComissao: 1050, pago: false },
  ];

  return (
    <div className="container-fluid">
      <h2 className="text-primary mb-4">Comissionados & Indicadores 💼</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Indicador</th>
            <th>Nº de Indicações</th>
            <th>Comissão Total</th>
            <th>Status de Pagamento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {indicacoes.map((item, index) => (
            <tr key={index}>
              <td>{item.indicador}</td>
              <td>{item.indicados}</td>
              <td>R$ {item.totalComissao},00</td>
              <td>
                {item.pago ? (
                  <span className="badge bg-success">Pago</span>
                ) : (
                  <span className="badge bg-warning text-dark">Pendente</span>
                )}
              </td>
              <td>
                <button className="btn btn-outline-info btn-sm">Ver Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
