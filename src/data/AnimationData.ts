export const animatedRoutes = {
  hidden: {
    scale: 1,
    opacity: 0,
    transition: {
      scale: { delay: 0, duration: .25 },
      opacity: { delay: 0, duration: .5 }
    }
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: { delay: .6, duration: .25 },
      opacity: { delay: .6, duration: .5 }
    }
  },
  leaving: {
    scale: .1,
    opacity: 0,
    transition: {
      scale: { delay: 0, duration: .25 },
      opacity: { delay: 0, duration: .5 }
    }
  }
}


export const showPop = {
  hidden: {
    opacity: 0,
    scale: 1
  },
  visible: (i: number) => {
    const delay = i * .25
    return {
      opacity: [0, .5, 1],
      scale: [0.1, 1.05, 1],
      transition: {
        opacity: { delay, duration: .25 },
        scale: { delay, duration: .25 }
      }
    }
  }
}


export const fadeInFromLeft = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: (i: number) => {
    const delay = i * .25
    return {
      opacity: [0, .2, 1],
      x: [-20, -10, 0],
      transition: {
        opacity: { delay: delay + .25, duration: 1 },
        x: { delay: delay + .25, duration: .5 }
      }
    }
  }
}


export const fadeInFromRight = {
  hidden: {
    opacity: 0,
    x: 10
  },
  visible: (i: number) => {
    const delay = i * .25
    return {
      opacity: [0, .2, 1],
      x: [20, 10, 0],
      transition: {
        opacity: { delay: delay + .25, duration: 1 },
        x: { delay: delay + .25, duration: .5 }
      }
    }
  }
}


export const fadeInFromTop = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: (i: number) => {
    const delay = i * .25
    return {
      opacity: [0, .2, 1],
      y: [30, 15, 0],
      transition: {
        opacity: { delay: delay + .25, duration: 1 },
        y: { delay: delay + .25, duration: .5 }
      }
    }
  }
}


export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: (i: number) => {
    const delay = i * .25
    return {
      opacity: [0, .2, 1],
      transition: {
        opacity: { delay, duration: 1 }
      }
    }
  }
}