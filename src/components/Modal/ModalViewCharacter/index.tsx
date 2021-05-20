import { Modal } from '../Modal'
import { Container, InvisibleContainer, BlurContainer } from './styles'
import { Button } from '../../Button'
import { Character } from '../../../interfaces/Characters'
import { BigCharacter } from './BigCharacter'
import { CloseButton } from './CloseButton'
import { InfoContainer } from './InfoContainer'

interface ModalViewProps {
  isOpen: boolean
  character: Character
  setIsOpen: () => void
}

export function ModalViewCharacter({
  isOpen,
  character,
  setIsOpen,
}: ModalViewProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} maxWidth="764px">
      <Container data-cy="modal-view-character">
        <Button onClick={setIsOpen}>Close</Button>
        <CloseButton onClick={setIsOpen} />

        <BigCharacter character={character} />

        <InvisibleContainer />

        <BlurContainer />

        <InfoContainer character={character} />
      </Container>
    </Modal>
  )
}
