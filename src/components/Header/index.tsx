import { HeaderContainer } from './styles'
import { Timer, Scroll, Sun, Moon } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

import { useContext } from 'react'
import { ThemeModeContext } from '../../contexts/ThemeModeContext'

export function Header() {
  const { theme, handleOnChangeTheme } = useContext(ThemeModeContext)

  return (
    <HeaderContainer>
      <div className="logoContainer">
        <img src={logoIgnite} alt="" />
        <button
          onClick={handleOnChangeTheme}
          title={
            theme === 'default'
              ? 'mudar para o tema dark'
              : 'mudar para o tema claro'
          }
        >
          {theme === 'default' ? <Moon size={26} /> : <Sun size={26} />}
        </button>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
