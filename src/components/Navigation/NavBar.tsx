import { useState, useEffect } from 'react'

import data from '../../data/NavData'

import NavLogo from '../../assets/NavLogo/NavLogo'
import HamburgerBtn from '../../assets/HamburgerBtn/HamburgerBtn'
import ChevronArrowBtn from '../../assets/ChevronArrowBtn/ChevronArrowBtn'
import NavMenu from './NavMenu'



export default function NavBar() {

  const [focusLogo, setFocusLogo] = useState<boolean>(false)
  const [focusMenu, setFocusMenu] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [sizeMd, setSizeMd] = useState<number>(40)
  const [sizeLg, setSizeLg] = useState<number>(40)
  const [sizeXl, setSizeXl] = useState<number>(40)

  document.addEventListener('selectMenuOption', () => {
    setActiveMenu(false)
  })



  const toggleActiveMenu = () => {
    if(activeMenu) setActiveMenu(false)
    else setActiveMenu(true)
  }


  useEffect(() => {
    let length: number = 0
    let unitLength: number = 0

    length += 150 // Logo
    length += 150 // Hamburger
    length += (data.buttons.length - 1) * 30 // Spaces between buttons

    const span: HTMLElement = document.createElement("span")
    span.innerText = ""
    span.className = "text-[1px]"

    data.buttons.forEach(button => {
      span.innerText += button.name
    });

    document.getElementById("calc")?.appendChild(span)
    unitLength = span.getBoundingClientRect().width
    document.getElementById("calc")?.removeChild(span)

    // Conditions: minWidth - length > unitLength * size && size <= 40

		setSizeMd(Math.min(Math.round((768 - length) / unitLength), 40))
		setSizeLg(Math.min(Math.round((1024 - length) / unitLength), 40))
		setSizeXl(Math.min(Math.round((1280 - length) / unitLength), 40))
	}, [])


  return (
    <>
      <div
        className="
          fixed flex justify-between items-center top-0 w-full pt-2 pb-4 px-5 z-50
          text-center align-middle
          backdrop-blur-sm
          bg-gradient-to-b from-neutral-800/30 via-neutral-800/30 via-80%
        "
      >

        {/* Logo */} 
        <div 
          onMouseEnter={() => setFocusLogo(true)} 
          onMouseLeave={() => setFocusLogo(false)}
          className="hover:cursor-pointer z-50"
        >
          <NavLogo
            blur={focusLogo}
            size={100}
          />
        </div>


        {/* Menu - PC */}
        <nav
          className={`hidden absolute md:flex md:justify-around md:items-center overflow-hidden text-nowrap right-[150px] h-[80%] [transition:_left_200ms_ease_100ms] ${activeMenu ? "left-[150px]" : "left-[100vw]"}`}
        >
          <NavMenu 
            sizeMd={sizeMd}
            sizeLg={sizeLg}
            sizeXl={sizeXl}
            buttons={data.buttons}
          />
        </nav>


        {/* Chevron Arrow Button */}
        <div
          className={`hidden md:inline z-50 hover:cursor-pointer transition ease-in-out delay-150 duration-250 ${activeMenu ? "rotate-180" : ""}`}
          onMouseEnter={() => setFocusMenu(true)}
          onMouseLeave={() => setFocusMenu(false)}
          onClick={toggleActiveMenu}
          >
          <ChevronArrowBtn
            blur={focusMenu || activeMenu}
            size={100}
            opacity={.9}
            r={229}
            g={229}
            b={229}  
          />
        </div>

        
        {/* Hamburger Button */}
        <div
          className="inline md:hidden hover:cursor-pointer z-50" 
          onMouseEnter={() => setFocusMenu(true)} 
          onMouseLeave={() => setFocusMenu(false)}
          onClick={toggleActiveMenu}
        >
          <HamburgerBtn
            blur={focusMenu || activeMenu}
            size={100}
            opacity={.9}
            r={229}
            g={229}
            b={229}  
          />
        </div>
      </div>


    {/* Menu - Mobile */} 
    <nav
        className={`fixed overflow-hidden text-nowrap top-0 right-0 h-[100vh] z-30 backdrop-blur-sm bg-black/30 ${activeMenu ? "inline" : ""} md:hidden [transition:_left_200ms_ease_100ms] ${activeMenu ? "left-[0vw]" : "left-[100vw]"}`}
        onClick={() => setActiveMenu(false)}
      >
        <div
          className="absolute top-32 right-8 z-40 flex flex-col items-end"
          onClick={e => e.stopPropagation()}
        >
          <NavMenu 
            sizeMd={sizeMd}
            sizeLg={sizeLg}
            sizeXl={sizeXl}
            buttons={data.buttons}
          />
        </div>
      </nav>

      <div
        id="calc"
        style={{visibility: "hidden"}}
      ></div>
    </>
  )
}
