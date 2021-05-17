import React from 'react'
import { Modal } from '../Modal'
import {
  Container,
  InfoContainer,
  InvisibleContainer,
  BlurContainer,
} from '../../../styles/components/Modal/ModalViewCharacter'
import { Button } from '../../Button'
import { Character } from '../../../interfaces/Characters'
import { Planet } from '../ModalViewCharacter/Planet'
import { About } from './About'
import { BigCharacter } from './BigCharacter'
import { CloseButton } from './CloseButton'

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
      <Container>
        <Button onClick={setIsOpen}>Close</Button>
        <CloseButton onClick={setIsOpen} />

        <BigCharacter character={character} />

        <InvisibleContainer />
        <BlurContainer />

        <InfoContainer>
          <h3>About</h3>
          <About character={character} />

          <h3>Origin</h3>
          <Planet character={character} localType="origin" />

          <h3>Location</h3>
          <Planet character={character} localType="location" />
        </InfoContainer>
      </Container>
    </Modal>
  )
}
