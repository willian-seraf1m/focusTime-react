import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme.colors['main-background-color']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    height: 100vh;
    padding: 2.5rem 1.5rem;
    margin: 0;
    border-radius: 0px;
  }
`
