import { useId } from 'react';

interface WatchPlaceholderProps {
  className?: string;
}

export function WatchPlaceholder({ className }: WatchPlaceholderProps) {
  const uid = useId().replace(/[^a-z0-9]/gi, '');
  const gradId = `wph${uid}`;

  const markers = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const isMain = i % 3 === 0;
    return {
      x1: 80 + (isMain ? 53 : 57) * Math.cos(angle),
      y1: 80 + (isMain ? 53 : 57) * Math.sin(angle),
      x2: 80 + (isMain ? 65 : 62) * Math.cos(angle),
      y2: 80 + (isMain ? 65 : 62) * Math.sin(angle),
      isMain,
    };
  });

  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={gradId} cx="38%" cy="32%">
          <stop offset="0%" stopColor="#222222" />
          <stop offset="100%" stopColor="#111111" />
        </radialGradient>
      </defs>

      <circle cx="80" cy="80" r="74" fill={`url(#${gradId})`} stroke="#2a2a2a" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="64" fill="#060606" stroke="#1c1c1c" strokeWidth="0.5" />

      {markers.map((m, i) => (
        <line
          key={i}
          x1={m.x1} y1={m.y1}
          x2={m.x2} y2={m.y2}
          stroke={m.isMain ? '#b8903c' : '#282828'}
          strokeWidth={m.isMain ? 2.5 : 1.5}
          strokeLinecap="round"
        />
      ))}

      <line x1="80" y1="80" x2="55" y2="63" stroke="#d0d0d0" strokeWidth="4" strokeLinecap="round" />
      <line x1="80" y1="80" x2="120" y2="57" stroke="#d0d0d0" strokeWidth="2.5" strokeLinecap="round" />

      <circle cx="80" cy="80" r="4" fill="#b8903c" />
      <circle cx="80" cy="80" r="1.5" fill="#060606" />
    </svg>
  );
}
