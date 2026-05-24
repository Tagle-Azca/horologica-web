import { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!supabase) { navigate('/admin/login'); return; }
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate('/admin/login');
      else setChecking(false);
    });
  }, [navigate]);

  async function handleLogout() {
    await supabase?.auth.signOut();
    navigate('/admin/login');
  }

  if (checking) return null;

  const isRoot = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="bg-neutral-900 border-b border-neutral-800 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-serif text-neutral-100">Horológica</span>
            <span className="text-neutral-600 text-sm">· Panel de administración</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" target="_blank" rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors border border-neutral-700 rounded-lg px-3 py-1.5">
              Ver sitio web ↗
            </a>
            <button onClick={handleLogout}
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 max-w-4xl mx-auto">
        {!isRoot && (
          <button onClick={() => navigate('/admin')}
            className="flex items-center gap-2 text-neutral-500 hover:text-neutral-300 text-sm mb-6 transition-colors">
            ← Volver a la lista
          </button>
        )}
        <Outlet />
      </main>
    </div>
  );
}
