export type Character = {
  id: number
  name: string
  species: string
  status: string
  gender: string
  image: string
  episode: string[]
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
}

type Info = {
  count: number
}

export type Characters = {
  results: Character[]
  info: Info
}
