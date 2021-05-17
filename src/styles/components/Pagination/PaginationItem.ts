import styled, { css } from 'styled-components'

interface ContainerProps {
  isCurrent: boolean
}

export const Container = styled.button<ContainerProps>`
  color: var(--gray-400);
  background: transparent;
  border: 0;
  font-size: 1.25rem;

  ${props =>
    props.isCurrent &&
    css`
      color: var(--yellow-400);
    `}
`
