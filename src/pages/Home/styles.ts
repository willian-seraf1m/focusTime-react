import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  @media (max-width: 720px) {
    justify-content: start;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme.colors['button-text-color']};
  transition: background 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['red-700']};
  }
`
