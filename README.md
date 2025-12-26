# NFV Frontend

Frontend do **Novo Força de Vendas** - Single Page Application em React.

---

## 📋 Sobre o Projetoo

Interface web moderna e responsiva para gestão completa de pedidos de vendas, integrando com a API REST do backend NFV.

---

## 🚀 Tecnologias

- **React 18** (Hooks, Suspense)
- **TypeScript 5** (Type Safety)
- **Vite 5** (Build Tool & Dev Server)
- **React Router 6** (Roteamento SPA)
- **TanStack Query 5** (Server State Management)
- **Zustand 4** (Client State Management)
- **Axios** (HTTP Client)
- **React Hook Form 7** (Form Management)
- **Zod 3** (Schema Validation)
- **TailwindCSS 3** (Utility-First CSS)
- **shadcn/ui** (Component Library)
- **date-fns 3** (Date Utilities)
- **Lucide React** (Icons)

---

## 📁 Estrutura do Projeto

```
src/
├── api/                    # Configuração Axios e interceptors
├── assets/                 # Imagens, fontes, etc
├── components/
│   ├── ui/                # shadcn/ui base components
│   ├── form/              # Form components
│   ├── layout/            # Header, Sidebar, etc
│   └── common/            # Loading, Error, etc
├── features/              # Módulos por funcionalidade
│   ├── auth/             # Login, autenticação
│   ├── usuarios/         # CRUD usuários
│   ├── clientes/         # CRUD clientes
│   ├── produtos/         # CRUD produtos
│   └── pedidos/          # Core: gestão de pedidos
│       ├── components/   # Componentes do módulo
│       ├── hooks/        # Custom hooks
│       ├── services/     # API services
│       ├── types/        # TypeScript types
│       ├── validations/  # Zod schemas
│       └── pages/        # Páginas do módulo
├── hooks/                 # Hooks globais
├── stores/                # Zustand stores
├── routes/                # React Router config
├── styles/                # CSS global
├── types/                 # Types globais
├── utils/                 # Utilitários
└── main.tsx              # Entry point
```

---

## ⚙️ Pré-requisitos

Certifique-se de ter instalado:

- [Node.js 20+](https://nodejs.org/) (LTS recomendado)
- npm ou yarn
- Backend NFV rodando em `http://localhost:8080`

---

## 🔧 Setup Local

### 1️⃣ Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd nfv-frontend
```

### 2️⃣ Instalar Dependências

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 3️⃣ Configurar Variáveis de Ambiente

Crie o arquivo `.env.local` a partir do exemplo:

```bash
cp .env.example .env.local
```

Edite `.env.local`:

```bash
# API Base URL
VITE_API_BASE_URL=http://localhost:8080/api/v1

# App Config
VITE_APP_NAME=Novo Força de Vendas
VITE_APP_VERSION=1.0.0
```

### 4️⃣ Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em: **http://localhost:3000**

---

## 🏗️ Build

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

### Preview do Build

```bash
npm run preview
```

---

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Build para produção
npm run preview          # Preview do build

# Qualidade de Código
npm run lint             # Executar ESLint
npm run format           # Formatar código com Prettier
npm run type-check       # Verificar tipos TypeScript
```

---

## 🔐 Autenticação

O sistema usa **JWT** para autenticação.

### Fluxo de Login

1. Usuário acessa `/login`
2. Submete credenciais (email + senha)
3. Backend retorna token JWT
4. Token é armazenado no Zustand + LocalStorage
5. Token é enviado em todas as requisições via interceptor Axios

### Exemplo de Uso

```typescript
// Login
const { mutate: login } = useLogin();
login({ email: 'user@example.com', senha: 'senha123' });

// Verificar autenticação
const { isAuthenticated } = useAuthStore();

// Logout
const { logout } = useAuthStore();
logout();
```

---

## 📊 Gerenciamento de Estado

### Estado de Servidor (TanStack Query)

Usado para dados da API (cache, refetch, loading states):

```typescript
// Listar pedidos
const { data, isLoading, error } = usePedidos({ situacao: 'DIGITACAO' });

// Criar pedido
const { mutate: criarPedido } = useCriarPedido();
criarPedido(pedidoData);
```

### Estado Global (Zustand)

Usado para estado do cliente (auth, UI):

```typescript
// Auth Store
const { user, token, setAuth, clearAuth } = useAuthStore();

// UI Store
const { theme, setTheme } = useUIStore();
```

---

## 🎨 Estilização

### TailwindCSS

Utilitários CSS para estilização rápida:

```tsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 className="text-2xl font-bold text-gray-900">Título</h1>
  <Button variant="primary" size="lg">Ação</Button>
</div>
```

### shadcn/ui Components

Componentes pré-estilizados e acessíveis:

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
```

---

## 📝 Formulários

### React Hook Form + Zod

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  nome: z.string().min(3, 'Mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
});

const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: { nome: '', email: '' },
});

const onSubmit = (data) => {
  console.log(data);
};

<form onSubmit={form.handleSubmit(onSubmit)}>
  <Input {...form.register('nome')} />
  {form.formState.errors.nome && <span>{form.formState.errors.nome.message}</span>}
</form>
```

---

## 🛣️ Roteamento

### Rotas Principais

```
/                       → Redirect para /pedidos
/login                  → Página de login (pública)

/pedidos                → Listagem de pedidos
/pedidos/novo           → Criar novo pedido
/pedidos/:id            → Detalhes do pedido

/clientes               → Listagem de clientes
/clientes/novo          → Criar novo cliente

/produtos               → Listagem de produtos
/usuarios               → Gestão de usuários
```

### Rotas Protegidas

Rotas que requerem autenticação usam o componente `ProtectedRoute`:

```tsx
<Route element={<ProtectedRoute />}>
  <Route element={<MainLayout />}>
    <Route path="/pedidos" element={<PedidosListaPage />} />
    <Route path="/pedidos/novo" element={<PedidoFormPage />} />
  </Route>
</Route>
```

---

## 🌐 Integração com API

### Configuração do Axios

```typescript
// src/api/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de autenticação
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Services

```typescript
// src/features/pedidos/services/pedidoService.ts
export const pedidoService = {
  listar: async (params) => {
    const response = await api.get('/pedidos', { params });
    return response.data;
  },

  criar: async (data) => {
    const response = await api.post('/pedidos', data);
    return response.data;
  },

  buscarPorId: async (id) => {
    const response = await api.get(`/pedidos/${id}`);
    return response.data;
  },
};
```

---

## 📦 Estrutura de Features

Cada feature segue a estrutura:

```
features/pedidos/
├── components/          # Componentes específicos
│   ├── PedidoForm.tsx
│   ├── PedidoLista.tsx
│   └── TotalizadorPedido.tsx
├── hooks/              # Custom hooks
│   ├── usePedidos.ts
│   └── useCriarPedido.ts
├── services/           # API services
│   └── pedidoService.ts
├── types/              # TypeScript types
│   └── pedido.types.ts
├── validations/        # Zod schemas
│   └── pedidoSchema.ts
└── pages/              # Páginas
    ├── PedidosListaPage.tsx
    ├── PedidoFormPage.tsx
    └── PedidoDetalhesPage.tsx
```

---

## 🎯 Convenções de Código

### Nomenclatura

- **Componentes:** PascalCase (`PedidoForm`, `Button`)
- **Hooks:** camelCase com prefixo "use" (`usePedidos`, `useAuth`)
- **Types:** PascalCase (`Pedido`, `Usuario`)
- **Funções:** camelCase (`calcularTotal`, `formatarData`)
- **Constantes:** UPPER_SNAKE_CASE (`API_BASE_URL`)

### Importações

Organizar na seguinte ordem:

1. React e bibliotecas externas
2. Componentes internos
3. Hooks
4. Types
5. Utilitários
6. Estilos

```typescript
// 1. Externas
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// 2. Componentes
import { Button } from '@/components/ui/button';
import { PedidoForm } from './components/PedidoForm';

// 3. Hooks
import { usePedidos } from './hooks/usePedidos';

// 4. Types
import type { Pedido } from './types/pedido.types';

// 5. Utilitários
import { formatCurrency } from '@/utils/formatters';
```

---

## 🧩 Componentes Reutilizáveis

### UI Components (shadcn/ui)

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Dialog } from '@/components/ui/dialog';
import { Table } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
```

### Form Components

```tsx
import { FormInput } from '@/components/form/FormInput';
import { FormSelect } from '@/components/form/FormSelect';
import { FormDatePicker } from '@/components/form/FormDatePicker';
import { FormCurrency } from '@/components/form/FormCurrency';
```

### Common Components

```tsx
import { Loading } from '@/components/common/Loading';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { Pagination } from '@/components/common/Pagination';
```

---

## 🛠️ Utilitários

### Formatação

```typescript
import { formatCurrency, formatDate, formatCPFCNPJ } from '@/utils/formatters';

formatCurrency(1234.56);        // "R$ 1.234,56"
formatDate(new Date());          // "26/12/2025"
formatCPFCNPJ('12345678000190'); // "12.345.678/0001-90"
```

### Validação

```typescript
import { isValidCPF, isValidCNPJ, isValidEmail } from '@/utils/validators';
```

---

## 🎨 Temas e Customização

### Cores (TailwindCSS)

Configuradas em `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      // ...
    },
  },
}
```

### CSS Variables

Definidas em `src/styles/globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

---

## 📱 Responsividade

O layout é responsivo usando TailwindCSS breakpoints:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile: 1 coluna, Tablet: 2 colunas, Desktop: 3 colunas */}
</div>
```

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🐛 Debug

### React DevTools

Instale a extensão [React Developer Tools](https://react.dev/learn/react-developer-tools) para Chrome/Firefox.

### TanStack Query DevTools

Já incluído no modo desenvolvimento:

```tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<ReactQueryDevtools initialIsOpen={false} />
```

---

## ⚡ Performance

### Code Splitting

Rotas são carregadas sob demanda:

```tsx
const PedidosListaPage = lazy(() => import('./features/pedidos/pages/PedidosListaPage'));
```

### Memoização

Use quando necessário:

```tsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

---

## 🤝 Contribuindo

1. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
2. Commit suas mudanças: `git commit -m 'feat: adiciona nova funcionalidade'`
3. Push para a branch: `git push origin feature/nova-funcionalidade`
4. Abra um Pull Request

### Convenção de Commits

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação, ponto e vírgula, etc
refactor: refatoração de código
test: adicionar testes
chore: atualizar dependências, etc
```

---

## 📄 Licença

[Definir licença do projeto]

---

## 👥 Equipe

- **Tech Lead:** [Nome]
- **Frontend Developer:** [Nome]
- **UI/UX Designer:** [Nome]

---

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.

---

## 📚 Recursos

- [Documentação React](https://react.dev)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)
- [Documentação Vite](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [shadcn/ui](https://ui.shadcn.com)

---

**Documentação completa:** Consulte a pasta `/docs` na raiz do projeto para documentação técnica detalhada (PRD, Arquitetura, API Specification).
