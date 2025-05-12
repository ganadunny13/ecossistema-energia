import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaCalendarAlt } from 'react-icons/fa';

export default function AuditoriaFaturas() {
  const [faturaSelecionada, setFaturaSelecionada] = useState('Abril 2025');
  const [checklist, setChecklist] = useState({
    'Dados do Cliente': false,
    'Consumo (kWh)': false,
    'Créditos Aplicados': false,
    'Valor Final': false,
    'Data de Emissão': false,
  });
  const [observacoes, setObservacoes] = useState('');
  const [imagemFatura, setImagemFatura] = useState(null);

  const handleChange = (e) => {
    setChecklist({ ...checklist, [e.target.name]: e.target.checked });
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagemFatura(URL.createObjectURL(file));
    }
  };

  const faturasDisponiveis = ['Abril 2025', 'Março 2025', 'Fevereiro 2025'];

  const handleAprovar = () => {
    // Lógica para aprovar a fatura
    alert('Fatura aprovada com sucesso!');
  };

  const handleReprovar = () => {
    // Lógica para reprovar a fatura
    alert('Fatura reprovada.');
  };

  return (
    <div className="container-fluid">
      <h2 className="text-warning mb-4">Auditoria de Faturas</h2>
      <p>Escaneie, confira e aprove ou rejeite faturas de forma manual antes de enviar ao financeiro.</p>

      <div className="row">
        {/* Visualização da fatura */}
        <div className="col-md-8 mb-4">
          <div className="card p-3 shadow">
            <h5>{faturaSelecionada}</h5>
            {imagemFatura ? (
              <img
                src={imagemFatura}
                alt="Fatura"
                className="img-fluid"
              />
            ) : (
              <div className="text-center text-muted">
                <p>Nenhuma fatura carregada.</p>
              </div>
            )}
            <div className="mt-3">
              <label htmlFor="uploadFatura" className="form-label">Carregar Fatura (PDF ou Imagem)</label>
              <input
                type="file"
                className="form-control"
                id="uploadFatura"
                accept="image/*,application/pdf"
                onChange={handleUpload}
              />
            </div>
          </div>
        </div>

        {/* Checklist de validação */}
        <div className="col-md-4 mb-4">
          <div className="card p-3 shadow">
            <h6>Checklist de Verificação</h6>
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

            {/* Mini calendário */}
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

            {/* Campo de observações */}
            <div className="mt-3">
              <label htmlFor="observacoes" className="form-label">Observações</label>
              <textarea
                className="form-control"
                id="observacoes"
                rows="3"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
              ></textarea>
            </div>

            {/* Botões de ação */}
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-success w-45" onClick={handleAprovar}>
                <FaCheckCircle className="me-2" />
                Aprovar
              </button>
              <button className="btn btn-danger w-45" onClick={handleReprovar}>
                <FaTimesCircle className="me-2" />
                Reprovar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
