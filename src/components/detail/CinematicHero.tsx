import { motion } from 'framer-motion';
import type { HomageEntry } from '../../data/homages';
import type { ComparisonDetail } from '../../data/comparison-details';
import { DETAIL } from '../../constants/ui-strings';
import { watchImages } from '../../utils/watchImages';
import { WatchImageAtom } from '../catalogue/WatchImageAtom';

interface CinematicHeroProps {
  entry: HomageEntry;
  detail: ComparisonDetail;
}

const dimGlow = {
  background: 'radial-gradient(ellipse 60% 60% at center, rgba(212,168,67,0.04) 0%, transparent 70%)',
};

const brightGlow = {
  background: 'radial-gradient(ellipse 75% 75% at center, rgba(212,168,67,0.13) 0%, transparent 65%)',
};

const panelVariants = {
  hidden: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function CinematicHero({ entry, detail }: CinematicHeroProps) {
  const { icon, homage } = watchImages(entry);
  return (
    <section className="min-h-screen flex flex-col items-center justify-between py-16 px-6 overflow-hidden bg-black">
      <motion.div
        className="text-center max-w-2xl mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-nano font-sans tracking-widest uppercase text-neutral-700 mb-5 font-medium">
          {DETAIL.originalTag}&nbsp;&nbsp;·&nbsp;&nbsp;{DETAIL.homageTag}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-neutral-50 leading-tight whitespace-pre-line">
          {detail.heroTagline}
        </h1>
      </motion.div>

      <div className="flex items-center w-full max-w-3xl mt-8">
        {/* La Referencia — smaller, subdued, referential */}
        <motion.div
          className="flex-1 flex flex-col items-center gap-4"
          custom={-1}
          variants={panelVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-52 aspect-square">
            <div className="absolute inset-0 rounded-full" style={dimGlow} />
            <div className="relative z-10 w-full h-full" style={{ filter: 'brightness(0.68) saturate(0.72)' }}>
              <WatchImageAtom src={icon.src} alt={icon.alt}
                className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-nano font-sans tracking-widest uppercase text-neutral-700 mb-1">{DETAIL.originalTag}</p>
            <p className="font-sans text-neutral-600 text-xs leading-snug">{detail.originalName}</p>
          </div>
        </motion.div>

        {/* VS divider */}
        <motion.div
          className="flex flex-col items-center gap-3 px-5 shrink-0"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="w-px h-20 opacity-20" style={{ backgroundColor: 'var(--color-gold-400)' }} />
          <p className="font-serif text-xs opacity-30" style={{ color: 'var(--color-gold-400)' }}>VS</p>
          <div className="w-px h-20 opacity-20" style={{ backgroundColor: 'var(--color-gold-400)' }} />
        </motion.div>

        {/* La Interpretación — larger, brighter, visually dominant */}
        <motion.div
          className="flex-1 flex flex-col items-center gap-5"
          custom={1}
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <div className="relative w-full max-w-sm aspect-square">
            <div className="absolute inset-0 rounded-full" style={brightGlow} />
            <div className="relative z-10 w-full h-full" style={{ filter: 'brightness(1.07) contrast(1.05) saturate(1.04)' }}>
              <WatchImageAtom src={homage.src} alt={homage.alt}
                className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-nano font-sans tracking-widest uppercase mb-1.5 font-medium"
               style={{ color: 'var(--color-gold-400)' }}>
              {DETAIL.homageTag}
            </p>
            <p className="font-serif text-neutral-200 text-base leading-snug">{detail.homageName}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center gap-2 pb-2"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        style={{ opacity: 0.28 }}
      >
        <p className="text-nano font-sans tracking-widest uppercase text-neutral-500">{DETAIL.scrollHint}</p>
        <div className="w-px h-8 bg-neutral-700" />
      </motion.div>
    </section>
  );
}
