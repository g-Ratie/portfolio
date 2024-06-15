import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import { DEFAULT_THEME } from '@mantine/core';
import '@mantine/core/styles.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={DEFAULT_THEME}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
export default MyApp;
