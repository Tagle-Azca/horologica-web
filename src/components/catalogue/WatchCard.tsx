import { motion } from 'framer-motion';
import type { HomageEntry } from '../../data/homages';
import { CATALOGUE } from '../../constants/ui-strings';
import { watchCardVariants, dividerVariants } from '../../constants/motion-variants';
import { watchImages } from '../../utils/watchImages';
import { CardImageLayout } from './CardImageLayout';
import { BadgeRow } from './BadgeRow';

interface WatchCardProps {
  entry: HomageEntry;
  index: number;
  onViewClick: (id: string) => void;
}

export function WatchCard({ entry, index, onViewClick }: WatchCardProps) {
  const { icon, homage } = watchImages(entry);
  return (
    <motion.article
      variants={watchCardVariants}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={() => onViewClick(entry.id)}
      className="bg-surface-deep border border-neutral-800/60 rounded-xl overflow-hidden flex flex-col cursor-pointer"
    >
      <CardImageLayout iconWatch={icon} homageWatch={homage} />

      <BadgeRow badges={entry.badges} />

      <div className="px-4 pt-3 pb-2">
        <h3 className="font-serif tracking-wider text-lg text-neutral-100 leading-tight">
          {entry.styleName}
        </h3>
        <p className="text-mini font-sans text-neutral-500 tracking-wide uppercase mt-0.5">
          {entry.brands}
        </p>
      </div>

      <div className="px-4 pb-3">
        <motion.div
          variants={dividerVariants}
          className="h-px origin-left"
          style={{ backgroundColor: 'var(--color-gold-400)' }}
        />
      </div>

      <p className="px-4 pb-3 text-xs font-sans text-neutral-400 leading-relaxed line-clamp-2">
        {entry.editorial}
      </p>

      <div
        className="mt-auto w-full py-2.5 bg-neutral-900 border-t border-neutral-800 text-neutral-300 text-nano font-semibold tracking-widest uppercase flex items-center justify-center gap-1.5"
      >
        <span>{CATALOGUE.cardCtaLabel}</span>
        <span>{CATALOGUE.cardCtaArrow}</span>
      </div>
    </motion.article>
  );
}
