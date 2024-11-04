import WolfLogo from '../WolfLogo/WolfLogo'

import { NavLogoProp } from '../../types'
import { Link } from 'react-router-dom'

function NavLogo(props: NavLogoProp) {

  const { blur, size } = props

  const textSize = size / 4
  const logoSize = 3 * size / 4

  const getSize: (size: number) => string = size => {
    if(size <= 40 && size > 36) return "text-3xl"
    if(size <= 36 && size > 32) return "text-2xl"
    if(size <= 32 && size > 24) return "text-xl"
    if(size <= 24 && size > 20) return "text-lg"
    if(size <= 20 && size > 18) return "text-base"
    return "text-sm"
  }

  return (
    <div>
      <Link to="/">
        <WolfLogo
          blur={blur}
          size={logoSize}
          opacity={.9}
          r={229}
          g={229}
          b={229}
        />
        <span className={`block font-bold ${getSize(textSize)} align-middle text-neutral-200/90 ${blur ? "[text-shadow:_0px_0px_8px_rgba(248_248_248_/_0.5)]" : ""}`}>
          lobosuelto.dev
        </span>
      </Link>
    </div>
  )
}

export default NavLogo