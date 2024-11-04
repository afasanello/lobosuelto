import { EducationProps, TimeDifference } from "../../types"

import timeUtils from "../../utils/TimeCalcUtils"


function EducationElem(props: EducationProps) {

  const { startDate, endDate, currently, progress, truncated, institution, location, career, from } = props


  const startDateStr = timeUtils.formatDate(startDate, 'MMMM yyyy')
  const endDateStr = currently ? 'Present' : timeUtils.formatDate(endDate, 'MMMM yyyy')
  const truncatedStr = truncated ? ' - Truncated' : ''

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

      <h2 className="text-lg text-amber-500">
        {career} ({progress}%)
      </h2>

      <h3 className="text-lg text-amber-300">
        @ {institution}
      </h3>

      <h4 className="text-sm mt-0">
        {location}
      </h4>

      <h3 className="text-xl mt-3">
        {startDateStr} - {endDateStr}
      </h3>

      <h4 className="text-sm text-neutral-400">
        {differenceStr} {truncatedStr}
      </h4>
    </div>
    </>
  )
}

export default EducationElem