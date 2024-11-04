import LanguageElem from "./LanguageElem"

import data from "../../data/LanguageData"


function Languages() {
  return (
    <article>
      <h1 className="border-b-2 text-right mb-4 text-2xl font-mono">Languages</h1>

      <div className="flex flex-wrap justify-center my-5">
        {
          data.languages.map(lang => {
            return (
              <LanguageElem
                key={lang.language}
                language={lang.language}
                flag={lang.flag}
                level={lang.level}
              />
            )
          })
        }
      </div>
    </article>
  )
}

export default Languages