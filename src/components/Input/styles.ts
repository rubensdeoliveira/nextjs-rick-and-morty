import styled from 'styled-components'

export const Container = styled.input`
  width: 12.25rem;
  height: 2.625rem;
  border: 2px solid var(--white);
  background: transparent;
  border-radius: 8px;
  padding: 0.625rem 0.875rem;
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.36375rem;

  &:focus {
    border-color: var(--yellow-400);
    outline: 0;
  }

  &::placeholder {
    color: var(--gray-300);
  }
`
