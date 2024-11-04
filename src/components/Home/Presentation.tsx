import { useEffect, useState } from "react";

function Presentation() {

  const presentationLines = [
    "Alejandro Fasanello",
    "Full-Stack Developer",
    "3+ years working in development teams",
    "Systems Engineering Student",
    "Calculus and Linear Algebra lover",
  ]

  const [presentation, setPresentation] = useState<string>("")
  const [cursor, setCursor] = useState<string>("_")


  function* buildPresentation() {
    let txt: string = ""
    yield txt

    let i = 0;

    while(true) {
      const charList = presentationLines[i].split("")

      for(let j = 0; j < charList.length; j++) {
        txt += charList[j]
        yield txt
      }

      for(let k = 0; k < 20; k++) {
        yield txt
      }

      while(txt.split("").length > 0) {
        txt = txt.slice(0, -1)
        yield txt
      }

      for(let k = 0; k < 10; k++) {
        yield txt
      }
      
      i++
      i = i % presentationLines.length
    }
  }

  function* buildCursor() {
    let txt = ""
    yield txt

    while(true) {
      txt = "_"
      yield txt
      txt = ""
      yield txt
    }
  }
  
  useEffect(() => {
    const presentationGenerator = buildPresentation()
    const cursorGenerator = buildCursor()

    const interval1 = setInterval(() => {
      const txt = presentationGenerator.next().value
      if(txt != null) setPresentation(txt)
    }, 50)

    const interval2 = setInterval(() => {
      const txt = cursorGenerator.next().value
      if(txt != null) setCursor(txt)
    }, 500)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, []);


  return (
    <article
      className="w-11/12 h-16 md:h-20 m-auto"
    >
      <span className="text-xl md:text-3xl font-mono">
        {'> '}{presentation}<span className="text-[5px]"> </span>{cursor}
      </span>
    </article>
  )
}

export default Presentation