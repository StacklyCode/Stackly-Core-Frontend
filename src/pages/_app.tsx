import { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "@Styles/globalStyled";
import { ApolloProvider } from "@apollo/client";
import theme from "@Styles/theme";
import client from "@Config/apollo";

import { appWithTranslation } from "@Src/i18n";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
