import { Fragment } from "react"
import { ExperienceProps, TimeDifference } from "../../types"

import timeUtils from "../../utils/TimeCalcUtils"


function ExperienceElem(props: ExperienceProps) {

  const { startDate, endDate, company, position, currently, description, technologies, from } = props


  const startDateStr = timeUtils.formatDate(startDate, 'MMMM yyyy')
  const endDateStr = currently ? 'Present' : timeUtils.formatDate(endDate, 'MMMM yyyy')

  const difference: TimeDifference = timeUtils.calculateDifference(startDate, endDate)
  const differenceStr: string = timeUtils.formatDifference(difference, false)

  
  return (
    <>
    {
      (from === 'left')
        ? (
          <div className="
              relative w-0 h-0 right-[-16px] top-16 ml-auto
              border-t-[16px] border-b-[16px] border-l-[16px] 
              border-t-transparent border-b-transparent border-l-neutral-200
              border-t-solid border-b-solid border-l-solid 
            "
            ></div>
        )
        : (
          <div className="
              relative w-0 h-0 left-[-16px] top-16 mr-auto align-middle
              border-t-[16px] border-b-[16px] border-r-[16px] 
              border-t-transparent border-b-transparent border-r-neutral-200
              border-t-solid border-b-solid border-r-solid 
            "
          ></div>
        )
      }
    <div className={`row-span-1 mb-12 rounded-3xl bg-neutral-700/10 border-neutral-200 ${(from === 'left') ? 'border-r-2' : 'border-l-2'} p-4`}>

      <h2 className="text-xl text-amber-500">
        {position}
      </h2>

      <h3 className="text-xl text-amber-300">
        @ {company}
      </h3>

      <h3 className="text-xl mt-3">
        {startDateStr} - {endDateStr}
      </h3>

      <h4 className="text-sm text-neutral-400">
        {differenceStr}
      </h4>

      <div className="text-sm mt-5">
        {
          description.map((desc, index) => {
            return (
              <Fragment key={index}>
                <span className="inline-block my-2">
                  {desc}
                </span><br />
              </Fragment>
            )
          })
        }
      </div>

      <div
        className="border-t-2 border-b-2 border-neutral-500 rounded-lg p-4 m-5"
      >
        {
          technologies.map((tech, index) => {
            return (
              <span key={tech}>{tech}{technologies.length === index + 1 ? "" : " · "}</span>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default ExperienceElem