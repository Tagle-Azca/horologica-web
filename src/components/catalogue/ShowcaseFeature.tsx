import { motion } from 'framer-motion';

const IMAGE_URL =
  'https://res.cloudinary.com/dgpby6sho/image/upload/v1779860328/pd-1701-deep-blue-9560074.png_xwcjng.webp';

const MONO = { fontFamily: 'var(--font-mono)' };

// Starfield: scattered 1-px dots via stacked radial-gradients
const STARS_BG = {
  background: `
    radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.22) 0%, transparent 0%),
    radial-gradient(1px 1px at 38% 70%, rgba(255,255,255,0.16) 0%, transparent 0%),
    radial-gradient(1px 1px at 63% 14%, rgba(255,255,255,0.20) 0%, transparent 0%),
    radial-gradient(1px 1px at 81% 55%, rgba(255,255,255,0.13) 0%, transparent 0%),
    radial-gradient(1px 1px at 07% 85%, rgba(255,255,255,0.18) 0%, transparent 0%),
    radial-gradient(1px 1px at 54% 38%, rgba(255,255,255,0.10) 0%, transparent 0%),
    radial-gradient(1px 1px at 27% 60%, rgba(255,255,255,0.14) 0%, transparent 0%),
    radial-gradient(1px 1px at 90% 28%, rgba(255,255,255,0.17) 0%, transparent 0%),
    radial-gradient(1px 1px at 72% 80%, rgba(255,255,255,0.12) 0%, transparent 0%),
    radial-gradient(1px 1px at 46% 92%, rgba(255,255,255,0.09) 0%, transparent 0%),
    radial-gradient(1px 1px at 19% 44%, rgba(255,255,255,0.15) 0%, transparent 0%),
    radial-gradient(1px 1px at 95% 68%, rgba(255,255,255,0.11) 0%, transparent 0%),
    linear-gradient(160deg, #070d1f 0%, #040810 55%, #010204 100%)
  `,
};

function AnnotationLeft({ line1, line2 }: { line1: string; line2?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-right flex-1 min-w-0">
        <p className="text-[8.5px] uppercase tracking-[0.18em] text-stone-300 leading-snug" style={MONO}>
          {line1}
        </p>
        {line2 && (
          <p className="text-[8.5px] uppercase tracking-[0.15em] text-stone-500 leading-snug" style={MONO}>
            {line2}
          </p>
        )}
      </div>
      {/* line + dot */}
      <div className="flex items-center gap-0.5 flex-shrink-0">
        <div className="w-10 lg:w-16" style={{ height: '1px', backgroundColor: 'rgba(100,116,139,0.45)' }} />
        <span
          className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(100,116,139,0.65)' }}
        />
      </div>
    </div>
  );
}

function AnnotationRight({ line1, line2 }: { line1: string; line2?: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* dot + line */}
      <div className="flex items-center gap-0.5 flex-shrink-0">
        <span
          className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(100,116,139,0.65)' }}
        />
        <div className="w-10 lg:w-16" style={{ height: '1px', backgroundColor: 'rgba(100,116,139,0.45)' }} />
      </div>
      <div className="text-left flex-1 min-w-0">
        <p className="text-[8.5px] uppercase tracking-[0.18em] text-stone-300 leading-snug" style={MONO}>
          {line1}
        </p>
        {line2 && (
          <p className="text-[8.5px] uppercase tracking-[0.15em] text-stone-500 leading-snug" style={MONO}>
            {line2}
          </p>
        )}
      </div>
    </div>
  );
}

export function ShowcaseFeature() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto my-14 md:my-20 max-w-4xl px-5 md:px-8"
    >
      <div
        className="relative rounded-sm overflow-hidden"
        style={{
          ...STARS_BG,
          border: '1px solid rgba(30,41,59,0.8)',
          boxShadow:
            '0 0 0 1px rgba(15,23,42,0.6), 0 8px 32px rgba(0,0,0,0.5), 0 0 60px rgba(10,20,60,0.4)',
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderBottom: '1px solid rgba(30,41,59,0.7)' }}
        >
          <span className="text-[8px] uppercase tracking-[0.22em] text-slate-500" style={MONO}>
            [ VITRINA TÉCNICA // ESPÉCIMEN DE ESTUDIO ]
          </span>
          <span className="hidden sm:block text-[8px] uppercase tracking-[0.18em] text-slate-500" style={MONO}>
            OBJETO ID: PD-1701
          </span>
        </div>

        {/* Body */}
        <div className="px-5 md:px-8 py-10 md:py-14">

          {/* 3-col: left annotations | watch | right annotations */}
          <div className="flex items-stretch">

            {/* Left — hidden on mobile */}
            <div className="hidden md:flex flex-col justify-between flex-1 py-10">
              <AnnotationLeft line1="CRONÓGRAFO DE" line2="REINTERPRETACIÓN" />
              <AnnotationLeft line1="PAGANI DESIGN PD-1701" line2="// OBJETO DE ESTUDIO" />
            </div>

            {/* Watch image */}
            <div className="relative flex-shrink-0 w-52 md:w-64 lg:w-72 mx-auto">

              {/* Orbital glow behind the watch */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 55% at 50% 52%, rgba(29,78,216,0.22) 0%, rgba(15,40,130,0.08) 55%, transparent 75%)',
                }}
              />

              <img
                src={IMAGE_URL}
                alt="Pagani Design PD-1701 Deep Blue — Espécimen de Estudio"
                className="relative w-full object-contain select-none z-10"
                style={{
                  filter:
                    'drop-shadow(0 0 18px rgba(29,78,216,0.35)) drop-shadow(0 12px 32px rgba(0,0,0,0.55))',
                }}
                draggable={false}
              />

            </div>

            {/* Right — hidden on mobile */}
            <div className="hidden md:flex flex-col justify-between flex-1 py-10">
              <AnnotationRight line1="DIAL DETALLE v1.0" line2="SUPERFICIE ANALIZADA" />
              <AnnotationRight line1="REFERENCIA" line2="SIMILITUD VISUAL" />
            </div>

          </div>

          {/* Mobile-only: 2-col annotation grid below the image */}
          <div className="md:hidden grid grid-cols-2 gap-y-4 gap-x-4 mt-8">
            {[
              { l1: 'CRONÓGRAFO DE', l2: 'REINTERPRETACIÓN', align: 'left' },
              { l1: 'DIAL DETALLE v1.0', l2: 'SUPERFICIE ANALIZADA', align: 'right' },
              { l1: 'PAGANI DESIGN PD-1701', l2: '// OBJETO DE ESTUDIO', align: 'left' },
              { l1: 'REFERENCIA', l2: 'SIMILITUD VISUAL', align: 'right' },
            ].map(({ l1, l2, align }) => (
              <div key={l1} className={align === 'right' ? 'text-right' : 'text-left'}>
                <p className="text-[8px] uppercase tracking-[0.15em] text-stone-300 leading-relaxed" style={MONO}>
                  {l1}
                </p>
                <p className="text-[8px] uppercase tracking-[0.12em] text-stone-500 leading-relaxed" style={MONO}>
                  {l2}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderTop: '1px solid rgba(30,41,59,0.7)' }}
        >
          <span className="text-[8px] uppercase tracking-[0.18em] text-slate-500" style={MONO}>
            BISEL TAQUIMÉTRICO // CALIBRE MECAQUARTZ
          </span>
          <span className="hidden sm:block text-[8px] uppercase tracking-[0.18em] text-slate-500" style={MONO}>
            GEOMETRÍA COMPARTIDA v1.0
          </span>
        </div>
      </div>
    </motion.div>
  );
}
