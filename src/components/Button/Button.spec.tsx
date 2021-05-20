import { fireEvent, render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Button } from '.'

describe('<Button />', () => {
  it('should render button correctly', () => {
    render(<Button>Search</Button>)

    const button = screen.getByRole('button', {
      name: /search/i,
    })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule('border: 2px solid var(--white)')
  })

  it('should highlight when hover', () => {
    render(<Button>Search</Button>)

    const button = screen.getByRole('button', {
      name: /search/i,
    })

    fireEvent.mouseUp(button)

    expect(button).toHaveStyleRule('border-color: var(--yellow-400)')
  })
})
