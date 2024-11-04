import PhotoTransparent from "/home/PhotoTransparent.png"
import Landscape from "/home/Landscape.jpg"

function Header() {

  return (
    <header
      className="relative w-full max-h-56 m-auto sepia transition ease-in-out delay-150 duration-1000 hover:sepia-0"
    >
      <img
        src={PhotoTransparent} 
        alt="A man in a suit"
        className="absolute h-full max-h-56 z-10 top-0 bottom-0 left-0 rounded-full p-1"
      />
      <img
        src={Landscape}
        alt="Countryside Landscape" 
        className="relative w-full max-h-56 align-middle object-cover rounded-3xl -scale-x-100"
      />
    </header>
  )
}

export default Header