import TimeUtils from '../utils/TimeCalcUtils'

import { ExperienceProps } from "../types";


const ELEMENTS_COUNT = 2


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


const data: { [key: string]: ExperienceProps } = {
  '1': {
    startDate: TimeUtils.createDate(3, 5, 2021),
    endDate: new Date(),
    currently: true,
    company: 'TCS Uruguay S.A.',
    location: 'Montevideo, Uruguay',
    position: 'Junior Analyst | Salesforce Dev',
    description: [
      'Development and maintenance of a self-service platform for a fuel and lubricants multinational company.',
      'Work in an Agile development team (Scrum).',
      'Migration of a legacy system from AngularJS to Experience Cloud',
      'Tasks related to Salesforce Admin role (Salesforce platform management) and Developer (Frontend: Visualforce, Lightning Web Components, JS. Backend: Apex, Java. Test classes.'
    ],
    technologies: ['HTML', 'CSS', 'JS', 'GIT', 'Salesforce Admin', 'Apex', 'Java', 'Visualforce', 'LWC', 'Experience Cloud', 'AngularJS', 'Webservices', 'Test classes']
  },
  '2': {
    startDate: TimeUtils.createDate(1, 2, 2020),
    endDate: TimeUtils.createDate(1, 4, 2021),
    currently: false,
    company: 'Megal S.A.',
    location: 'Montevideo, Uruguay',
    position: 'Warehouse Assistant | Web Dev',
    description: [
      'Loading and unloading of products. Stock control.',
      'Usage of Excel spreadsheets.',
      'Implementation of an address search system by zones using JS, Bootstrap, Leaflet JS (Maps) and an API that returns the coordinates of a given address in SRID 4326.'
    ],
    technologies: ['HTML', 'CSS', 'JS', 'GIT', 'Bootstrap', 'Geolocation']
  }
}


//
// Export
//

export default { elemIds, data }