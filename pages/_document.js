import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="East Coast based design label." />
        <meta property="og:title" content="hldtru®" />
        <meta property="og:url" content="https://www.hldtru.com/" />
        <meta property="og:image" content="https://cdn.hldtru.space/assets/social.jpg" />
        <meta property="og:image:secure_url" content="https://cdn.hldtru.io/assets/social.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="Logo and site address" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
