import '@/styles/globals.css';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { Session } from 'inspector';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactNode } from 'react';

import { fontSans, fontSerif } from '@/assets/fonts';
import { MainLayout, ModuleLayout } from '@/components/layouts';
import { siteConfig } from '@/config/site';
import Provider from '@/lib/Provider';
import type { NextPageWithLayout } from '@/types';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  session: Session;
};

dayjs.extend(relativeTime);

const MyApp = (props: AppPropsWithLayout) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page: ReactNode) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteConfig.ogImage}`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="576" />

        <meta name="twitter:site" content={`@${siteConfig.name}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@fanchain" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={`${siteConfig.ogImage}`} />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
      </Head>
      <style jsx global>{`
        html {
          --font-sans: ${fontSans.style.fontFamily};
          --font-serif: ${fontSerif.style.fontFamily};
        }
      `}</style>
      <div>
        <Provider>
          <ModuleLayout>{getLayout(<Component {...pageProps} />)}</ModuleLayout>
        </Provider>
      </div>
    </>
  );
};

export default MyApp;
