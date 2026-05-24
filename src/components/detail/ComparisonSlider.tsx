import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { WatchImage } from '../../data/homages';
import { DETAIL } from '../../constants/ui-strings';
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
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <p className="text-nano font-sans tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold-400)' }}>
        {DETAIL.sliderLabel}
      </p>
      <p className="text-xs text-neutral-600 font-sans tracking-wide mb-8">{DETAIL.sliderHint}</p>

      <div
        ref={containerRef}
        className="relative w-full h-80 md:h-[480px] overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800/40 select-none"
        style={{ cursor: dragging ? 'ew-resize' : 'col-resize' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
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
            backgroundColor: 'rgba(0,0,0,0.92)',
            boxShadow: `0 0 20px var(--color-gold-glow)`,
          }}
          animate={{ scale: dragging ? 0.88 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <span className="font-sans font-bold select-none" style={{ color: 'var(--color-gold-400)', fontSize: 13 }}>⟺</span>
        </motion.div>

        <div className="absolute bottom-4 left-4 pointer-events-none">
          <p className="text-nano font-sans tracking-widest uppercase px-2 py-1 rounded"
            style={{ color: 'rgb(163,163,163)', backgroundColor: 'rgba(0,0,0,0.7)' }}>
            {originalName}
          </p>
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-none">
          <p className="text-nano font-sans tracking-widest uppercase px-2 py-1 rounded"
            style={{ color: 'var(--color-gold-400)', backgroundColor: 'rgba(0,0,0,0.7)' }}>
            {homageName}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
