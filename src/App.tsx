// import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { CountdownContextProvider } from './contexts/CountdownContext'
import { ThemeModeContextProvider } from './contexts/ThemeModeContext'

export function App() {
  return (
    <ThemeModeContextProvider>
      <BrowserRouter basename="/FocusTime-react">
        <CyclesContextProvider>
          <CountdownContextProvider>
            <Router />
          </CountdownContextProvider>
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeModeContextProvider>
  )
}
