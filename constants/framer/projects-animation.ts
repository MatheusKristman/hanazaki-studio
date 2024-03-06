export const ContainerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const IllustrationAnimation = {
  initial: {
    x: "-110%",
  },
  animate: {
    x: 0,
    transition: {
      ease: "circOut",
      duration: 1,
    },
  },
};

export const TextAnimation = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};
