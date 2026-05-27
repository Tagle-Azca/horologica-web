import type { WatchImage } from '../../data/homages';
import { CATALOGUE } from '../../constants/ui-strings';
import { WatchImageAtom } from './WatchImageAtom';

interface CardImageLayoutProps {
  iconWatch: WatchImage;
  homageWatch: WatchImage;
}

const overlayStyle = {
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(250,248,245,0.90)',
  border: '1px solid rgba(0,0,0,0.07)',
};

export function CardImageLayout({ iconWatch, homageWatch }: CardImageLayoutProps) {
  return (
    <div className="relative h-64 overflow-hidden rounded-t-xl">
      {/* Homage: primary subject — slightly brightened for cinematic presence */}
      <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ filter: 'brightness(1.05) contrast(1.06) saturate(1.03)' }}>
        <WatchImageAtom
          src={homageWatch.src}
          alt={homageWatch.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom vignette — blends image into card body */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{ background: 'var(--gradient-card-vignette)' }}
      />

      {/* Subtle gold glow from below */}
      <div
        className="absolute inset-x-0 bottom-0 h-full pointer-events-none z-10"
        style={{ background: 'var(--gradient-card-glow)' }}
      />

      {/* Original: archival reference — reduced, desaturated, treated as benchmark */}
      <div
        className="absolute bottom-3 left-3 rounded-xl p-1.5 flex flex-col items-center gap-1 z-20"
        style={overlayStyle}
      >
        <p className="text-nano font-sans tracking-widest uppercase text-neutral-600">
          {CATALOGUE.inspiredBy}
        </p>
        <div style={{ filter: 'brightness(0.72) saturate(0.65) contrast(0.9)' }}>
          <WatchImageAtom
            src={iconWatch.src}
            alt={iconWatch.alt}
            className="w-14 h-14 object-cover rounded-lg opacity-90"
          />
        </div>
      </div>
    </div>
  );
}
