import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-solar-panel"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Ecossistema</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Painel</span>
        </Link>
      </li> 
      
       <li className="nav-item">
  <Link className="nav-link" to="/financeiro-rh">
    <i className="fas fa-briefcase"></i>
    <span>Financeiro & RH</span>
  </Link>
</li>

      <li className="nav-item">
        <Link className="nav-link" to="/cadastro">
          <i className="fas fa-user-plus"></i>
          <span>Cadastro de Usuário</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/distribuicao">
          <i className="fas fa-bolt"></i>
          <span>Distribuição de Créditos</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/consumo">
          <i className="fas fa-chart-line"></i>
          <span>Consumo</span>
        </Link>
      </li> 
      <li className="nav-item">
  <Link className="nav-link" to="/verificar-faturas">
    <i className="fas fa-file-invoice"></i>
    <span>Verificar Faturas</span>
  </Link>
</li>

      
      <li className="nav-item">
  <Link className="nav-link" to="/usinas">
    <i className="fas fa-industry"></i>
    <span>Usinas</span>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/indicadores">
    <i className="fas fa-users"></i>
    <span>Indicadores</span>
  </Link>
</li> 
<li className="nav-item">
  <Link className="nav-link" to="/comissionados">
    <i className="fas fa-hand-holding-usd"></i>
    <span>Comissionados</span>
  </Link>
</li> 

<li className="nav-item">
  <Link className="nav-link" to="/auditoria">
    <i className="fas fa-file-invoice"></i>
    <span>Auditoria de Faturas</span>
  </Link>
</li>


      <li className="nav-item">
        <Link className="nav-link" to="/historico">
          <i className="fas fa-history"></i>
          <span>Histórico</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/perfil">
          <i className="fas fa-user"></i>
          <span>Perfil</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/visualgeral">
          <i className="fas fa-globe"></i>
          <span>Visual Geral</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/ajuda">
          <i className="fas fa-question-circle"></i>
          <span>Ajuda</span>
        </Link>
      </li>
    </ul>
    
  );
}
