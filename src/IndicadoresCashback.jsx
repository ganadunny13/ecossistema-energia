import React from 'react';
import { FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

export default function IndicadoresCashback() {
  const parceiros = [
    { nome: 'João Silva', indicacoes: 5, comissao: 750, pago: false },
    { nome: 'Maria Gomes', indicacoes: 3, comissao: 450, pago: true },
    { nome: 'Pedro Santos', indicacoes: 7, comissao: 1050, pago: false },
  ];

  return (
    <div className="container-fluid">
      <h2 className="text-primary mb-4">Indicadores & Cashback 💰</h2>

      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-secondary">
          <FaCalendarAlt className="me-2" />
          Selecionar Período
        </button>
      </div>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Parceiro</th>
            <th>Nº de Indicações</th>
            <th>Comissão Total</th>
            <th>Status de Pagamento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {parceiros.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.indicacoes}</td>
              <td>R$ {item.comissao},00</td>
              <td>
                {item.pago ? (
                  <span className="badge bg-success">Pago</span>
                ) : (
                  <span className="badge bg-warning text-dark">Pendente</span>
                )}
              </td>
              <td>
                <button className="btn btn-outline-info btn-sm">
                  <FaCheckCircle className="me-1" />
                  Ver Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
