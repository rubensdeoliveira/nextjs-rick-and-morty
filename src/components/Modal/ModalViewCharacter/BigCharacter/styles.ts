import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 15.8rem;
  height: 25.7rem;

  border-radius: 8px;
  border: 2px solid var(--gray-600);
  position: absolute;
  top: 5.2rem;
  left: 0;

  z-index: 10;

  @media (max-width: 768px) {
    width: 20rem;
    height: 20rem;
    top: 0;
    left: 50%;

    transform: translate(-50%, 0);
  }

  @media (max-width: 500px) {
    width: 11rem;
    height: 11rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 8px;

  object-fit: cover;
  object-position: 60% 40%;
`

export const TextContainer = styled.div`
  width: 100%;
  height: 55px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.8125rem;

  backdrop-filter: blur(10px);

  border-radius: 0 0 8px 8px;
`

export const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.53375rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 10.3125rem;
  white-space: nowrap;
`

export const Specie = styled.p`
  font-size: 0.75rem;
  line-height: 0.92rem;
`
