import type { WatchImage } from '../../data/homages';
import { WatchImageAtom } from './WatchImageAtom';

interface WatchPairProps {
  iconWatch: WatchImage;
  homageWatch: WatchImage;
}

const imgClass = 'h-40 w-auto max-w-none object-contain flex-shrink-0 shadow-watch';

export function WatchPair({ iconWatch, homageWatch }: WatchPairProps) {
  return (
    <div className="flex justify-center items-center h-44 w-full relative my-2 -space-x-6 overflow-hidden">
      <WatchImageAtom src={iconWatch.src} alt={iconWatch.alt} className={imgClass} />
      <WatchImageAtom src={homageWatch.src} alt={homageWatch.alt} className={imgClass} />
    </div>
  );
}
