import styled, { css } from 'styled-components'

import backgroundImage from '../../assets/background.svg'

interface ContainerProps {
  listShowing: boolean
  isLoading: boolean
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  ${props =>
    props.listShowing
      ? css`
          height: 100%;
        `
      : css`
          height: 100vh;
        `}

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: var(--gray-750);

  padding: 2.375rem;

  ${props =>
    props.isLoading &&
    css`
      filter: blur(1.9rem);
      -webkit-filter: blur(1.9rem);
    `}
`

export const LogoContainer = styled.button`
  background: transparent;
  border: 0;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.625rem;

  button {
    margin-left: 1rem;
  }
`

export const CharactersList = styled.ul`
  width: 100%;
  max-width: 60.5rem;
  margin: 6.3125rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`
