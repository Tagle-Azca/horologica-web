import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { VisualSimilarity } from '../../data/comparison-details';
import type { WatchImage } from '../../data/homages';
import { WatchImageAtom } from '../catalogue/WatchImageAtom';
import { sectionRevealVariants } from '../../constants/motion-variants';

interface HotspotAnalysisProps {
  label: string;
  hint: string;
  watch: WatchImage;
  similarities: VisualSimilarity[];
}

const POSITIONS = [
  { x: 50, y: 14 },
  { x: 83, y: 48 },
  { x: 50, y: 83 },
  { x: 17, y: 48 },
] as const;

export function HotspotAnalysis({ label, hint, watch, similarities }: HotspotAnalysisProps) {
  const [active, setActive] = useState<number | null>(null);
  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <motion.section
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="py-20 px-6 max-w-5xl mx-auto"
    >
      <p className="text-nano font-sans tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold-400)' }}>{label}</p>
      <div className="w-8 h-px mb-3" style={{ backgroundColor: 'var(--color-gold-400)' }} />
      <p className="text-xs text-neutral-600 font-sans tracking-wide mb-10">{hint}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-square bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800/40 p-8">
          <WatchImageAtom src={watch.src} alt={watch.alt} className="w-full h-full object-contain" />

          {POSITIONS.map((pos, i) => (
            <motion.button
              key={i}
              className="absolute z-10"
              style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%,-50%)' }}
              onClick={() => toggle(i)}
              animate={{ scale: active === i ? 1.25 : 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ border: '1.5px solid var(--color-gold-400)' }}
                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: i * 0.5 }}
              />
              <span
                className="relative flex w-7 h-7 items-center justify-center rounded-full text-nano font-bold z-10"
                style={{
                  backgroundColor: active === i ? 'var(--color-gold-400)' : 'rgba(0,0,0,0.88)',
                  border: '1.5px solid var(--color-gold-400)',
                  color: active === i ? '#000' : 'var(--color-gold-400)',
                }}
              >
                {i + 1}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {similarities.map(({ feature, description }, i) => (
            <motion.button
              key={feature}
              className="text-left rounded-xl px-5 py-4 border transition-colors duration-200"
              style={{
                borderColor: active === i ? 'var(--color-gold-400)' : 'rgba(255,255,255,0.06)',
                backgroundColor: active === i ? 'rgba(212,168,67,0.05)' : 'var(--color-surface-deep)',
              }}
              onClick={() => toggle(i)}
              whileHover={{ borderColor: 'var(--color-gold-500)' }}
            >
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="flex w-5 h-5 shrink-0 items-center justify-center rounded-full text-nano font-bold"
                  style={{
                    border: '1.5px solid var(--color-gold-400)',
                    backgroundColor: active === i ? 'var(--color-gold-400)' : 'transparent',
                    color: active === i ? '#000' : 'var(--color-gold-400)',
                  }}
                >
                  {i + 1}
                </span>
                <h4 className="font-serif text-sm text-neutral-200 leading-snug">{feature}</h4>
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-neutral-400 font-sans leading-relaxed pl-8 overflow-hidden"
                  >
                    {description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
