import { render, screen } from '@testing-library/react'

import { Input } from '.'

describe('<Input />', () => {
  it('should render input correctly', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })
})
