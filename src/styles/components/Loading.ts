import styled from 'styled-components'

import { animated } from 'react-spring'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`

export const LoadingText = styled(animated.p)`
  color: var(--white);
  margin-top: 2.25rem;
  font-size: 1.5rem;
  line-height: 2.04625rem;
  text-align: center;
`
