import React from 'react'
import { Modal } from '../Modal'
import { Container, Title } from '../../../styles/components/Modal/ModalInfo'
import { Button } from '../../Button'

interface ModalViewProps {
  isOpen: boolean
  setIsOpen: () => void
}

export function ModalInfo({ isOpen, setIsOpen }: ModalViewProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} maxWidth="764px">
      <Container>
        <Button onClick={setIsOpen}>Close</Button>

        <img
          src="https://rickandmortyapi.com/api/character/avatar/293.jpeg"
          alt="Rick Sanchez"
        />

        <Title>Ops... Personagem não encontrado!</Title>
      </Container>
    </Modal>
  )
}
