export const pageAnimate = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.8,
    },
  },
};

export const imageCome = {
  hidden: {
    // scale: 2,
    opacity: 0,
    x: 400,
    y: 200,
  },
  show: {
    // scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
};

export const heroTitle = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};
export const arrow = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      repeat: Infinity,
    },
  },
};
export const arrowSta = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
  },
};
