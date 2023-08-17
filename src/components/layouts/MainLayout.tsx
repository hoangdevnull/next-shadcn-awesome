import type { ReactNode } from 'react';
import React from 'react';

import type { FCC } from '@/types';

import Footer from './components/Footer';
import Header from './components/Header';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  return (
    <>
      <div className="overflow-clip">
        <Header />
        <main className="min-h-screen pt-[var(--header-h)]">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
