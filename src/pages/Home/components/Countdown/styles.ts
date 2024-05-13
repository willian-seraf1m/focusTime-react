import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.colors['primary-text-color']};

  display: flex;
  gap: 1rem;

  .timeContainer {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .separatorContainer {
    @media (max-width: 720px) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 0;
    font-size: 8rem;
  }
`

export const Time = styled.span`
  background: ${(props) => props.theme.colors['body-table-color']};
  padding: 2rem 1rem;
  border-radius: 8px;

  @media (max-width: 720px) {
    margin-top: 1rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.colors['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
