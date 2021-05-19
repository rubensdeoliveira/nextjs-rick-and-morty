import { Container } from './styles'
import { FaSpinner } from 'react-icons/fa'

export function Loading() {
  return (
    <Container>
      <FaSpinner color="var(--yellow-400)" size={40} />
    </Container>
  )
}
