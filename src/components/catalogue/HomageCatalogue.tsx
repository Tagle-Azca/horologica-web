import { useNavigate } from 'react-router-dom';
import { useWatchEntries } from '../../context/WatchesContext';
import { useCategoryFilter } from '../../hooks/useCategoryFilter';
import { HeroSection } from './HeroSection';
import { FilterBar } from './FilterBar';
import { StaggeredGrid } from './StaggeredGrid';

export function HomageCatalogue() {
  const navigate = useNavigate();
  const entries = useWatchEntries();
  const { active, setActive, filtered } = useCategoryFilter(entries);

  return (
    <section className="bg-surface-base min-h-screen">
      <HeroSection />
      <FilterBar active={active} onSelect={setActive} />
      <div className="px-6 max-w-7xl mx-auto pb-20">
        <StaggeredGrid entries={filtered} onViewClick={(id) => navigate(`/detalle/${id}`)} />
      </div>
    </section>
  );
}
