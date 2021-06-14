import type { AppProps } from 'next/app'
import GlobalStyles from '@Styles/globalStyled'
import GlobalContext from '@Src/hooks/GlobalContext'
import { FC } from 'react'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalContext>
      <GlobalStyles />
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default App
