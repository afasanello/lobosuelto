import { TimeDifference } from "../types";


//
// Create Date
//

const createDate: (d: number, m: number, y: number) => Date = (d, m, y) => {
  const date = new Date()

  date.setDate(d)
  date.setMonth(m - 1)
  date.setFullYear(y)

  return date
}


//
// Format Date
//

const formatDate: (inputDate: Date, format: string) => string = (inputDate, format) => {
  if (!inputDate) return '';

  const padZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);

  const fullMonths: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const partialMonths: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const parts: {[key: string] : string} = {
    yyyy: inputDate.getFullYear().toString(),
    MM: padZero(inputDate.getMonth() + 1),
    MMM: partialMonths[inputDate.getMonth()],
    MMMM: fullMonths[inputDate.getMonth()],
    dd: padZero(inputDate.getDate()),
    HH: padZero(inputDate.getHours()),
    hh: padZero(inputDate.getHours() > 12 ? inputDate.getHours() - 12 : inputDate.getHours()),
    mm: padZero(inputDate.getMinutes()),
    ss: padZero(inputDate.getSeconds()),
    tt: inputDate.getHours() < 12 ? 'AM' : 'PM'
  };

  return format.replace(/yyyy|MMMM|MMM|MM|dd|HH|hh|mm|ss|tt/g, (match: string) => { return parts[match] });
}


//
// Calculate Difference
//

const calculateDifference: (firstDate: Date, lastDate: Date) => TimeDifference = (firstDate, lastDate) => {
  const difference = new Date(lastDate.getTime() - firstDate.getTime())

  const years = difference.getUTCFullYear() - 1970
  const months = difference.getUTCMonth()
  const days = difference.getUTCDate() - 1

  return {
    d: days,
    m: months,
    y: years
  }

}


//
// Format Difference
//

const formatDifference: (dif: TimeDifference, getDays: boolean) => string = (dif, getDays = false) => {
  const time: string[] = []

  // Years
  if(dif.y > 1) {
    time.push(dif.y + ' years')
  } else if(dif.y === 1) {
    time.push(dif.y + ' year')
  }

  // Months
  if(dif.m > 1) {
    time.push(dif.m + ' months')
  } else if(dif.m === 1) {
    time.push(dif.m + ' month')
  } else if(!getDays && dif.m === 0 && time.length === 0) {
    time.push('0 months')
  }

  // Days
  if(getDays) {
    if(dif.d > 1) {
      time.push(dif.d + ' days')
    } else if(dif.d === 1) {
      time.push(dif.d + ' day')
    } else if(dif.d === 0 && time.length === 0) {
      time.push('0 days')
    }
  }

  const str = '(' + time.join(', ') + ')'

  return str
}


export default { createDate, formatDate, calculateDifference, formatDifference }