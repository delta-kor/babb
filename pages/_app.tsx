import type { AppProps } from 'next/app';
import '../styles/global.sass';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
