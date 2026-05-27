import { motion } from 'framer-motion';
import { sectionRevealVariants } from '../../constants/motion-variants';

interface HeritageSectionProps {
  label: string;
  text: string;
}

export function HeritageSection({ label, text }: HeritageSectionProps) {
  return (
    <motion.section
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="py-14 md:py-24 px-5 md:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-nano font-sans tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold-400)' }}>
          {label}
        </p>

        <div
          className="border-l-2 pl-5 md:pl-8 py-2"
          style={{ borderColor: 'var(--color-gold-400)', borderLeftWidth: '2px' }}
        >
          <p className="font-sans text-sm text-neutral-700 leading-loose">{text}</p>
        </div>
      </div>
    </motion.section>
  );
}
