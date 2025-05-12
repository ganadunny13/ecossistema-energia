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
  <Link className="nav-link" to="/painel-adm">
    <i className="fas fa-tools"></i>
    <span>Painel Adm</span>
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link" to="/indicadores-cashback">
    <i className="fas fa-chart-line"></i>
    <span>Indicadores & Cashback</span>
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/cadastro-usuario">
    <i className="fas fa-id-card"></i>
    <span>Cadastro de Usuário</span>
  </Link>
</li>


      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Painel</span>
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
    </ul>
  );
}
