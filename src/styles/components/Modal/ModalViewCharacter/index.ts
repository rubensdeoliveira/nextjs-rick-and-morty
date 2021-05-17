import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-height: 550px;

  position: relative;

  border-radius: 16px;

  button:first-of-type {
    position: absolute;
    top: 1.2rem;
    left: 3.6rem;
    z-index: 10;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .close-button {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 10;

    @media (min-width: 769px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const InvisibleContainer = styled.div`
  width: 5%;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }

  @media (max-width: 500px) {
    height: 100px;
  }

  /* @media (max-width: 500px) {
  } */
`

export const BlurContainer = styled.div`
  width: 35%;

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(10px);

  border-radius: 16px 0 0 16px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const InfoContainer = styled.div`
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
