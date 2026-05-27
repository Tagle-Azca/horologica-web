import { useEffect, useState } from 'react';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 py-4 flex items-center justify-between transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(248,249,251,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
      }}
    >
      <span
        className="font-sans text-xs uppercase text-neutral-700"
        style={{ letterSpacing: '0.32em' }}
      >
        Tagle Watches
      </span>

      <span
        className="font-sans text-[10px] uppercase text-neutral-400"
        style={{ letterSpacing: '0.2em', fontFamily: 'var(--font-mono)' }}
      >
        Edición&nbsp;2026
      </span>
    </header>
  );
}
