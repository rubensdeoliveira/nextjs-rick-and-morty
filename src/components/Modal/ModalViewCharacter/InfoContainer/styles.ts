import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;

  background: var(--black);

  padding: 2.5rem;

  border-radius: 0 16px 16px 0;

  p + h3 {
    margin-top: 2.7rem;
  }

  h3 {
    font-size: 0.7rem;
    line-height: 1.108125rem;
    font-weight: 400;
    color: var(--yellow-400);
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

  @media (max-width: 500px) {
    height: 350px;
    padding: 4rem 1rem;
  }
`
