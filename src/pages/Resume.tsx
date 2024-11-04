import { useState } from "react"
import { motion } from "framer-motion"

import data from "../data/ResumeData"

import Photo from "../components/Resume/Photo"
import Info from "../components/Resume/Info"
import Languages from "../components/Resume/Languages"
import Skills from "../components/Resume/Skills"
import Experience from "../components/Resume/Experience"
import Education from "../components/Resume/Education"


function Resume() {

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
        className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-6 my-6 gap-5"
      >
         {data.elemIds.map((id) => {
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
              {currentId === 1 && <Photo />}
              {currentId === 2 && <Info />}
              {currentId === 3 && <Languages />}
              {currentId === 4 && <Skills />}
              {currentId === 5 && <Experience showChildren={showChildren} />}
              {currentId === 6 && <Education showChildren={showChildren} />}
            </motion.section>
          );
        })}
      </motion.div>
    </>
  )
}

export default Resume