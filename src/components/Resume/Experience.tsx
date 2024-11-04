import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

import ExperienceElem from "./ExperienceElem"

import data from "../../data/ExperienceData.ts"
import { fadeInFromLeft, fadeInFromRight } from "../../data/AnimationData.ts"


function Experience(props: { showChildren: boolean }) {

  const { showChildren } = props

  const [visibleElements, setVisibleElements] = useState<number[]>([])
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState<boolean>(viewportWidth < 768)
  
  
  const [firstColumn, setFirstColumn] = useState<string[]>(data.elemIds)
  const [secondColumn, setSecondColumn] = useState<string[]>([])
  const singleColumn = data.elemIds
  
  const elementRefs = useRef(new Map());
  
  
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      setViewportWidth(newWidth)
      setIsMobile(newWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  
  useEffect(() => {
    
    const intervals = [...data.elemIds]
    const newFirstColumn: string[] = []
    const newSecondColumn: string[] = []
    const heights: {[key: string]: number} = {}
    
    // Retrieve heights
    const elements = elementRefs.current;
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const height = rect.bottom - rect.top
      
      heights[element.id] = height
    })
    
    
    let firstColumnCursor = 0
    let secondColumnCursor = 48
    
    // We're going to add elements to the shortest cursor
    intervals.forEach(interval => {
      if(firstColumnCursor <= secondColumnCursor) {
        newFirstColumn.push(interval)
        firstColumnCursor += heights[interval] + 64
      } else {
        newSecondColumn.push(interval)
        secondColumnCursor += heights[interval] + 64
      }
    })
    
    // Set the columns
    setFirstColumn(newFirstColumn)
    setSecondColumn(newSecondColumn)
    
  }, [])
  
  
  
  const handleViewportEnter = (id: number) => {
    if (!visibleElements.includes(id)) {
      setVisibleElements((prev) => [...prev, id])
    }
  }
 
 
 return (
   <article>
      <h1 className="border-b-2 text-right mb-4 text-2xl font-mono">Experience</h1>
        
      <div
        className={`grid [grid-template-columns:_2px_1fr] md:[grid-template-columns:_1fr_2px_1fr] `}
      >

        {/* First column */}
        <div
          className="hidden md:block md:col-span-1 text-right pr-10"
        >
          {
            firstColumn.map(id => {
              const currentId = parseInt(id)
              const isVisible = visibleElements.includes(currentId)

              return (
                <motion.div
                  key={id}
                  id={id}
                  variants={fadeInFromRight}
                  initial="hidden"
                  animate={isVisible && showChildren ? "visible" : "hidden"}
                  viewport={{ once: true, amount: .01 }}
                  onViewportEnter={() => handleViewportEnter(currentId)}
                  custom={isVisible && showChildren ? visibleElements.indexOf(currentId) : 0}
                  ref={(el) => elementRefs.current.set(currentId, el)}
                >
                  <ExperienceElem 
                    startDate={data.data[id].startDate}
                    endDate={data.data[id].endDate}
                    currently={data.data[id].currently}
                    company={data.data[id].company}
                    location={data.data[id].location}
                    position={data.data[id].position}
                    description={data.data[id].description}
                    technologies={data.data[id].technologies}
                    from="left"
                  />
                </motion.div>
              )
            })
          }
        </div>


        {/* Vertical line */}
        <div
          className="block col-span-1 w-0 h-auto row-span-1 border-[1px] border-neutral-200"
        >

        </div>


        {/* Second column */}
        <div
          className="block col-span-1 text-left pl-10 md:pt-12"
        >
          {
            (isMobile ? singleColumn : secondColumn).map(id => {
              const currentId = parseInt(id)
              const isVisible = visibleElements.includes(currentId)

              return (
                <motion.div
                  key={id}
                  id={id}
                  variants={fadeInFromLeft}
                  initial="hidden"
                  animate={isVisible && showChildren ? "visible" : "hidden"}
                  viewport={{ once: true, amount: .01 }}
                  onViewportEnter={() => handleViewportEnter(currentId)}
                  custom={isVisible && showChildren ? visibleElements.indexOf(currentId) : 0}
                  ref={(el) => elementRefs.current.set(currentId, el)}
                >
                  <ExperienceElem 
                    startDate={data.data[id].startDate}
                    endDate={data.data[id].endDate}
                    currently={data.data[id].currently}
                    company={data.data[id].company}
                    location={data.data[id].location}
                    position={data.data[id].position}
                    description={data.data[id].description}
                    technologies={data.data[id].technologies}
                    from="right"
                  />
                </motion.div>
              )
            })
          }
        </div>


      </div>
    </article>
  )
}

export default Experience