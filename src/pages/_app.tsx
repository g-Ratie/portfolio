import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={DEFAULT_THEME}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
export default MyApp;
