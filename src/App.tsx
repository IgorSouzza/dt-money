import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/default'

import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  )
}