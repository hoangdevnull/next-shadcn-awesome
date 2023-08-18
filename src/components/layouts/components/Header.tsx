import Link from 'next/link';
import React from 'react';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { ROUTE } from '@/types';

const Header = () => {
  return (
    <header className="h-header z-header fixed left-0 top-0 flex w-full items-center justify-between  backdrop-blur-lg">
      <div className={'container flex items-center justify-between'}>
        <div className="min-w-[150px]">
          <Link href={ROUTE.HOME}>
            <Logo />
          </Link>
        </div>
        <>
          <div className=""></div>
          <div className="min-w-[150px]">
            <Button fullWidth size="lg" variant="filled">
              Get Started
            </Button>
          </div>
        </>
      </div>
    </header>
  );
};

export default Header;
