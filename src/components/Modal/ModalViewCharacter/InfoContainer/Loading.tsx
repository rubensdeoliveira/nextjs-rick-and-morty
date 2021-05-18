import dualRing from '../../../../assets/dual-ring.gif'
import { ImageContainer } from '../../../../styles/components/Modal/ModalViewCharacter/InfoContainer/Loading'

export function Loading() {
  return (
    <ImageContainer>
      <img src={dualRing} alt="dual ring (waiting)" />
    </ImageContainer>
  )
}
