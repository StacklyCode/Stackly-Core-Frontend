import GlobalContext from '@Src/hooks/GlobalContext'
import GlobalStyles from '@Styles/globalStyled'
import type { AppPropsWithLayout } from 'next/app'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <GlobalContext>
      <GlobalStyles />
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default App
