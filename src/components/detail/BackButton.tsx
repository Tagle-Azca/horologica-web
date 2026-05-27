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
      className="sticky top-0 z-50 border-b border-neutral-900/[0.07]"
      style={{ backgroundColor: 'rgba(248,249,251,0.92)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-4 text-neutral-500 hover:text-gold-400 transition-colors duration-200"
      >
        <span className="text-nano font-sans tracking-widest uppercase">{DETAIL.backLabel}</span>
      </button>
    </motion.div>
  );
}
