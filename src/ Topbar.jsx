import React from 'react';

export default function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle me-3">
        <i className="fa fa-bars"></i>
      </button>

      <span className="navbar-brand mb-0 h1 text-primary">Painel Administrativo</span>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown no-arrow">
          <button
            className="nav-link dropdown-toggle btn btn-link"
            id="userDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="me-2 d-none d-lg-inline text-gray-600 small">Olá, Vendedora</span>
            <img
              className="img-profile rounded-circle"
              src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
              alt="usuário"
            />
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow animated--grow-in" aria-labelledby="userDropdown">
            <li>
              <button className="dropdown-item btn btn-link">
                <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                Perfil
              </button>
            </li>
            <li>
              <button className="dropdown-item btn btn-link">
                <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                Configurações
              </button>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button className="dropdown-item btn btn-link">
                <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                Sair
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
