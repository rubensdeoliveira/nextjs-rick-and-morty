import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Background } from '../styles/pages/Home'

export default function Home() {
  return (
    <>
      <Background>
        <Input placeholder="Search characters" />
        <Button>Entrar</Button>
      </Background>
    </>
  )
}
