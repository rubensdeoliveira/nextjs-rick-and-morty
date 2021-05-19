import styled, { css } from 'styled-components'

interface IconButtonProps {
  disable: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 3rem;

  margin-bottom: 10rem;
`

export const PageContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 3rem;

  @media (max-width: 568px) {
    display: none;
  }
`

export const IconButton = styled.button<IconButtonProps>`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  color: var(--gray-400);

  ${props =>
    props.disable &&
    css`
      color: var(--gray-700);
    `}

  transition: color 0.2s;

  &:hover {
    ${props =>
      !props.disable
        ? css`
            color: var(--yellow-400);
          `
        : css`
            cursor: not-allowed;
          `}
  }
`

export const Dots = styled.p`
  font-size: 1.25rem;
  color: var(--gray-400);
`
