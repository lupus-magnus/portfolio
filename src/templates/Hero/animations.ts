export const profileHeroAnimation = {
  animate: {
    y: [-20, 0],
    opacity: [0, 1],
  },
  transition: { delay: 2, duration: 0.7 },
};

export const presentationAnimation = {
  animate: {
    y: [20, 0],
    opacity: [0, 1],
  },
  transition: { delay: 1.5 },
};

export const blobAnimation = {
  animate: {
    opacity: [0, 1],
    transition: { delay: 1, type: "tween" },
  },
};
