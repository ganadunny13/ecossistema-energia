import React from 'react';

export default function VisualGeral() {
  const impacto = {
    energiaGerada: 3200,
    energiaDistribuida: 1800,
    usuariosAtivos: 100,
    economia: 15000,
  };

  return (
    <div className="container-fluid">
      <h1 className="text-primary mb-4">Visão Geral do Ecossistema 🌍</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow h-100 p-4">
            <h5 className="card-title text-success">Empresas Parceiras</h5>
            <p className="card-text">
              Atualmente temos <strong>3 empresas geradoras</strong> ativas, todas comprometidas com energia limpa e sustentável.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow h-100 p-4">
            <h5 className="card-title text-info">Meta Ambiental</h5>
            <p className="card-text">
              A meta é reduzir <strong>1 tonelada de CO₂</strong> por mês com energia solar compartilhada. 🌞
            </p>
          </div>
        </div>

        <div className="col-md-12 mb-4">
          <div className="card shadow h-100 p-4">
            <h5 className="card-title text-warning">Impacto Total</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">⚡ <strong>{impacto.energiaGerada} kWh</strong> gerados este mês</li>
              <li className="list-group-item">🔄 <strong>{impacto.energiaDistribuida} kWh</strong> distribuídos</li>
              <li className="list-group-item">👥 <strong>{impacto.usuariosAtivos}</strong> usuários ativos</li>
              <li className="list-group-item">💰 <strong>R$ {impacto.economia.toLocaleString('pt-BR')}</strong> economizados pelos clientes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
