import { useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { Character } from '../components/Character'
import { Input } from '../components/Input'
import { Loading } from '../components/Loading'
import { Logo } from '../components/Logo'
import { ModalInfo } from '../components/Modal/ModalInfo'
import { ModalViewCharacter } from '../components/Modal/ModalViewCharacter'
import { Pagination } from '../components/Pagination'
import {
  Character as CharacterItem,
  Characters,
} from '../interfaces/Characters'
import { api } from '../services/api'
import {
  Wrapper,
  Container,
  LogoContainer,
  SearchContainer,
  CharactersList,
} from '../styles/pages/Home'

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState('')
  const [characters, setCharacters] = useState<Characters>({} as Characters)
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterItem>(
    {} as CharacterItem,
  )
  const [page, setPage] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalInfoOpen, setModalInfoOpen] = useState(false)

  const handleSetInitialState = useCallback(() => {
    setCharacters({} as Characters)
    setSelectedCharacter({} as CharacterItem)
    setSearch('')
    setPage(1)
    setLoading(false)
  }, [])

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen)
  }, [modalOpen])

  const toggleInfoModal = useCallback(() => {
    setModalInfoOpen(!modalInfoOpen)
  }, [modalInfoOpen])

  const handleSelectCharacter = useCallback((character: CharacterItem) => {
    setSelectedCharacter(character)
    setModalOpen(true)
  }, [])

  const handleShowModalInfo = useCallback(() => {
    setModalInfoOpen(true)
  }, [])

  const handleSearch = useCallback(
    async (newPage = 1) => {
      try {
        setLoading(true)
        setCharacters({} as Characters)
        setPage(newPage)

        const { data } = await api.get(
          `character?name=${search.trim()}&page=${newPage}`,
        )

        setCharacters(data)

        setLoading(false)
      } catch (err) {
        setLoading(false)
        handleShowModalInfo()
      }
    },
    [search, handleShowModalInfo],
  )

  return (
    <Wrapper>
      {loading && <Loading />}

      <Container listShowing={!!characters.results} isLoading={loading}>
        <ModalViewCharacter
          isOpen={modalOpen}
          setIsOpen={toggleModal}
          character={selectedCharacter}
        />

        <ModalInfo isOpen={modalInfoOpen} setIsOpen={toggleInfoModal} />

        <LogoContainer onClick={handleSetInitialState}>
          <Logo />
        </LogoContainer>

        {!loading && (
          <SearchContainer>
            <Input
              value={search}
              placeholder="Search characters"
              onChange={e => {
                setSearch(e.target.value)
              }}
            />
            <Button onClick={() => handleSearch()}>Search</Button>
          </SearchContainer>
        )}

        {characters.results && (
          <>
            <CharactersList>
              {characters.results.map(character => (
                <Character
                  key={character.id}
                  character={character}
                  onSelectCharacter={handleSelectCharacter}
                />
              ))}
            </CharactersList>
            <Pagination
              totalCountOfRegisters={characters.info.count}
              currentPage={page}
              onPageChange={handleSearch}
            />
          </>
        )}
      </Container>
    </Wrapper>
  )
}
