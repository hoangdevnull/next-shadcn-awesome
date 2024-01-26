import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

import { Icons } from '@/assets/icons';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { HStack } from '@/components/ui/Utilities';
import { ROUTE } from '@/types';

const Sidebar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <HStack spacing={24}>
        <Button variant="ghost" size="mixin" onClick={toggle}>
          <Icons.menu />
        </Button>
      </HStack>
      <Sheet open={opened} onOpenChange={toggle}>
        <SheetContent className="bg-background max-w-sm">
          <SheetHeader>
            <SheetTitle>
              <Link href={ROUTE.HOME}>
                <Logo />
              </Link>
            </SheetTitle>
            <SheetDescription>Make changes to your profile here.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
