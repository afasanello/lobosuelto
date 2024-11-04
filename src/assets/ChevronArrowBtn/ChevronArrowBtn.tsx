import { LogoProps } from "../../types"

function ChevronArrowBtn(props: LogoProps) {

  const { blur, size, opacity, r, g, b } = props

  const fill: string = `rgb(${r}, ${g}, ${b})`

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={fill} strokeOpacity={opacity} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          {
            blur
              ? (
                  <filter id="fBlurChevron" width="24" height="24">
                    <feGaussianBlur in="SourceGraphic" stdDeviation=".8" />
                  </filter>
                )
              : null
            }
        </defs>
        <path d="M10 12l3 3M10 12l3 -3M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" />
        <path filter={blur ? "url(#fBlurChevron)" : ""} d="M10 12l3 3M10 12l3 -3M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" />
      </svg>
    </>
  )
}

export default ChevronArrowBtn