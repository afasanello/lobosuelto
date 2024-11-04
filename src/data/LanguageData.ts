import { LanguageProps } from "../types"

import Spain from "/flags/Spain.png"
import UK from "/flags/UK.png"
import Brazil from "/flags/Brazil.png"
import Kenya from "/flags/Kenya.png"
import Lebanon from "/flags/Lebanon.png"


//
// Language Data
//

const languages: LanguageProps[] = [
    { language: 'Spanish', flag: Spain, level: 'Native' },
    { language: 'English', flag: UK, level: 'B2' },
    { language: 'Portuguese', flag: Brazil, level: 'B1' },
    { language: 'Swahili', flag: Kenya, level: 'A2' },
    { language: 'Arabic', flag: Lebanon, level: 'A1' },
]


//
// Export
//

export default { languages }