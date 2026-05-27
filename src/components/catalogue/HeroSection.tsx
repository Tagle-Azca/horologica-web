import { motion } from 'framer-motion';
import { HERO } from '../../constants/ui-strings';
import { heroVariants } from '../../constants/motion-variants';

const noiseStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
};

export function HeroSection() {
  return (
    <header
      className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 overflow-hidden"
      style={noiseStyle}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">

        <motion.h1
          className="font-serif text-5xl md:text-7xl text-neutral-800 leading-tight tracking-tight whitespace-pre-line"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {HERO.headline}
        </motion.h1>

        <motion.div
          className="w-14 h-px bg-gold-400"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        />

        <motion.p
          className="font-sans text-sm text-stone-500 tracking-wide"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {HERO.subtitle}
        </motion.p>

      </div>
    </header>
  );
}
