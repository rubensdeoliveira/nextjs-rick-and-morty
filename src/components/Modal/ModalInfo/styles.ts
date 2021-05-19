import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-height: 550px;

  position: relative;

  border-radius: 16px;

  background: var(--yellow-400);

  button {
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    z-index: 10;
    border-color: var(--black);
    color: var(--black);

    :hover {
      color: var(--blue-600);
      border-color: var(--blue-600);
    }
  }

  padding: 5rem;

  display: flex;

  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    width: 13rem;
    border: 2px solid var(--black);
  }
`

export const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  color: var(--black);
`
