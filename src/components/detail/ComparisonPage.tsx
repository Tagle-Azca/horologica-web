import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import type { ComparisonDetail } from '../../data/comparison-details';
import { DETAIL } from '../../constants/ui-strings';
import { useWatchEntries } from '../../context/WatchesContext';
import { watchImages } from '../../utils/watchImages';
import { BackButton } from './BackButton';
import { ComparisonSlider } from './ComparisonSlider';
import { InquiryCTA } from './InquiryCTA';
import { HotspotAnalysis } from './HotspotAnalysis';
import { SpecsComparison } from './SpecsComparison';

export function ComparisonPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const onBack = () => navigate('/');
  const entries = useWatchEntries();
  const [detail, setDetail] = useState<ComparisonDetail | null | undefined>(undefined);

  useEffect(() => {
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
    <div className="min-h-screen">
      <BackButton onBack={onBack} />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center px-6">
          <p className="font-serif text-2xl text-neutral-800 mb-2">{entry.styleName}</p>
          <p className="text-neutral-600 text-xs tracking-widest uppercase mt-6">Contenido de detalle próximamente</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <BackButton onBack={onBack} />

      {/* Hero tagline */}
      <motion.div
        className="max-w-3xl mx-auto px-5 md:px-6 pt-10 pb-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-serif text-4xl md:text-6xl text-neutral-800 leading-tight mb-3">
          {detail.homageName}
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-neutral-800 leading-tight whitespace-pre-line">
          {detail.heroTagline}
        </h1>
      </motion.div>

      <ComparisonSlider
        original={icon}
        homage={homage}
        originalName={detail.originalName}
        homageName={detail.homageName}
      />

      <InquiryCTA watchName={`${detail.originalName} / ${detail.homageName}`} />

      <HotspotAnalysis
        label={DETAIL.hotspotsLabel}
        hint={DETAIL.hotspotsHint}
        watch={homage}
        similarities={detail.visualSimilarities}
      />

      <SpecsComparison
        label={DETAIL.specsLabel}
        originalName={detail.originalName}
        homageName={detail.homageName}
        specs={detail.techSpecs}
      />
    </div>
  );
}
