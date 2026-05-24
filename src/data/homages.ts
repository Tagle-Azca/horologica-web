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

export const homages: HomageEntry[] = [
  {
    id: 'submariner-style',
    styleName: 'El Buceo Clásico',
    brands: 'Rolex Submariner · San Martin SN007',
    editorial:
      'La lente que definió el sumergible moderno. El San Martin replica cada ángulo del bisel cerámico sin sacrificar la calidad del movimiento Miyota calibre 8215.',
    category: 'dive',
    badges: ['Bisel Rotatorio', 'Vocabulario Clásico'],
  },
  {
    id: 'royal-oak-style',
    styleName: 'La Tégula Infinita',
    brands: 'Audemars Piguet Royal Oak · Pagani Design PD-1661',
    editorial:
      'El bisel de ocho tornillos más imitado de la historia. Pagani lo traduce en acero 316L con una fidelidad que sorprende bajo la lupa, vibrando con NH35 japonés.',
    category: 'integrated',
    badges: ["Diseño Genta '71", 'Brazalete Integrado'],
  },
  {
    id: 'speedmaster-style',
    styleName: 'El Cronógrafo Lunar',
    brands: 'Omega Speedmaster · Seiko SNN255',
    editorial:
      'Viajó a la luna con calibre manual. Su alma taquimétrica revive en movimiento automático japonés con una presencia que haría sonreír a los astronautas.',
    category: 'chronograph',
    badges: ['Legado Lunar', 'Tres Subdiales'],
  },
  {
    id: 'nautilus-style',
    styleName: 'El Porthole Eterno',
    brands: 'Patek Philippe Nautilus · Orient Mako',
    editorial:
      'El óvalo horizontal más deseado de la alta relojería. El Orient Mako hereda su espíritu deportivo con bisel integrado, movimiento in-house F6922 y precio democrático.',
    category: 'integrated',
    badges: ['Silueta Oval', 'Orient In-House'],
  },
  {
    id: 'portugieser-style',
    styleName: 'El Gran Complicado',
    brands: 'IWC Portugieser · Seagull 1963',
    editorial:
      'La elegancia numérica del Portugieser sobre esfera marfil con cronógrafo de columna. La Seagull preserva cada proporción histórica a una fracción del costo.',
    category: 'dress',
    badges: ['Columna-Rueda', 'Dial Limpio'],
  },
];
