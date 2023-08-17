import React from 'react';

import { MainLayout } from '@/components/layouts';
import type { NextPageWithLayout } from '@/types';

const IndexPage: NextPageWithLayout = () => {
  return <div>IndexPage</div>;
};

export default IndexPage;

IndexPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
