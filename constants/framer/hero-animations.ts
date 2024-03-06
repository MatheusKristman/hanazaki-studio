export const TextAnimation = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export const IllustrationDesktopAnimation = {
  initial: {
    x: "var(--x-initial)",
    y: "var(--y-initial)",
    opacity: 0,
  },
  animate: {
    x: "var(--x-animate)",
    y: "var(--y-animate)",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};
