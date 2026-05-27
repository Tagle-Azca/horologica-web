export interface TechSpec {
  label: string;
  original: string;
  homage: string;
}

export interface VisualSimilarity {
  feature: string;
  description: string;
}

export interface ComparisonDetail {
  id: string;
  originalName: string;
  homageName: string;
  heroTagline: string;
  inspirationStory: string;
  designPhilosophy: string;
  whyIconic: string;
  visualSimilarities: VisualSimilarity[];
  techSpecs: TechSpec[];
}

export const comparisonDetails: ComparisonDetail[] = [];
