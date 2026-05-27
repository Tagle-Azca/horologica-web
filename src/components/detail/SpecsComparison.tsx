import { motion } from 'framer-motion';
import type { TechSpec } from '../../data/comparison-details';
import { sectionRevealVariants } from '../../constants/motion-variants';

interface SpecsComparisonProps {
  label: string;
  originalName: string;
  homageName: string;
  specs: TechSpec[];
}

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: 'easeOut' as const },
  }),
};

export function SpecsComparison({ label, originalName, homageName, specs }: SpecsComparisonProps) {
  return (
    <motion.section
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="py-14 md:py-20 px-5 md:px-6 max-w-3xl mx-auto"
    >
      <p className="text-nano font-sans tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold-400)' }}>
        {label}
      </p>
      <div className="w-8 h-px mb-8" style={{ backgroundColor: 'var(--color-gold-400)' }} />

      {/* Desktop header: 3 cols */}
      <div className="hidden md:grid grid-cols-3 gap-4 pb-4 mb-2 border-b border-neutral-800/60">
        <div />
        <p className="text-nano font-sans tracking-widest uppercase text-neutral-400 font-medium">{originalName}</p>
        <p className="text-nano font-sans tracking-widest uppercase font-medium" style={{ color: 'var(--color-gold-400)' }}>
          {homageName}
        </p>
      </div>

      {/* Mobile header: 2 cols (no label column) */}
      <div className="grid grid-cols-2 gap-4 pb-4 mb-2 border-b border-neutral-800/60 md:hidden">
        <p className="text-nano font-sans tracking-widest uppercase text-neutral-400 font-medium">{originalName}</p>
        <p className="text-nano font-sans tracking-widest uppercase font-medium" style={{ color: 'var(--color-gold-400)' }}>
          {homageName}
        </p>
      </div>

      {specs.map(({ label: specLabel, original, homage }, i) => (
        <motion.div
          key={specLabel}
          variants={rowVariants}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-4 border-b border-neutral-800/30 last:border-0"
        >
          {/* Mobile: label on its own row */}
          <p className="text-nano font-sans tracking-widest uppercase text-neutral-600 mb-2 md:hidden">
            {specLabel}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Desktop label column */}
            <p className="hidden md:block text-nano font-sans tracking-widest uppercase text-neutral-600 self-center">
              {specLabel}
            </p>
            <p className="text-xs font-sans text-neutral-700 leading-relaxed">{original}</p>
            <p className="text-xs font-sans leading-relaxed" style={{ color: 'var(--color-gold-400)' }}>{homage}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
