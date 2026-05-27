import { motion } from 'framer-motion';
import { firstSentence } from '../../utils/text';
import { DETAIL } from '../../constants/ui-strings';

interface IconicClosureProps {
  text: string;
  onBack: () => void;
  backLabel: string;
}

export function IconicClosure({ text, onBack, backLabel }: IconicClosureProps) {
  const quote = firstSentence(text);
  const rest = text.slice(quote.length).trim();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1 }}
      className="py-16 md:py-28 px-5 md:px-8 flex flex-col items-center text-center"
    >
      <p className="text-nano font-sans tracking-widest uppercase mb-10" style={{ color: 'var(--color-gold-400)' }}>
        {DETAIL.iconicLabel}
      </p>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-2xl md:text-4xl text-neutral-800 italic leading-snug max-w-3xl mb-8"
      >
        {quote}
      </motion.p>

      {rest && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-sm text-neutral-500 leading-loose max-w-2xl mb-16"
        >
          {rest}
        </motion.p>
      )}

      <motion.div
        className="w-px h-16 opacity-30 mb-10"
        style={{ backgroundColor: 'var(--color-gold-400)' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      <motion.button
        onClick={onBack}
        className="font-sans text-nano tracking-widest uppercase px-8 py-3 border rounded-full transition-all duration-300"
        style={{ borderColor: 'var(--color-gold-400)', color: 'var(--color-gold-400)' }}
        whileHover={{
          backgroundColor: 'var(--color-gold-400)',
          color: '#000',
          boxShadow: '0 0 30px var(--color-gold-glow-strong)',
        }}
        whileTap={{ scale: 0.97 }}
      >
        {backLabel}
      </motion.button>
    </motion.section>
  );
}
