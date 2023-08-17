import { Head, Html, Main, NextScript } from 'next/document';

import { siteConfig } from '@/config/site';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content={siteConfig.name} />

        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#0C011D" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="author" href={siteConfig.url} />
        <meta name="author" content={siteConfig.name} />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="manifest" href={`${siteConfig.url}/site.webmanifest`} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <meta name="creator" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="next-size-adjust" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
