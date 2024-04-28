// import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeModeContextProvider } from './contexts/ThemeModeContext'

export function App() {
  return (
    <ThemeModeContextProvider>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeModeContextProvider>
  )
}
