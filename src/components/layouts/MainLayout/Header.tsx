import Link from 'next/link';
import React from 'react';

import Logo from '@/components/Logo';
import { useMobile } from '@/hooks/breakpoint';
import { cn } from '@/lib/utils';
import { ROUTE } from '@/types';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Header = () => {
  const isMobile = useMobile();

  return (
    <header
      className={cn(
        'h-header bg-secondary sticky left-0 right-0 top-0 z-50 flex w-full items-center justify-between py-4'
      )}
    >
      <div className={'container flex items-center justify-between'}>
        <Link href={ROUTE.HOME}>
          <Logo />
        </Link>
        <div className="">{isMobile ? <Sidebar /> : <Navbar />}</div>
      </div>
    </header>
  );
};

export default Header;
