import { useEffect, useState } from 'react'
import { api } from '../../../../../services/api'

import { Container } from './styles'
import { Loading } from '../Loading'
import { Character } from '../../../../../interfaces/Characters'
import { Episode } from '../../../../../interfaces/Episode'

interface AboutProps {
  character: Character
}

const defaultEpisode: Episode = {
  name: 'unknown',
  air_date: 'unknown',
}

export function About({ character }: AboutProps) {
  const [episode, setEpisode] = useState<Episode>(defaultEpisode)
  const [loading, setLoading] = useState<boolean>(true)

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
        setLoading(false)
      }
    }

    getEpisode()
  }, [character])

  return (
    <>
      {loading ? (
        <Loading />
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
