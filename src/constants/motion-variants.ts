export const watchCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    boxShadow: 'var(--shadow-card)',
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
  hover: {
    y: -6,
    boxShadow: 'var(--shadow-card-hover)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const dividerVariants = {
  hidden: { scaleX: 0.4, opacity: 0.3 },
  visible: { scaleX: 0.4, opacity: 0.3 },
  hover: { scaleX: 1, opacity: 1, transition: { duration: 0.4 } },
};

export const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

export const sectionRevealVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};
