import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { WatchImage } from '../../data/homages';
import { DETAIL } from '../../constants/ui-strings';

const MONO = { fontFamily: 'var(--font-mono)' };
import { WatchImageAtom } from '../catalogue/WatchImageAtom';
import { sectionRevealVariants } from '../../constants/motion-variants';

interface ComparisonSliderProps {
  original: WatchImage;
  homage: WatchImage;
  originalName: string;
  homageName: string;
}

export function ComparisonSlider({ original, homage, originalName, homageName }: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition(Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging) updatePosition(e.clientX);
  };

  const onPointerUp = () => setDragging(false);

  return (
    <motion.section
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto"
    >
      <p className="text-nano font-sans tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold-400)' }}>
        {DETAIL.sliderLabel}
      </p>
      <p className="text-xs text-neutral-600 font-sans tracking-wide mb-8">{DETAIL.sliderHint}</p>

      <div
        ref={containerRef}
        className="relative w-full h-80 md:h-[480px] overflow-hidden rounded-2xl select-none"
        style={{
          backgroundColor: '#faf9f8',
          border: '4px solid rgba(214,211,206,0.8)',
          cursor: dragging ? 'ew-resize' : 'col-resize',
          touchAction: 'none',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <div className="absolute inset-0 p-10">
            <WatchImageAtom src={homage.src} alt={homage.alt} className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <div className="absolute inset-0 p-10">
            <WatchImageAtom src={original.src} alt={original.alt} className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{ left: `${position}%`, backgroundColor: 'var(--color-gold-400)' }} />

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center pointer-events-none z-20 border"
          style={{
            left: `${position}%`,
            borderColor: 'var(--color-gold-400)',
            backgroundColor: 'rgba(250,249,248,0.97)',
            boxShadow: `0 0 20px var(--color-gold-glow)`,
          }}
          animate={{ scale: dragging ? 0.88 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <span className="font-sans font-bold select-none" style={{ color: 'var(--color-gold-400)', fontSize: 13 }}>⟺</span>
        </motion.div>

      </div>

      {/* metadata bar */}
      <div className="flex justify-center items-center gap-6 mt-3 px-1">
        <div className="flex flex-col gap-0.5 items-end">
          <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400" style={MONO}>
            ← {DETAIL.originalTag}
          </span>
          <span className="text-[9px] text-stone-400/60 truncate max-w-[120px] md:max-w-[180px] text-right" style={MONO}>
            {originalName}
          </span>
        </div>
        <div className="w-px h-6 bg-stone-300/60 flex-shrink-0" />
        <div className="flex flex-col gap-0.5 items-start">
          <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400" style={MONO}>
            {DETAIL.homageTag} →
          </span>
          <span className="text-[9px] text-stone-400/60 truncate max-w-[120px] md:max-w-[180px]" style={MONO}>
            {homageName}
          </span>
        </div>
      </div>
    </motion.section>
  );
}
