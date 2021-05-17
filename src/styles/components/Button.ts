import styled from 'styled-components'

export const Container = styled.button`
  min-width: 5.25rem;
  height: 2.625rem;
  border: 2px solid var(--white);
  background: transparent;
  border-radius: 8px;
  padding: 0.625rem 1rem;
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.36375rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--yellow-400);
  }
`
