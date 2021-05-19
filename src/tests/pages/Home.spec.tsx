/* eslint-disable react/display-name */
import { fireEvent, render, screen } from '@testing-library/react'

import Home from '../../pages'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe('<Home />', () => {
  it('should render home correctly', async () => {
    render(<Home />)

    const logo = screen.getByRole('img', {
      name: /rick and morty/i,
    })

    const searchTextBox = screen.getByRole('textbox')

    const searchButton = screen.getByRole('button', {
      name: /search/i,
    })

    const loading = screen.queryByText(/loading/i)

    expect(logo).toBeInTheDocument()
    expect(searchTextBox).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
    expect(loading).not.toBeInTheDocument()
  })

  it('should render loading when click in search button', async () => {
    render(<Home />)

    const searchButton = screen.getByRole('button', {
      name: /search/i,
    })

    fireEvent.click(searchButton)

    const loading = await screen.findByText(/loading/i)

    expect(loading).toBeInTheDocument()
  })
})
