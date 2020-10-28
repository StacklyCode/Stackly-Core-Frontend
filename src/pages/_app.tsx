import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '@Styles/globalStyled';
import theme from '@Styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Stackly Code</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
