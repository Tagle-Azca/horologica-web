import { motion } from 'framer-motion';
import { sectionRevealVariants } from '../../constants/motion-variants';

// ── Actualiza estos valores con tus datos de contacto ──────────────────────
const WHATSAPP_NUMBER = '521234567890'; // sin + ni espacios
const EMAIL_ADDRESS   = 'contacto@horologica.mx';
// ───────────────────────────────────────────────────────────────────────────

interface InquiryCTAProps {
  watchName: string;
}

export function InquiryCTA({ watchName }: InquiryCTAProps) {
  const message = encodeURIComponent(
    `Hola, me interesa cotizar la pieza: ${watchName}. ¿Podría darme más información?`
  );

  return (
    <motion.div
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="max-w-2xl mx-auto px-5 md:px-6 py-10 md:py-12"
    >
      <div
        className="border border-stone-300/70 rounded-sm px-8 py-10 flex flex-col items-center gap-5"
        style={{ backgroundColor: 'rgba(250,249,248,0.5)' }}
      >
        {/* eyebrow */}
        <p
          className="text-[9px] uppercase tracking-[0.28em] text-stone-400"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          [ CONSULTA DE PIEZA ]
        </p>

        {/* main heading */}
        <h3 className="font-serif text-xl md:text-2xl text-neutral-800 tracking-wide text-center leading-snug">
          Solicitar Cotización
        </h3>

        {/* thin rule */}
        <div className="w-10 h-px bg-stone-300" />

        {/* watch name */}
        <p
          className="text-[10px] uppercase tracking-[0.18em] text-stone-500 text-center"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {watchName}
        </p>

        {/* CTA buttons */}
        <div className="flex gap-3 w-full max-w-xs mt-1">
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-stone-300 py-3.5 text-center text-[10px] uppercase tracking-[0.2em] text-neutral-600 transition-all duration-300"
            style={{ fontFamily: 'var(--font-mono)' }}
            whileHover={{ backgroundColor: '#171717', color: '#ffffff', borderColor: '#171717' }}
            whileTap={{ scale: 0.98 }}
          >
            WhatsApp
          </motion.a>
          <motion.a
            href={`mailto:${EMAIL_ADDRESS}?subject=Cotización: ${watchName}&body=Hola, me interesa cotizar: ${watchName}.`}
            className="flex-1 border border-stone-300 py-3.5 text-center text-[10px] uppercase tracking-[0.2em] text-neutral-600 transition-all duration-300"
            style={{ fontFamily: 'var(--font-mono)' }}
            whileHover={{ backgroundColor: '#171717', color: '#ffffff', borderColor: '#171717' }}
            whileTap={{ scale: 0.98 }}
          >
            Email
          </motion.a>
        </div>

        {/* footer note */}
        <p
          className="text-[8.5px] uppercase tracking-[0.15em] text-stone-400/70 text-center"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          [ ENLACE DIRECTO VIA WHATSAPP / EMAIL ]
        </p>
      </div>
    </motion.div>
  );
}
