import { FaSpinner } from 'react-icons/fa'

import { Container } from './styles'

export function Loading() {
  return (
    <Container data-cy="modal-loading">
      <FaSpinner color="var(--yellow-400)" size={40} />
    </Container>
  )
}
