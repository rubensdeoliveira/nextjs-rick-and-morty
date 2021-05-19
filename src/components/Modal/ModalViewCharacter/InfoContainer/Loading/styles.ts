import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3.45rem;
  padding-top: 1rem;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }

  @media (max-width: 500px) {
    padding-bottom: 3rem;
  }

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`
