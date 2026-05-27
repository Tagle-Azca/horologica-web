import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { HomageEntry, WatchCategory } from '../data/homages';

function toEntry(row: Record<string, unknown>): HomageEntry {
  return {
    id:            row.id as string,
    styleName:     row.style_name as string,
    brands:        row.brands as string,
    editorial:     row.editorial as string,
    category:      row.category as WatchCategory,
    badges:        (row.badges as string[]) ?? [],
    iconImageUrl:  row.icon_image_url as string | undefined,
    homageImageUrl:row.homage_image_url as string | undefined,
    stock:         (row.stock as number) ?? 0,
  };
}

export function useWatches() {
  const [entries, setEntries] = useState<HomageEntry[]>([]);
  const [loading, setLoading] = useState(!!supabase);

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from('watches')
      .select('*')
      .order('sort_order')
      .then(({ data, error }) => {
        if (error) console.error('useWatches error:', error);
        if (data && data.length > 0) setEntries(data.map(toEntry));
        setLoading(false);
      });
  }, []);

  return { entries, loading };
}
