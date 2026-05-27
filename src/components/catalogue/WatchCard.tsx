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
  const outOfStock = entry.stock === 0;
  return (
    <motion.article
      variants={watchCardVariants}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={() => onViewClick(entry.id)}
      className={`bg-surface-deep border border-stone-200/80 rounded-xl overflow-hidden flex flex-col cursor-pointer group relative ${outOfStock ? 'opacity-70' : ''}`}
    >
      {outOfStock && (
        <span className="absolute top-3 right-3 z-10 font-mono text-[10px] tracking-widest uppercase text-stone-400 bg-white/80 px-2 py-0.5 rounded-full">
          Bajo Pedido
        </span>
      )}

      <div className={outOfStock ? 'grayscale' : ''}>
        <CardImageLayout iconWatch={icon} homageWatch={homage} />
      </div>

      <BadgeRow badges={entry.badges} />

      <div className="px-4 pt-3 pb-2">
        <h3 className="font-serif tracking-wider text-lg text-neutral-800 leading-tight">
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

      <p className="px-4 pb-3 text-xs font-sans text-neutral-600 leading-relaxed line-clamp-2">
        {entry.editorial}
      </p>

      <div
        className="mt-auto w-full py-3 border-t border-stone-200/60 text-neutral-500 group-hover:text-gold-400 text-nano font-medium tracking-[0.22em] uppercase flex items-center justify-center gap-2 transition-colors duration-300"
      >
        <span>{CATALOGUE.cardCtaLabel}</span>
        <span>{CATALOGUE.cardCtaArrow}</span>
      </div>
    </motion.article>
  );
}
