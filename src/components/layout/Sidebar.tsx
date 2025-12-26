import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, Users, Package, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/stores/uiStore';

const menuItems = [
  { label: 'Início', icon: Home, path: '/home' },
  { label: 'Pedidos', icon: ShoppingCart, path: '/pedidos' },
  { label: 'Clientes', icon: Users, path: '/clientes' },
  { label: 'Produtos', icon: Package, path: '/produtos' },
  { label: 'Transportadoras', icon: Truck, path: '/transportadoras' },
];

export function Sidebar() {
  const location = useLocation();
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);

  if (!sidebarOpen) return null;

  return (
    <aside className="fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-background">
      <nav className="flex flex-col gap-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
