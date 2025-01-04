import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '@/components/common/layout/Layout';
import AppProviders from '@/context/AppProviders';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}
