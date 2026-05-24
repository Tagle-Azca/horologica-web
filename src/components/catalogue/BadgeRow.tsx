interface BadgeRowProps {
  badges: readonly string[];
}

export function BadgeRow({ badges }: BadgeRowProps) {
  return (
    <div className="flex flex-wrap gap-1.5 px-4 pt-3">
      {badges.map((badge) => (
        <span
          key={badge}
          className="text-nano font-sans tracking-widest uppercase bg-neutral-900 border border-neutral-800 text-neutral-400 rounded-full px-2 py-0.5"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
