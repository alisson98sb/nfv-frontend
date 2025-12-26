import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { HomePage } from '@/features/home/pages/HomePage';

export function AppRoutes() {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rotas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />

          {/* Outras rotas serão adicionadas aqui */}
          {/* <Route path="/pedidos" element={<PedidosListaPage />} /> */}
          {/* <Route path="/pedidos/novo" element={<PedidoFormPage />} /> */}
          {/* etc... */}
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
