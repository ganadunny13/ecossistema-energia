import React, { useState } from 'react';
import { FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

export default function AdminPanel() {
  const [ciclo, setCiclo] = useState('');
  const [checkStatus, setCheckStatus] = useState({
    financeiro: false,
    rh: false,
    administrativo: false,
  });

  const handleCheck = (setor) => {
    setCheckStatus(prev => ({ ...prev, [setor]: !prev[setor] }));
  };

  return (
    <div className="container-fluid">
      <h2 className="text-primary mb-4">Painel Administrativo 🏢</h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="m-0">Ciclo de referência:</h5>
        <div className="d-flex align-items-center gap-2">
          <input
            type="month"
            className="form-control"
            style={{ maxWidth: '200px' }}
            value={ciclo}
            onChange={(e) => setCiclo(e.target.value)}
          />
          <button className="btn btn-outline-secondary">
            <FaCalendarAlt className="me-1" /> Calendário
          </button>
        </div>
      </div>

      <div className="row g-4">
        {/* Financeiro */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5 className="text-success">Financeiro</h5>
            <p>Conferência de valores, pagamentos e integração com o Asaas e Conta Azul.</p>
            <button
              className={`btn w-100 ${checkStatus.financeiro ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => handleCheck('financeiro')}
            >
              <FaCheckCircle className="me-2" />
              {checkStatus.financeiro ? 'Check-in realizado' : 'Fazer check-in'}
            </button>
          </div>
        </div>

        {/* RH */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5 className="text-warning">Recursos Humanos</h5>
            <p>Controle de colaboradores, registros e documentação.</p>
            <button
              className={`btn w-100 ${checkStatus.rh ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => handleCheck('rh')}
            >
              <FaCheckCircle className="me-2" />
              {checkStatus.rh ? 'Check-in realizado' : 'Fazer check-in'}
            </button>
          </div>
        </div>

        {/* Administrativo */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5 className="text-primary">Administrativo</h5>
            <p>Checklist de documentos, scanner de contas e relatórios gerenciais.</p>
            <button
              className={`btn w-100 ${checkStatus.administrativo ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCheck('administrativo')}
            >
              <FaCheckCircle className="me-2" />
              {checkStatus.administrativo ? 'Check-in realizado' : 'Fazer check-in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
