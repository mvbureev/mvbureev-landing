import { AppProps } from 'next/app';
import '@/styles/normalize.sass';
import '@/styles/global.sass';
import '@/styles/typography.sass';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
