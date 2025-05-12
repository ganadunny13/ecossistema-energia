import React from 'react';

export default function Consumo() {
  const dadosMensais = [
    { mes: 'Janeiro', consumo: 220, injetado: 300 },
    { mes: 'Fevereiro', consumo: 180, injetado: 300 },
    { mes: 'Março', consumo: 240, injetado: 300 },
    { mes: 'Abril', consumo: 250, injetado: 300 },
  ];

  const totalConsumido = dadosMensais.reduce((acc, val) => acc + val.consumo, 0);
  const totalInjetado = dadosMensais.reduce((acc, val) => acc + val.injetado, 0);
  const creditoAcumulado = totalInjetado - totalConsumido;

  return (
    <div className="container-fluid">
      <h2 className="text-primary mb-4">Painel de Consumo 🌍</h2>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow p-3">
            <h5>Total Consumido</h5>
            <p className="text-danger fw-bold">{totalConsumido} kWh</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow p-3">
            <h5>Total Injetado</h5>
            <p className="text-success fw-bold">{totalInjetado} kWh</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow p-3">
            <h5>Créditos Acumulados</h5>
            <p className={`fw-bold ${creditoAcumulado >= 0 ? 'text-primary' : 'text-danger'}`}>
              {creditoAcumulado} kWh
            </p>
          </div>
        </div>
      </div>

      <div className="card p-4 shadow-sm mt-4">
        <h5 className="mb-3">Resumo Mensal</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Mês</th>
              <th>Consumido</th>
              <th>Injetado</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {dadosMensais.map((mes, i) => {
              const saldo = mes.injetado - mes.consumo;
              return (
                <tr key={i}>
                  <td>{mes.mes}</td>
                  <td>{mes.consumo} kWh</td>
                  <td>{mes.injetado} kWh</td>
                  <td className={saldo >= 0 ? 'text-success' : 'text-danger'}>
                    {saldo} kWh
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
