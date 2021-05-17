import { Character } from '../../../interfaces/Characters'
import {
  ImageContainer,
  Image,
  Name,
  Specie,
  TextContainer,
} from '../../../styles/components/Modal/ModalViewCharacter/BigCharacter'

interface BigCharacterProps {
  character: Character
}

export function BigCharacter({ character }: BigCharacterProps) {
  return (
    <ImageContainer>
      <Image src={character.image} alt={character.name} />
      <TextContainer>
        <Name>{character.name}</Name>
        <Specie>{character.species}</Specie>
      </TextContainer>
    </ImageContainer>
  )
}
