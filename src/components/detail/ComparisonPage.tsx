import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { comparisonDetails } from '../../data/comparison-details';
import type { ComparisonDetail } from '../../data/comparison-details';
import { DETAIL } from '../../constants/ui-strings';
import { useWatchEntries } from '../../context/WatchesContext';
import { watchImages } from '../../utils/watchImages';
import { BackButton } from './BackButton';
import { CinematicHero } from './CinematicHero';
import { InspirationQuote } from './InspirationQuote';
import { ComparisonSlider } from './ComparisonSlider';
import { HotspotAnalysis } from './HotspotAnalysis';
import { EditorialSection } from './EditorialSection';
import { SpecsComparison } from './SpecsComparison';
import { HeritageSection } from './HeritageSection';
import { IconicClosure } from './IconicClosure';

export function ComparisonPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const onBack = () => navigate('/');
  const entries = useWatchEntries();
  const [detail, setDetail] = useState<ComparisonDetail | null | undefined>(undefined);

  useEffect(() => {
    const staticDetail = comparisonDetails.find((d) => d.id === id);
    if (staticDetail) { setDetail(staticDetail); return; }
    if (!supabase) { setDetail(null); return; }
    supabase.from('comparison_details').select('*').eq('id', id).maybeSingle()
      .then(({ data }) => {
        if (!data) { setDetail(null); return; }
        setDetail({
          id: data.id,
          originalName: data.original_name,
          homageName: data.homage_name,
          heroTagline: data.hero_tagline,
          inspirationStory: data.inspiration_story,
          designPhilosophy: data.design_philosophy,
          heritageContext: data.heritage_context,
          whyIconic: data.why_iconic,
          visualSimilarities: data.visual_similarities ?? [],
          techSpecs: data.tech_specs ?? [],
        });
      });
  }, [id]);

  const entry = entries.find((h) => h.id === id);

  if (!entry || detail === undefined) return null;

  const { icon, homage } = watchImages(entry);

  if (!detail) return (
    <div className="bg-surface-base min-h-screen">
      <BackButton onBack={onBack} />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center px-6">
          <p className="font-serif text-2xl text-neutral-200 mb-2">{entry.styleName}</p>
          <p className="text-neutral-600 text-xs tracking-widest uppercase mt-6">Contenido de detalle próximamente</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-surface-base min-h-screen">
      <BackButton onBack={onBack} />
      <CinematicHero entry={entry} detail={detail} />
      <InspirationQuote text={detail.inspirationStory} />
      <ComparisonSlider
        original={icon}
        homage={homage}
        originalName={detail.originalName}
        homageName={detail.homageName}
      />
      <HotspotAnalysis
        label={DETAIL.hotspotsLabel}
        hint={DETAIL.hotspotsHint}
        watch={icon}
        similarities={detail.visualSimilarities}
      />
      <EditorialSection label={DETAIL.philosophyLabel} text={detail.designPhilosophy} />
      <SpecsComparison
        label={DETAIL.specsLabel}
        originalName={detail.originalName}
        homageName={detail.homageName}
        specs={detail.techSpecs}
      />
      <HeritageSection label={DETAIL.heritageLabel} text={detail.heritageContext} />
      <IconicClosure text={detail.whyIconic} onBack={onBack} backLabel={DETAIL.backLabel} />
    </div>
  );
}
