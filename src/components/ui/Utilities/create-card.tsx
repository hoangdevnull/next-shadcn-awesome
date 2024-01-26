import { Icons } from '@/assets/icons';
import { cn } from '@/lib/utils';
import type { FCC } from '@/types';

import { Card } from '../card';
import { HStack } from './h-stack';

export const CreateCard: FCC<{ className?: string }> = ({ children, className }) => (
  <Card className={cn('flex items-center justify-center', className)}>
    <HStack spacing={16}>
      <Icons.plusCircle className="text-main" />
      <h4 className="text-xl font-medium text-neutral-100">{children}</h4>
    </HStack>
  </Card>
);
