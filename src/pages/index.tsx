import React from 'react';

import { MainLayout } from '@/components/layouts';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import type { NextPageWithLayout } from '@/types';

const IndexPage: NextPageWithLayout = () => {
  return (
    <div>
      <DateRangePicker />
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;
