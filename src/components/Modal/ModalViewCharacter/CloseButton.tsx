import { ButtonHTMLAttributes } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Container } from '../../../styles/components/Modal/ModalViewCharacter/CloseButton'

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function CloseButton({ ...props }: CloseButtonProps) {
  return (
    <Container type="button" className="close-button" {...props}>
      <AiOutlineClose />
    </Container>
  )
}
