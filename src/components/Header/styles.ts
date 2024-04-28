import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logoContainer {
    display: flex;
    gap: 8px;

    button {
      color: ${(props) => props.theme.colors['primary-text-color']};
      background: none;
      border: 0;
      transition: color 0.4s;

      &:hover {
        color: ${(props) => props.theme.colors['green-500']};
      }
    }
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.colors['primary-text-color']};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    transition: 0.3s;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme.colors['green-500']};
    }

    &.active {
      color: ${(props) => props.theme.colors['green-500']};
    }
  }
`
