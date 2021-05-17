import styled from 'styled-components'

export const Container = styled.li`
  width: 14rem;
  height: 14rem;

  @media (max-width: 500px) {
    width: 15.875rem;
    height: 15.875rem;
  }

  border-radius: 8px;
  border: 2px solid var(--gray-600);
  list-style: none;
  position: relative;
  transition: border 0.2s;
  transition: box-shadow 0.2s;

  &:hover {
    border: 2px solid var(--yellow-400);
    box-shadow: 0px 0px 0px 3px #c9d636, 0px 0px 5px 4px #c9d636,
      inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
  }

  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
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
  width: 165px;
  white-space: nowrap;
`

export const Specie = styled.p`
  font-size: 0.75rem;
  line-height: 0.92rem;
`
