import { Character as CharacterItem } from '../../interfaces/Characters'
import { Container, Image, TextContainer, Name, Specie } from './styles'

interface CharacterProps {
  character: CharacterItem
  onSelectCharacter: (character: CharacterItem) => void
}

export function Character({ character, onSelectCharacter }: CharacterProps) {
  return (
    <Container
      onClick={() => {
        onSelectCharacter(character)
      }}
    >
      <Image src={character.image} alt={character.name} />
      <TextContainer>
        <Name>{character.name}</Name>
        <Specie>{character.species}</Specie>
      </TextContainer>
    </Container>
  )
}
