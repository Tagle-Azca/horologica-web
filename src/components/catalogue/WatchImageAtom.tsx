import { useState } from 'react';
import { WatchPlaceholder } from './WatchPlaceholder';

interface WatchImageAtomProps {
  src: string;
  alt: string;
  className: string;
}

export function WatchImageAtom({ src, alt, className }: WatchImageAtomProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return <WatchPlaceholder className={className} />;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
