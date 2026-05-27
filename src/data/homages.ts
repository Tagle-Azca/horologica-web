export interface WatchImage {
  src: string;
  alt: string;
}

export type WatchCategory = 'dive' | 'integrated' | 'chronograph' | 'dress' | 'gmt' | 'sport' | 'pilot' | 'field';

export interface HomageEntry {
  id: string;
  styleName: string;
  brands: string;
  editorial: string;
  category: WatchCategory;
  badges: readonly string[];
  iconImageUrl?: string;
  homageImageUrl?: string;
}

export const homages: HomageEntry[] = [];
