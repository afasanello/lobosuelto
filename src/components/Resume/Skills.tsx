import SkillsElem from "./SkillsElem"

import data from "../../data/SkillsData"

function Skills() {
  return (
    <article>
      <h1 className="border-b-2 text-right mb-4 text-2xl font-mono">Technical Skills and Tools</h1>

      <div className="flex flex-wrap justify-center my-5">
        {
          data.skills.map(skill => {
            return (
              <SkillsElem
                key={skill.technology}
                technology={skill.technology}
                image={skill.image}
              />
            )
          })
        }
      </div>
    </article>
  )
}

export default Skills