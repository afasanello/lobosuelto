import { useState } from "react"
import { motion } from "framer-motion"

import { fadeInFromTop } from "../../data/AnimationData"


function AboutLoboSuelto(props: { showChildren: boolean }) {

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
        <h1 className="border-b-2 text-right text-2xl font-mono">About LoboSuelto</h1>

        <motion.p
          className="my-4"
          variants={fadeInFromTop}
          animate={visibleElements.includes(1) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(1)}
          custom={visibleElements.includes(1) && showChildren ? visibleElements.indexOf(1) : 0}
        >
          Lobo Suelto comes as a concept that identifies myself as a brand. It stands for "stray wolf". 
          Let's imagine a scenario in which a wolf finds himself exploring a big city instead of a forest.
          He should <strong className="text-amber-400">leave his comfort zone</strong> and <strong className="text-amber-400">start exploring</strong> in order to find some food. Coincidentally,
          I come from the countryside and I found <strong className="text-amber-400">amusing</strong> all the existing technologies present in this world.
        </motion.p>

        <motion.p
          className="my-4"
          variants={fadeInFromTop}
          animate={visibleElements.includes(2) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(2)}
          custom={visibleElements.includes(2) && showChildren ? visibleElements.indexOf(2) : 0}
        >
          I also identify with the concept of "<strong className="text-amber-400">loyalty</strong>", "<strong className="text-amber-400">fidelity</strong>" and the sense of "<strong className="text-amber-400">belonging in a pack</strong>", that are often
          associated with wolves. I consider myself <strong className="text-amber-400">grateful</strong>, so in return I offer loyalty to the project I'd work on. And I love 
          seeing the development team as a wolf pack.
        </motion.p>

        <motion.p
          className="my-4"
          variants={fadeInFromTop}
          animate={visibleElements.includes(3) && showChildren ? "visible" : "hidden"}
          viewport={{ once: true, amount: .01 }}
          onViewportEnter={() => handleViewportEnter(3)}
          custom={visibleElements.includes(3) && showChildren ? visibleElements.indexOf(3) : 0}
        >
          Right now I'm looking for a position. Please, feel free to ping me through the channel you feel comfortable with. I am <strong className="text-amber-400">excited
          and grateful to join your pack</strong>.
        </motion.p>    
      </motion.article>
    </>
  )
}

export default AboutLoboSuelto