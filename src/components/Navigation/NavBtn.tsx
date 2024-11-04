import { useEffect, useState } from "react"

import { BtnProp } from "../../types"


function NavBtn(props: BtnProp) {
  
  const { name, sizeMd, sizeLg, sizeXl, selected } = props

  const [blur, setBlur] = useState<boolean>(selected)

  useEffect(() => {
    setBlur(selected)
  }, [selected])

  const getSizeMd: (size: number) => string = size => {
    if(size <= 40 && size > 36) return "md:text-4xl"
    if(size <= 36 && size > 32) return "md:text-3xl"
    if(size <= 32 && size > 24) return "md:text-2xl"
    if(size <= 24 && size > 20) return "md:text-xl"
    if(size <= 20 && size > 18) return "md:text-lg"
    return "md:text-base"
  }

  const getSizeLg: (size: number) => string = size => {
    if(size <= 40 && size > 36) return "lg:text-4xl"
    if(size <= 36 && size > 32) return "lg:text-3xl"
    if(size <= 32 && size > 24) return "lg:text-2xl"
    if(size <= 24 && size > 20) return "lg:text-xl"
    if(size <= 20 && size > 18) return "lg:text-lg"
    return "lg:text-base"
  }

  const getSizeXl: (size: number) => string = size => {
    if(size <= 40 && size > 36) return "xl:text-4xl"
    if(size <= 36 && size > 32) return "xl:text-3xl"
    if(size <= 32 && size > 24) return "xl:text-2xl"
    if(size <= 24 && size > 20) return "xl:text-xl"
    if(size <= 20 && size > 18) return "xl:text-lg"
    return "xl:text-base"
  }

  return (
    <div
      onMouseEnter={() => setBlur(true)}
      onMouseLeave={() => setBlur(selected)}
      className="h-full table my-2 hover:cursor-pointer"
    >
      <span className={`md:table-cell md:align-middle font-bold text-neutral-200/90 ${blur || selected ? "[text-shadow:_0px_0px_8px_rgba(248_248_248_/_0.5)] underline underline-offset-[12px]" : ""} max-md:text-3xl ${getSizeMd(sizeMd)} ${getSizeLg(sizeLg)} ${getSizeXl(sizeXl)}`}>
        {name}
      </span>
    </div>
  )
}

export default NavBtn