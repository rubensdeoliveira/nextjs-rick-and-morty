import { animated, useSpring } from 'react-spring'
import { useEffect } from 'react'

import loading from '../../assets/loading.svg'
import { Container, LoadingText } from './styles'

export function Loading() {
  const [styles, api] = useSpring(() => ({
    from: { opacity: 1 },
  }))

  useEffect(() => {
    api({
      opacity: 0,
      loop: { reverse: true },
    })
  }, [api])

  return (
    <Container data-cy="loading">
      <animated.img
        src={loading}
        style={styles}
        alt="Rick and Morty no espaço"
      />
      <LoadingText style={styles}>Loading</LoadingText>
    </Container>
  )
}
