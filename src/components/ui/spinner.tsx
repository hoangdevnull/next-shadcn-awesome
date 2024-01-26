import { Icons } from '@/assets/icons';
import { cn } from '@/lib/utils';

export const Spinner = ({ className, size = '1rem' }: { className?: string; size?: string }) => {
  return <Icons.spinner size={size} className={cn('animate-spin ', className)} />;
};
