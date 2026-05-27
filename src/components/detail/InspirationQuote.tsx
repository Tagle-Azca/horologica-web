import { motion } from 'framer-motion';
import { firstSentence } from '../../utils/text';

interface InspirationQuoteProps {
  text: string;
}

export function InspirationQuote({ text }: InspirationQuoteProps) {
  const quote = firstSentence(text);

  return (
    <motion.section
      className="py-14 md:py-24 px-5 md:px-8 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-px h-14 opacity-40 mb-10"
        style={{ backgroundColor: 'var(--color-gold-400)' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <p className="font-serif text-2xl md:text-4xl text-neutral-800 italic leading-snug max-w-3xl">
        &ldquo;{quote}&rdquo;
      </p>

      <motion.div
        className="w-px h-14 opacity-40 mt-10"
        style={{ backgroundColor: 'var(--color-gold-400)' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
    </motion.section>
  );
}
