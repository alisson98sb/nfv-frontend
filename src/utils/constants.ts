export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Novo Força de Vendas';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';

export const ITEMS_PER_PAGE = 20;
export const TOKEN_EXPIRATION_TIME = 8 * 60 * 60 * 1000; // 8 horas em ms

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  PEDIDOS: '/pedidos',
  PEDIDOS_NOVO: '/pedidos/novo',
  PEDIDOS_DETALHES: '/pedidos/:id',
  CLIENTES: '/clientes',
  CLIENTES_NOVO: '/clientes/novo',
  PRODUTOS: '/produtos',
  PRODUTOS_NOVO: '/produtos/novo',
  USUARIOS: '/usuarios',
  USUARIOS_NOVO: '/usuarios/novo',
} as const;
