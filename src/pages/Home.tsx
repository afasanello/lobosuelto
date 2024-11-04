import { useState } from "react"
import { motion } from "framer-motion"

import data from '../data/HomeData'

import Header from "../components/Home/Header"
import Presentation from "../components/Home/Presentation"
import AboutMe from "../components/Home/AboutMe"
import AboutLoboSuelto from "../components/Home/AboutLoboSuelto"
import Buttons from "../components/Home/Buttons"


function Home() {

  const [visibleElements, setVisibleElements] = useState<number[]>([])
  const [visibleChildren, setVisibleChildren] = useState<number[]>([])

  const handleViewportEnter = (id: number) => {
    if (!visibleElements.includes(id)) {
      setVisibleElements((prev) => [...prev, id])

      setTimeout(() => {
        setVisibleChildren((prev) => [...prev, id])
      }, 500)
    }
  }

  return (
    <>
      <motion.div
        className="absolute top-0 grid grid-cols-1 md:grid-cols-6 gap-5"
      >
        {
          data.elemIds.map((id) => {
            const currentId = parseInt(id)
            const isVisible = visibleElements.includes(currentId)
            const showChildren = visibleChildren.includes(currentId)
            
            return (
              <motion.section
                key={id}
                className={`${data.colSpan[id]} ${data.mdColSpan[id]} justify-self-center w-11/12`}
                variants={data.variants[id]}
                initial={data.initialAnim[id]}
                animate={isVisible ? data.showAnim[id] : data.initialAnim[id]}
                exit={data.initialAnim[id]}
                viewport={{ once: true, amount: .01 }}
                id={id}
                onViewportEnter={() => handleViewportEnter(currentId)}
                custom={isVisible ? visibleElements.indexOf(currentId) : 0}
              >
                {currentId === 1 && <Header />}
                {currentId === 2 && <Presentation />}
                {currentId === 3 && <AboutMe showChildren={showChildren} />}
                {currentId === 4 && <AboutLoboSuelto showChildren={showChildren} />}
                {currentId === 5 && <Buttons showChildren={showChildren} />}
              </motion.section>
            );
          })
        }
      </motion.div>
    </>
  )
}

export default Home