import { useNavigate } from 'react-router-dom';
import { useWatchEntries } from '../../context/WatchesContext';
import { useCategoryFilter } from '../../hooks/useCategoryFilter';
import { HERO } from '../../constants/ui-strings';
import { SiteHeader } from './SiteHeader';
import { HeroSection } from './HeroSection';
import { ShowcaseFeature } from './ShowcaseFeature';
import { FilterBar } from './FilterBar';
import { StaggeredGrid } from './StaggeredGrid';

export function HomageCatalogue() {
  const navigate = useNavigate();
  const entries = useWatchEntries();
  const { active, setActive, filtered } = useCategoryFilter(entries);

  return (
    <section className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <ShowcaseFeature />

      {/* Retícula: líneas horizontales enmarcan la zona de filtros */}
      <div className="border-t border-b border-neutral-900/[0.07]">
        <FilterBar active={active} onSelect={setActive} />
      </div>

      {/* Cabecera de sección con contador */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4 flex items-center gap-4">
        <span
          className="text-[10px] uppercase text-neutral-400/60 tracking-[0.18em] flex-shrink-0"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {filtered.length.toString().padStart(2, '0')}&nbsp;piezas
        </span>
        <div className="flex-1 h-px bg-neutral-900/[0.07]" />
        <span
          className="text-[10px] uppercase text-neutral-400/50 tracking-[0.15em] flex-shrink-0 hidden sm:block"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          [ {HERO.gridLabel} ]
        </span>
      </div>

      {/* Grid */}
      <div className="px-6 max-w-7xl mx-auto pb-24">
        <StaggeredGrid entries={filtered} onViewClick={(id) => navigate(`/detalle/${id}`)} />
      </div>
    </section>
  );
}
