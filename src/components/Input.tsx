import { InputHTMLAttributes } from 'react'
import { Container } from '../styles/components/Input'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return <Container {...props} />
}
