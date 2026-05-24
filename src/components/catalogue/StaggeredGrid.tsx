import { AnimatePresence, motion } from 'framer-motion';
import type { HomageEntry } from '../../data/homages';
import { WatchCard } from './WatchCard';

interface StaggeredGridProps {
  entries: HomageEntry[];
  onViewClick: (id: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export function StaggeredGrid({ entries, onViewClick }: StaggeredGridProps) {
  const gridKey = entries.map((e) => e.id).join(',');

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={gridKey}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {entries.map((entry, i) => (
          <div key={entry.id}>
            <WatchCard entry={entry} index={i} onViewClick={onViewClick} />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
