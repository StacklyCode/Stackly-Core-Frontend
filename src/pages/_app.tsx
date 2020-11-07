import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyles from '@Styles/globalStyled';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Stackly Code</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default App;
