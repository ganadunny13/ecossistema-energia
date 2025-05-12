import React, { useState } from 'react';

export default function ValidacaoFaturas() {
  const [faturaSelecionada, setFaturaSelecionada] = useState('Abril 2025');
  const [checklist, setChecklist] = useState({
    'Dados do Cliente Conferidos': false,
    'Consumo Corresponde à Fatura': false,
    'Valores Calculados Corretamente': false,
    'CNPJ/CPF conferido': false,
  });

  const handleChange = (e) => {
    setChecklist({ ...checklist, [e.target.name]: e.target.checked });
  };

  const faturasDisponiveis = ['Abril 2025', 'Março 2025', 'Fevereiro 2025'];

  return (
    <div className="container-fluid">
      <h2 className="text-primary mb-4">Verificação de Faturas</h2>

      <div className="row">
        {/* Visualização da fatura */}
        <div className="col-md-8 mb-4">
          <div className="card p-3 shadow">
            <h5>{faturaSelecionada}</h5>
            <img
              src="https://via.placeholder.com/600x400?text=Fatura+Escaneada"
              alt="Fatura"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Checklist de validação */}
        <div className="col-md-4 mb-4">
          <div className="card p-3 shadow">
            <h6 className="mb-3">Checklist de Verificação</h6>
            {Object.keys(checklist).map((item, i) => (
              <div className="form-check" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={item}
                  id={item}
                  checked={checklist[item]}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={item}>
                  {item}
                </label>
              </div>
            ))}

            {/* Mini calendário de referência */}
            <div className="mt-3">
              <label htmlFor="mesRef" className="form-label">Mês de Referência</label>
              <select
                id="mesRef"
                className="form-select"
                value={faturaSelecionada}
                onChange={(e) => setFaturaSelecionada(e.target.value)}
              >
                {faturasDisponiveis.map((mes, i) => (
                  <option key={i} value={mes}>{mes}</option>
                ))}
              </select>
            </div>

            <button className="btn btn-success mt-3 w-100">
              Salvar Verificação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
