import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"

import { fadeIn } from "../../data/AnimationData"


function Buttons(props: { showChildren: boolean}) {

  const { showChildren } = props

  const [visibleElements, setVisibleElements] = useState<number[]>([])

  const handleViewportEnter = (id: number) => {
    if (!visibleElements.includes(id)) {
      setVisibleElements((prev) => [...prev, id])
    }
  }

  return (
    <div
      className='my-10 mx-auto w-10/12 lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-6'
    >
      <NavLink
        className="col-span-1"
        to="/contactme"
      >
        <motion.button
          className="
            w-full min-w-28 p-2 my-2 mx-auto bg-amber-500 rounded-xl text-2xl font-bold
            transition-all duration-100 transform hover:scale-105 hover:bg-amber-400 active:scale-95 active:bg-amber-600
          "
          variants={fadeIn}
          animate={visibleElements.includes(1) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(1)}
          custom={visibleElements.includes(1) && showChildren ? visibleElements.indexOf(1) : 0}
        >
          Contact
        </motion.button>
      </NavLink>
      <NavLink
        className="col-span-1"
        to="/resume"
      >
        <motion.button
          className="
            w-full min-w-28 p-2 my-2 mx-auto bg-amber-500 rounded-xl text-2xl font-bold
            transition-all duration-100 transform hover:scale-105 hover:bg-amber-400 active:scale-95 active:bg-amber-600
          "
          variants={fadeIn}
          animate={visibleElements.includes(2) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(2)}
          custom={visibleElements.includes(2) && showChildren ? visibleElements.indexOf(2) : 0}
        >
          Resume
        </motion.button>
      </NavLink>
      <NavLink
        className="col-span-1"
        to="/portfolio"
      >
        <motion.button
          className="
            w-full min-w-28 p-2 my-2 mx-auto bg-amber-500 rounded-xl text-2xl font-bold
            transition-all duration-100 transform hover:scale-105 hover:bg-amber-400 active:scale-95 active:bg-amber-600
          "
          variants={fadeIn}
          animate={visibleElements.includes(3) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(3)}
          custom={visibleElements.includes(3) && showChildren ? visibleElements.indexOf(3) : 0}
        >
          Portfolio
        </motion.button>
      </NavLink>
    </div>
  )
}

export default Buttons