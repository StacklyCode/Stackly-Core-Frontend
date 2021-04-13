import { AppProps } from 'next/app';
import GlobalStyles from '@Styles/globalStyled';
import GlobalContext from '@Src/hooks/GlobalContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext>
      <GlobalStyles />
      <Component {...pageProps} />
    </GlobalContext>
  );
};

export default App;
