/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react'

import { Logo } from '.'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe('<Logo />', () => {
  it('should render logo correctly', () => {
    render(<Logo />)

    const logo = screen.getByRole('img', {
      name: /rick and morty/i,
    })

    expect(logo).toBeInTheDocument()
  })
})
