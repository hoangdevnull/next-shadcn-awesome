import type { ReactNode } from 'react';
import React from 'react';

import type { FCC } from '@/types';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const MainLayout: FCC<Props> = ({ children }) => {
  return (
    <div className="overflow-clip">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
