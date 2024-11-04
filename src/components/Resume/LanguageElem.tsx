import { useState } from "react"

import { LanguageProps } from "../../types"


function LanguageElem(props: LanguageProps) {

  const [isHover, setIsHover] = useState<boolean>(false)

  const { language, flag, level } = props

  return (
    <div className="relative block w-16 m-7">
      <img 
        className="rounded-full w-16 mx-auto"
        src={`/flags/${flag}.png`}
        alt={`${language} - ${level}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      
      {isHover && (
        <div className="absolute left-[-60px] z-10 backdrop-blur-sm">
          <div className="
               relative w-0 h-0
              border-b-[12px] border-r-[12px] border-l-[12px] top-1 left-20
              border-b-neutral-500/50 border-r-transparent border-l-transparent
              border-b-solid border-r-solid border-l-solid 
            "
          ></div>
          <div className="inline-block w-[180px] bg-neutral-500/50 rounded-3xl text-center align-middle py-1 px-4 mt-1">
            <span className="inline-block text-lg">{language} - {level}</span>
          </div>
        </div>
      )}

    </div>
  )
}

export default LanguageElem