import { Character } from '../../../../interfaces/Characters'
import { Container } from './styles'
import { About } from './About'
import { Planet } from './Planet'

interface InfoContainerProps {
  character: Character
}

export function InfoContainer({ character }: InfoContainerProps) {
  return (
    <Container>
      <h3>About</h3>
      <About character={character} />

      <h3>Origin</h3>
      <Planet character={character} localType="origin" />

      <h3>Location</h3>
      <Planet character={character} localType="location" />
    </Container>
  )
}
