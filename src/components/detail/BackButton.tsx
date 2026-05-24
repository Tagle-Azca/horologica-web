import { motion } from 'framer-motion';
import { DETAIL } from '../../constants/ui-strings';

interface BackButtonProps {
  onBack: () => void;
}

export function BackButton({ onBack }: BackButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="sticky top-0 z-50 border-b border-neutral-800/30"
      style={{ backgroundColor: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-4 text-neutral-400 hover:text-gold-400 transition-colors duration-200"
      >
        <span className="text-nano font-sans tracking-widest uppercase">{DETAIL.backLabel}</span>
      </button>
    </motion.div>
  );
}
