import { motion } from 'framer-motion';
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
    <nav className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="flex items-center gap-6 px-6 pt-8 pb-8 w-max min-w-full justify-center">
        {options.map(({ key, label }) => (
          <motion.button
            key={key}
            onClick={() => onSelect(key)}
            whileTap={{ scale: 0.97 }}
            className="relative pb-2 text-[10px] font-sans tracking-[0.18em] uppercase transition-colors duration-300 whitespace-nowrap flex-shrink-0"
            style={{ color: active === key ? 'var(--color-gold-400)' : 'rgb(150,145,138)' }}
          >
            {label}
            {active === key && (
              <motion.div
                layoutId="filter-underline"
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ backgroundColor: 'var(--color-gold-400)' }}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
