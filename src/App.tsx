import { BrowserRouter } from "react-router-dom"

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes"



function App() {

  return (
    <>
      <BrowserRouter basename="/lobosuelto">
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
