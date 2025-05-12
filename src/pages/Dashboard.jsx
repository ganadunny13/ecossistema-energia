// src/pages/Dashboard.jsx
import React from 'react';

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <h1 className="mb-4 text-primary">Bem-vinda ao Painel do Ecossistema 🌱</h1>

      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Usuários</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">128</div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Créditos Gerados</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">3.200 kWh</div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Distribuídos</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">1.800 kWh</div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card border-left-danger shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Pendentes</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">1.400 kWh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

