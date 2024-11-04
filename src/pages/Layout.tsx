import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"

import { animatedRoutes } from "../data/AnimationData"

import NavBar from "../components/Navigation/NavBar"


function Layout() {

  return (
    <>
      <NavBar />
      <motion.main
        className="
          relative
          top-36 m-auto px-5 md:w-4/5 
          text-neutral-200 text-base md:text-lg font-semibold
        "
        variants={animatedRoutes}
        initial="hidden"
        animate="visible"
        exit="leaving"
      >
        <Outlet />
      </motion.main>
    </>
  )
}

export default Layout