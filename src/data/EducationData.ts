import TimeUtils from '../utils/TimeCalcUtils'

import { EducationProps } from "../types";


const ELEMENTS_COUNT = 5


//
// Element IDs
//

const elemList: string[] = []

for(let i = 1; i <= ELEMENTS_COUNT; i++) {
  elemList.push(i.toString());
}

const elemIds = elemList 


//
// Data
//

const data: { [key: string]: EducationProps } = {
  '1': {
    startDate: TimeUtils.createDate(7, 3, 2023),
    endDate: new Date(),
    currently: true,
    progress: 38,
    truncated: false,
    institution: 'Universidad ORT Uruguay',
    location: 'Montevideo, Uruguay',
    career: 'Systems Engineering'
  },
  '2': {
    startDate: TimeUtils.createDate(27, 2, 2018),
    endDate: TimeUtils.createDate(31, 12, 2021),
    currently: false,
    progress: 35,
    truncated: true,
    institution: 'Universidad de la República',
    location: 'Montevideo, Uruguay',
    career: 'Computer Science Engineering'
  },
  '3': {
    startDate: TimeUtils.createDate(1, 6, 2023),
    endDate: TimeUtils.createDate(1, 10, 2023),
    currently: false,
    progress: 100,
    truncated: false,
    institution: 'Udemy',
    location: 'Montevideo, Uruguay',
    career: 'JavaScript, React'
  },
  '4': {
    startDate: TimeUtils.createDate(2, 3, 2020),
    endDate: TimeUtils.createDate(27, 11, 2020),
    currently: false,
    progress: 100,
    truncated: false,
    institution: 'Plan Ceibal - JAP',
    location: 'Montevideo, Uruguay',
    career: 'Web Development - Fundamentals'
  },
  '5': {
    startDate: TimeUtils.createDate(1, 7, 2017),
    endDate: TimeUtils.createDate(1, 11, 2017),
    currently: false,
    progress: 100,
    truncated: false,
    institution: 'Taller de Informática',
    location: 'Montevideo, Uruguay',
    career: 'Web Development - PHP/MySQL'
  },
}


//
// Export
//

export default { elemIds, data }