import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

interface WatchRow {
  id: string;
  style_name: string;
  category: string;
  icon_image_url?: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  dive: 'Buceo', integrated: 'Brazalete Integrado', chronograph: 'Cronógrafo',
  dress: 'Vestir', gmt: 'GMT', sport: 'Sport', pilot: 'Piloto', field: 'Field',
};

export function WatchList() {
  const navigate = useNavigate();
  const [watches, setWatches] = useState<WatchRow[]>([]);

  useEffect(() => {
    supabase?.from('watches').select('id, style_name, category, icon_image_url').order('sort_order')
      .then(({ data }) => setWatches(data ?? []));
  }, []);

  async function handleDelete(id: string, name: string) {
    if (!confirm(`¿Seguro que quieres eliminar "${name}"? Esta acción no se puede deshacer.`)) return;
    await supabase?.from('watches').delete().eq('id', id);
    setWatches((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif text-neutral-100 mb-1">Mis relojes</h1>
          <p className="text-neutral-500 text-sm">Aquí puedes ver, editar y agregar relojes al catálogo.</p>
        </div>
        <button
          onClick={() => navigate('/admin/watches/new')}
          className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
        >
          + Agregar reloj
        </button>
      </div>

      {watches.length === 0 ? (
        <div className="text-center py-20 bg-neutral-900 border border-neutral-800 rounded-2xl">
          <p className="text-neutral-400 text-base mb-2">Aún no hay relojes</p>
          <p className="text-neutral-600 text-sm mb-6">Comienza agregando tu primer par de relojes.</p>
          <button onClick={() => navigate('/admin/watches/new')}
            className="bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-3 rounded-xl transition-colors">
            + Agregar reloj
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {watches.map((w) => (
            <div key={w.id} className="flex items-center gap-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 hover:border-neutral-700 transition-colors">
              {w.icon_image_url ? (
                <img src={w.icon_image_url} alt={w.style_name} className="w-16 h-16 object-cover rounded-xl flex-shrink-0" />
              ) : (
                <div className="w-16 h-16 bg-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-neutral-600 text-xs">Sin foto</span>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <p className="text-base font-medium text-neutral-100 truncate">{w.style_name}</p>
                <p className="text-sm text-neutral-500 mt-0.5">{CATEGORY_LABELS[w.category] ?? w.category}</p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => navigate(`/admin/watches/${w.id}/edit`)}
                  className="text-sm font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(w.id, w.style_name)}
                  className="text-sm text-neutral-600 hover:text-red-400 px-3 py-2 rounded-lg transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
