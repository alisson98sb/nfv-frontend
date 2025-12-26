import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorMessageProps {
  title?: string;
  message: string;
  className?: string;
}

export function ErrorMessage({ title = 'Erro', message, className }: ErrorMessageProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4',
        className
      )}
    >
      <AlertCircle className="h-5 w-5 shrink-0 text-destructive" />
      <div className="flex-1">
        <h3 className="font-semibold text-destructive">{title}</h3>
        <p className="text-sm text-destructive/90">{message}</p>
      </div>
    </div>
  );
}
