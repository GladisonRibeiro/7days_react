import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    primary: '#202020',
    secondary: '#FFCB47',
    body: '#808080',
    placeholder: '#b3b3b3',
  },
  breakpoints: {
    phone: 600,
    tablet: 900,
    desktop: 1200,
  },
  color: {
    primary: true,
    secondary: false,
    body: false,
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
