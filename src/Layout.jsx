// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout() {
  return (
    <div id="wrapper" className="d-flex">
      {/* Sidebar à esquerda */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div id="content-wrapper" className="d-flex flex-column w-100">
        <div id="content">
          {/* Topbar no topo */}
          <Topbar />

          {/* Conteúdo das rotas renderizado aqui */}
          <div className="container-fluid mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
