import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import UserForm from './components/UserForm';
import Distribuicao from './pages/Distribuicao';
import Historico from './pages/Historico';
import Perfil from './pages/Perfil';
import Ajuda from './pages/Ajuda';
import VisualGeral from './pages/VisualGeral';
import Faturas from './pages/Faturas';
import Consumo from './pages/Consumo';
import Usinas from './pages/Usinas';
import Indicadores from './pages/Indicadores';
import VerificacaoFaturas from './pages/VerificacaoFaturas';
import FinanceiroRh from './pages/FinanceiroRh';
import Comissionados from './pages/Comissionados';
import AuditoriaFaturas from './pages/AuditoriaFaturas';
import IndicadoresCashback from './pages/IndicadoresCashback';
import CadastroUsuario from './pages/CadastroUsuario';

// Rotas Admin
import AdminPanel from './pages/Admin/AdminPanel';
import Financeiro from './pages/Admin/Financeiro';
import RH from './pages/Admin/RH';
import ValidacaoFaturas from './pages/Admin/ValidacaoFaturas';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas Admin fora do layout principal */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/financeiro" element={<Financeiro />} />
        <Route path="/admin/rh" element={<RH />} />
        <Route path="/admin/validacao" element={<ValidacaoFaturas />} />

        {/* Layout principal */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="cadastro" element={<UserForm />} />
          <Route path="cadastro-usuario" element={<CadastroUsuario />} />
          <Route path="distribuicao" element={<Distribuicao />} />
          <Route path="historico" element={<Historico />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="ajuda" element={<Ajuda />} />
          <Route path="visualgeral" element={<VisualGeral />} />
          <Route path="faturas" element={<Faturas />} />
          <Route path="consumo" element={<Consumo />} />
          <Route path="usinas" element={<Usinas />} />
          <Route path="indicadores" element={<Indicadores />} />
          <Route path="verificar-faturas" element={<VerificacaoFaturas />} />
          <Route path="financeiro-rh" element={<FinanceiroRh />} />
          <Route path="comissionados" element={<Comissionados />} />
          <Route path="auditoria" element={<AuditoriaFaturas />} />
          <Route path="indicadores-cashback" element={<IndicadoresCashback />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
