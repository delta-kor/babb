import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.sass';

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
