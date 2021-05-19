import { render, screen } from '@testing-library/react'
import { Character } from '.'
import { Character as CharacterType } from '../../interfaces/Characters'

describe('<Character />', () => {
  it('should render character correctly', () => {
    const character: CharacterType = {
      id: 631,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
        name: 'Story Train',
        url: 'https://rickandmortyapi.com/api/location/96',
      },
      location: {
        name: 'Story Train',
        url: 'https://rickandmortyapi.com/api/location/96',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/631.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/37'],
    }

    render(<Character character={character} onSelectCharacter={jest.fn()} />)

    const characterComponent = screen.getByRole('listitem')

    const name = screen.getByText('Rick Sanchez')
    const specie = screen.getByText('Human')
    const image = screen.getByAltText('Rick Sanchez')

    expect(characterComponent).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(specie).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})
