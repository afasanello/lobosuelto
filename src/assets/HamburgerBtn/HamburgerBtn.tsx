import { LogoProps } from "../../types"

function HamburgerBtn(props: LogoProps) {

  const { blur, size, opacity, r, g, b } = props

  const fill: string = `rgb(${r}, ${g}, ${b})`

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 128" className="inline">
        <defs>
          {
            blur
              ? (
                  <filter id="fBlurHamburger" width="128" height="128">
                    <feOffset in="SourceGraphic" dx="0" dy="0" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                    <feBlend in="SourceGraphic" in2="blurOut" />
                  </filter>
                )
              : null
            }
        </defs>
        <path fill={fill} fillOpacity={opacity} d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17zM86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67zM86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path>
        <path filter={blur ? "url(#fBlurHamburger)" : ""} fill={fill} fillOpacity={opacity} d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17zM86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67zM86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path>
      </svg>
    </>
  )
}

export default HamburgerBtn