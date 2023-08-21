import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import type { FC, ReactNode } from 'react';

import { TailwindIndicator } from '@/components/TailwindIndicator';
import { siteConfig } from '@/config/site';
import { fontSans, fontSerif } from '@/lib/fonts';
import Providers from '@/lib/providers';
import type { NextPageWithLayout } from '@/types';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = (props) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${siteConfig.name}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Var-Meta" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={`${siteConfig.url}/og.jpg`} />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
      </Head>
      <style jsx global>{`
        html {
          --font-sans: ${fontSans.style.fontFamily};
          --font-serif: ${fontSerif.style.fontFamily};
        }
      `}</style>
      <div>
        <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
        <TailwindIndicator />
        <NextNProgress
          color="hsl(var(--primary-main))"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
      </div>
    </>
  );
};

export default MyApp;
