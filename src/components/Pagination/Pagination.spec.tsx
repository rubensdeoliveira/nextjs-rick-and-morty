/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react'
import { Pagination } from '.'

describe('<Pagination />', () => {
  it('should render pagination numeric button correctly', () => {
    render(<Pagination totalCountOfRegisters={30} onPageChange={jest.fn()} />)

    expect(
      screen.getByRole('button', {
        name: /1/i,
      }),
    ).toBeInTheDocument()
  })
})
