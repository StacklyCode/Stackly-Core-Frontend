import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from '@Styles/globalStyled'
import theme from '@Styles/theme'

import { appWithTranslation } from '@Src/i18n'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
