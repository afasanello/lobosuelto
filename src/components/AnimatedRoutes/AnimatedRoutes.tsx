import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Layout from "../../pages/Layout"
import Home from "../../pages/Home"
import Resume from "../../pages/Resume"
import Portfolio from "../../pages/Portfolio"
import ContactMe from "../../pages/ContactMe"
import Blog from "../../pages/Blog"
import NoPage from "../../pages/NoPage"

function AnimatedRoutes() {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes