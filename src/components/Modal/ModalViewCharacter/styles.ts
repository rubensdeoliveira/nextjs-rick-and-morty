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
`

export const BlurContainer = styled.div`
  width: 35%;

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(0.625rem);

  border-radius: 16px 0 0 16px;

  @media (max-width: 768px) {
    display: none;
  }
`
