export type MenuProps = {
    sizeMd: number
    sizeLg: number
    sizeXl: number
    buttons: MenuBtn[]
}

export type MenuBtn = {
    name: string
    href: string
}

export type BtnProp = {
    name: string
    sizeMd: number
    sizeLg: number
    sizeXl: number
    selected: boolean
}

export type LogoProps = {
    blur: boolean
    size: number
    opacity: number
    r: number
    g: number
    b: number
}

export type NavLogoProp = {
    blur: boolean
    size: number
}

export type ExperienceProps = {
    startDate: Date,
    endDate: Date,
    currently: boolean,
    company: string,
    location: string,
    position: string,
    description: string[],
    technologies: string[],
    from?: string
}

export type EducationProps = {
    startDate: Date,
    endDate: Date,
    currently: boolean,
    progress: number,
    truncated: boolean,
    institution: string,
    location: string,
    career: string,
    from?: string
}

export type LanguageProps = {
    language: string,
    flag: string,
    level: string
}

export type SkillProps = {
    technology: string,
    image: string
}

export type TimeDifference = {
    d: number,
    m: number,
    y: number
}