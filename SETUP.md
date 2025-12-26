# Setup do Frontend NFV

## Pré-requisitos

- Node.js 20+ instalado
- npm ou yarn

## Passo a Passo

### 1. Instalar dependências

```bash
npm install
```

### 2. Verificar arquivo de variáveis de ambiente

O arquivo `.env.local` já está criado com as configurações padrão:

```
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_APP_NAME=Novo Força de Vendas
VITE_APP_VERSION=1.0.0
```

Se necessário, ajuste a URL da API conforme seu ambiente.

### 3. Executar o projeto

```bash
npm run dev
```

O projeto estará disponível em: **http://localhost:3000**

## Estrutura Criada

✅ Arquivos de configuração (package.json, tsconfig, vite.config)
✅ TailwindCSS configurado
✅ Axios com interceptors
✅ Zustand stores (auth, ui)
✅ React Router com rotas protegidas
✅ Componentes base de UI (Button, Input, Card)
✅ Layout completo (Header, Sidebar)
✅ Página de Login
✅ Página Home
✅ Utilitários (formatters, validators)
✅ Hooks customizados (useDebounce, useLocalStorage)

## Próximos Passos

1. Implementar autenticação real com a API
2. Criar módulos de features (pedidos, clientes, produtos)
3. Adicionar mais componentes do shadcn/ui conforme necessário
4. Implementar testes

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Linter
npm run lint

# Formatar código
npm run format
```

## Observações

- O sistema de autenticação está com uma simulação temporária
- A navegação entre rotas está funcional
- O tema light/dark está preparado (pode ser ativado via store)
- Os interceptors do Axios já tratam erros automaticamente
