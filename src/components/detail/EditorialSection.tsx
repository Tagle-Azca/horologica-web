import { motion } from 'framer-motion';
import { sectionRevealVariants } from '../../constants/motion-variants';

interface EditorialSectionProps {
  label: string;
  text: string;
  pullQuote?: string;
}

export function EditorialSection({ label, text, pullQuote }: EditorialSectionProps) {
  return (
    <motion.section
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="max-w-2xl mx-auto px-5 md:px-6 py-10 md:py-16"
    >
      <p className="text-nano font-sans tracking-widest uppercase mb-4" style={{ color: 'var(--color-gold-400)' }}>
        {label}
      </p>
      <div className="w-8 h-px mb-6" style={{ backgroundColor: 'var(--color-gold-400)' }} />

      {pullQuote && (
        <p className="font-serif text-2xl text-neutral-700 italic leading-snug mb-8 border-l-2 pl-6" style={{ borderColor: 'var(--color-gold-400)' }}>
          {pullQuote}
        </p>
      )}

      <p className="font-sans text-sm text-neutral-600 leading-loose">{text}</p>
    </motion.section>
  );
}
