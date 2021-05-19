import Image from 'next/image'

import logo from '../../assets/logo.svg'

export function Logo() {
  return <Image src={logo} alt="Rick and Morty" width={502} height={214} />
}
