import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors['primary-text-color']};
  }

  @media (max-width: 720px) {
    padding: 0.5rem;
  }
`

export const HistoryList = styled.main`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  .tableContainer {
    height: 380px;
    overflow: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      position: sticky;
      top: 0;

      background-color: ${(props) => props.theme.colors['header-table-color']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.colors['primary-text-color']};
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme.colors['body-table-color']};
      border-top: 4px solid
        ${(props) => props.theme.colors['main-background-color']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }

      @media (max-width: 720px) {
        font-size: 0.75rem;

        &:first-child {
          width: 30%;
        }
      }
    }
  }

  @media (max-width: 720px) {
    .tableContainer {
      height: 700px;
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) =>
      props.theme.colors[STATUS_COLORS[props.statusColor]]};
  }
`
