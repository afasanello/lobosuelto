import { AnimationProps } from "framer-motion";
import { showPop, fadeInFromLeft } from "./AnimationData"

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
// Column span
//

const colSpan: {[key: string]: string} = {
  '1': 'col-span-1',
  '2': 'col-span-1',
  '3': 'col-span-1',
  '4': 'col-span-1',
  '5': 'col-span-1'
}

const mdColSpan: {[key: string]: string}  = {
  '1': 'md:col-span-6',
  '2': 'md:col-span-6',
  '3': 'md:col-span-3',
  '4': 'md:col-span-3',
  '5': 'md:col-span-6'
}


//
// Animations
//

const variants: {[key: string]: AnimationProps['variants']} = {
  '1': fadeInFromLeft,
  '2': fadeInFromLeft,
  '3': showPop,
  '4': showPop,
  '5': showPop
}

const initialAnim: {[key: string]: string} = {
  '1': 'hidden',
  '2': 'hidden',
  '3': 'hidden',
  '4': 'hidden',
  '5': 'hidden'
}

const showAnim: {[key: string]: string} = {
  '1': 'visible',
  '2': 'visible',
  '3': 'visible',
  '4': 'visible',
  '5': 'visible'
}


//
// Export
//

export default { elemIds, colSpan, mdColSpan, variants, initialAnim, showAnim }