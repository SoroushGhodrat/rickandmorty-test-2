import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '@/components/common/Layout';
import AppProviders from '@/context/AppProviders';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Layout>
        <main className={`${roboto.className} antialiased`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </AppProviders>
  );
}
