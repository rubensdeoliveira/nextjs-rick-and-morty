import styled from 'styled-components'

export const PlanetTitle = styled.p`
  font-size: 0.875rem;

  line-height: 1.1875rem;
  color: var(--gray-500);
`

export const PlanetDescription = styled.p`
  font-size: 1.25rem;

  line-height: 1.7rem;
  color: var(--white);

  @media (max-width: 568px) {
    font-size: 1.25rem;
    line-height: 1.2425rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
`

export const DimensionDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.534375rem;
  color: var(--gray-100);
`

export const Residents = styled.p`
  font-size: 0.875rem;
  line-height: 1.1875rem;
  color: var(--gray-500);
  margin-top: 0.5rem;

  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`
