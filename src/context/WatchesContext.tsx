import { createContext, useContext, ReactNode } from 'react';
import type { HomageEntry } from '../data/homages';
import { useWatches } from '../hooks/useWatches';

const WatchesContext = createContext<HomageEntry[]>([]);

export function WatchesProvider({ children }: { children: ReactNode }) {
  const { entries } = useWatches();
  return <WatchesContext.Provider value={entries}>{children}</WatchesContext.Provider>;
}

export function useWatchEntries() {
  return useContext(WatchesContext);
}
