import { motion, AnimatePresence } from 'framer-motion';
import { FILTER } from '../../constants/ui-strings';
import type { WatchCategory } from '../../data/homages';

interface FilterBarProps {
  active: WatchCategory | 'all';
  onSelect: (cat: WatchCategory | 'all') => void;
}

type FilterOption = { key: WatchCategory | 'all'; label: string };

const options: FilterOption[] = [
  { key: 'all', label: FILTER.allLabel },
  ...Object.entries(FILTER.categories).map(([key, label]) => ({
    key: key as WatchCategory,
    label,
  })),
];

export function FilterBar({ active, onSelect }: FilterBarProps) {
  return (
    <nav className="flex items-center justify-center gap-2 flex-wrap px-6 py-6">
      {options.map(({ key, label }) => (
        <motion.button
          key={key}
          onClick={() => onSelect(key)}
          whileTap={{ scale: 0.95 }}
          className="relative px-4 py-1.5 text-nano font-sans tracking-widest uppercase rounded-full border transition-colors duration-200"
          style={{
            borderColor:
              active === key ? 'var(--color-gold-400)' : 'rgba(255,255,255,0.1)',
            color: active === key ? 'var(--color-gold-400)' : 'rgb(163,163,163)',
          }}
        >
          <AnimatePresence>
            {active === key && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: 'var(--color-gold-glow)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{label}</span>
        </motion.button>
      ))}
    </nav>
  );
}
