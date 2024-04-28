import { ReactNode, createContext, useState } from 'react'

import { lightTheme } from '../styles/themes/light'
import { defaultTheme } from '../styles/themes/default'
import { ThemeProvider } from 'styled-components'

interface ThemeModeContextType {
  theme: string
  handleOnChangeTheme: () => void
}

interface ThemeModeContextProviderProps {
  children: ReactNode
}

export const ThemeModeContext = createContext({} as ThemeModeContextType)

export function ThemeModeContextProvider({
  children,
}: ThemeModeContextProviderProps) {
  const [theme, setTheme] = useState('light')

  function handleOnChangeTheme() {
    setTheme((state) => (state === 'default' ? 'light' : 'default'))
  }

  return (
    <ThemeModeContext.Provider
      value={{
        theme,
        handleOnChangeTheme,
      }}
    >
      <ThemeProvider theme={theme === 'default' ? lightTheme : defaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}
