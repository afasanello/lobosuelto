import { useState } from "react"
import { motion } from "framer-motion"

import { fadeInFromTop } from "../../data/AnimationData"


function AboutMe(props: { showChildren: boolean }) {

  const { showChildren } = props

  const [visibleElements, setVisibleElements] = useState<number[]>([])

  const handleViewportEnter = (id: number) => {
    if (!visibleElements.includes(id)) {
      setVisibleElements((prev) => [...prev, id])
    }
  }


  return (
    <>
      <motion.article
        initial="hidden"
      >
        <h1 className="border-b-2 text-right text-2xl font-mono">About Me</h1>

        <motion.p 
          className="my-4"
          variants={fadeInFromTop}
          animate={visibleElements.includes(1) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(1)}
          custom={visibleElements.includes(1) && showChildren ? visibleElements.indexOf(1) : 0}
        >
        <strong className="text-amber-400">Systems Engineering Student</strong> and <strong className="text-amber-400">Full Stack Web Developer</strong> with 
        <strong className="text-amber-400"> 3+ years</strong> of experience working at development teams both in Salesforce and in MERN stack.
        </motion.p>

        <motion.p 
          className="my-4"
          variants={fadeInFromTop}
          animate={visibleElements.includes(2) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(2)}
          custom={visibleElements.includes(2) && showChildren ? visibleElements.indexOf(2) : 0}
        >
          Currently <strong className="text-amber-400">looking for a position</strong>, preferably a Full Stack one with <strong className="text-amber-400">React </strong> 
          framework as a Frontend framework and <strong className="text-amber-400">Express.js</strong> or <strong className="text-amber-400">Java/Spring Boot</strong> as 
          Backend, but I'm also open to work with other technologies/stacks.
        </motion.p>

        <motion.p
          className="my-4"
          variants={fadeInFromTop}
          animate={visibleElements.includes(3) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(3)}
          custom={visibleElements.includes(3) && showChildren ? visibleElements.indexOf(3) : 0}
        >
        <strong className="text-amber-400">Open to new knowledges and challenges</strong>. Mostly <strong className="text-amber-400">self-taught</strong>,  
        <strong className="text-amber-400"> focused</strong> and <strong className="text-amber-400">motivated</strong>.
        </motion.p>

        <motion.div
          className="block my-3 mx-auto w-4/5 text-center border-t-2 border-b-2 rounded-2xl p-5"
          variants={fadeInFromTop}
          animate={visibleElements.includes(4) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(4)}
          custom={visibleElements.includes(4) && showChildren ? visibleElements.indexOf(4) : 0}
        >
          <i>
            <span className="block text-4xl text-left">“</span>
            <span className="text-center">
              Life is a labyrinth. Sometimes you'll find a dead end.<br />In that case it's fine to go back and explore alternatives.
            </span>
            <span className="block text-4xl text-right">”</span>
          </i>
        </motion.div>
      </motion.article>
    </>
  )
}

export default AboutMe