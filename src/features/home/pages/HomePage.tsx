import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Users, Package, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Pedidos Hoje',
    value: '12',
    description: '+3 desde ontem',
    icon: ShoppingCart,
  },
  {
    title: 'Clientes Ativos',
    value: '248',
    description: '+12 este mês',
    icon: Users,
  },
  {
    title: 'Produtos',
    value: '156',
    description: 'No catálogo',
    icon: Package,
  },
  {
    title: 'Vendas do Mês',
    value: 'R$ 125.450',
    description: '+15% vs mês anterior',
    icon: TrendingUp,
  },
];

export function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo ao Novo Força de Vendas</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo!</CardTitle>
          <CardDescription>
            Este é o sistema Novo Força de Vendas. Use o menu lateral para navegar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            O sistema está em desenvolvimento. Novas funcionalidades serão adicionadas em breve.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
