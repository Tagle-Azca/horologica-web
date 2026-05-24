import { useState } from 'react';
import type { HomageEntry, WatchCategory } from '../data/homages';

export function useCategoryFilter(entries: HomageEntry[]) {
  const [active, setActive] = useState<WatchCategory | 'all'>('all');
  const filtered =
    active === 'all' ? entries : entries.filter((e) => e.category === active);
  return { active, setActive, filtered };
}
