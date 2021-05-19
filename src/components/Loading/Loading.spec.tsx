import { render, screen } from '@testing-library/react'
import { Loading } from '.'

describe('<Loading />', () => {
  it('should render loading correctly', () => {
    render(<Loading />)

    const image = screen.getByRole('img', {
      name: /rick and morty no espaço/i,
    })

    const text = screen.getByText(/loading/i)

    expect(image).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
