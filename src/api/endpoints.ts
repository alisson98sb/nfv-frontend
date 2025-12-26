export const ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },

  // Usuários
  USUARIOS: {
    BASE: '/usuarios',
    BY_ID: (id: string) => `/usuarios/${id}`,
  },

  // Clientes
  CLIENTES: {
    BASE: '/clientes',
    BY_ID: (id: string) => `/clientes/${id}`,
  },

  // Produtos
  PRODUTOS: {
    BASE: '/produtos',
    BY_ID: (id: string) => `/produtos/${id}`,
  },

  // Transportadoras
  TRANSPORTADORAS: {
    BASE: '/transportadoras',
    BY_ID: (id: string) => `/transportadoras/${id}`,
  },

  // Condições de Pagamento
  CONDICOES_PAGAMENTO: {
    BASE: '/condicoes-pagamento',
    BY_ID: (id: string) => `/condicoes-pagamento/${id}`,
  },

  // Pedidos
  PEDIDOS: {
    BASE: '/pedidos',
    BY_ID: (id: string) => `/pedidos/${id}`,
  },
} as const;
