import { ButtonHTMLAttributes } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import { Container } from './styles'

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function CloseButton({ ...props }: CloseButtonProps) {
  return (
    <Container type="button" className="close-button" {...props}>
      <AiOutlineClose />
    </Container>
  )
}
