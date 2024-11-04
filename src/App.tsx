import { BrowserRouter } from "react-router-dom"

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes"
import ScrollToTop from "./components/AnimatedRoutes/ScrollToTop"



function App() {

  return (
    <>
      <BrowserRouter basename="/lobosuelto">
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
