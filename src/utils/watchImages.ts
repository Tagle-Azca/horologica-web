import type { HomageEntry, WatchImage } from '../data/homages';

type WatchImageInput = Pick<HomageEntry, 'id' | 'styleName' | 'iconImageUrl' | 'homageImageUrl'>;

export function watchImages(entry: WatchImageInput): { icon: WatchImage; homage: WatchImage } {
  return {
    icon:   { src: entry.iconImageUrl   ?? `/assets/watches/${entry.id}-icon.jpg`,   alt: `${entry.styleName} — referencia` },
    homage: { src: entry.homageImageUrl ?? `/assets/watches/${entry.id}-homage.jpg`, alt: `${entry.styleName} — homenaje`  },
  };
}
