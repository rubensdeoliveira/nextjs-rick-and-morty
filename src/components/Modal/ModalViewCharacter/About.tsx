import { useEffect, useState } from 'react'
import { Character } from '../../../interfaces/Characters'
import { Episode } from '../../../interfaces/Episode'
import { api } from '../../../services/api'
import { Container } from '../../../styles/components/Modal/ModalViewCharacter/About'

interface AboutProps {
  character: Character
}

const defaultEpisode: Episode = {
  name: 'unknown',
  air_date: 'unknown',
}

export function About({ character }: AboutProps) {
  const [episode, setEpisode] = useState<Episode>({} as Episode)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getEpisode() {
      if (character.episode && character.episode.length > 0) {
        try {
          const response = await api.get(
            `${character.episode[character.episode.length - 1]}`,
          )

          setEpisode(response.data)
          setLoading(false)
        } catch {}
      } else {
        setEpisode(defaultEpisode)
        setLoading(false)
      }
    }

    getEpisode()
  }, [character])

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Container>
          {character.name} is a {character.gender} {character.species}.{' '}
          {character.gender === 'Male' ? 'He' : 'She'} is current{' '}
          {character.status}. {character.gender === 'Male' ? 'His' : 'Her'} last
          appearance was in the episode {episode.name} on {episode.air_date}.
        </Container>
      )}
    </>
  )
}
