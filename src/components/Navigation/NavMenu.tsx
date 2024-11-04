import { NavLink } from "react-router-dom";

import NavBtn from "./NavBtn";

import { MenuProps } from "../../types";


function NavMenu(props: MenuProps) {

  const { sizeMd, sizeLg, sizeXl, buttons } = props

  const clickHandler = () => {    
    const evt = new Event('selectMenuOption')
    document.dispatchEvent(evt)
  }

  return (
    <>
      {
        buttons.map(btn => {
          return (
            <NavLink
              key={btn.name}
              to={btn.href}
              onClick={clickHandler}
            >
              {data => (
                <NavBtn
                  name={btn.name}
                  sizeMd={sizeMd}
                  sizeLg={sizeLg}
                  sizeXl={sizeXl}
                  selected={data.isActive}
                />
              )}
            </NavLink>
          )
        })
      }
    </>
  )
}

export default NavMenu