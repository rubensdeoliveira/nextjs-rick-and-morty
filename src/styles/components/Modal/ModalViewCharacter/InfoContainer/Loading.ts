import styled from 'styled-components'

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  img {
    width: 4rem;
    height: 4rem;

    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 500px) {
      margin-bottom: 0.8rem;
    }
  }
`
