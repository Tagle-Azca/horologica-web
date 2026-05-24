import { CATALOGUE } from '../../constants/ui-strings';

export function CatalogueHeader() {
  return (
    <header className="text-center mb-12 pt-16 px-4">
      <h1 className="font-serif tracking-wider text-3xl text-neutral-200 mb-2">
        {CATALOGUE.title}
      </h1>
      <p className="font-serif italic text-amber-500/80 text-lg tracking-wide">
        {CATALOGUE.subtitle}
      </p>
    </header>
  );
}
