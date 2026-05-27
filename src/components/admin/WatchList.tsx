import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

interface WatchRow {
  id: string;
  style_name: string;
  category: string;
  icon_image_url?: string;
  stock: number;
}

const CATEGORY_LABELS: Record<string, string> = {
  dive: 'Buceo', integrated: 'Brazalete Integrado', chronograph: 'Cronógrafo',
  dress: 'Vestir', gmt: 'GMT', sport: 'Sport', pilot: 'Piloto', field: 'Field',
};

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'dive', label: 'Buceo' },
  { key: 'integrated', label: 'Brazalete' },
  { key: 'chronograph', label: 'Cronógrafo' },
  { key: 'dress', label: 'Vestir' },
  { key: 'gmt', label: 'GMT' },
  { key: 'sport', label: 'Sport' },
  { key: 'pilot', label: 'Piloto' },
  { key: 'field', label: 'Field' },
];

export function WatchList() {
  const navigate = useNavigate();
  const [watches, setWatches] = useState<WatchRow[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    supabase?.from('watches').select('id, style_name, category, icon_image_url, stock').order('sort_order')
      .then(({ data }) => setWatches(data ?? []));
  }, []);

  const filtered = activeFilter === 'all' ? watches : watches.filter(w => w.category === activeFilter);

  async function handleStock(id: string, value: number) {
    const stock = Math.max(0, value);
    setWatches(prev => prev.map(w => w.id === id ? { ...w, stock } : w));
    await supabase?.from('watches').update({ stock }).eq('id', id);
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`¿Seguro que quieres eliminar "${name}"? Esta acción no se puede deshacer.`)) return;
    await supabase?.from('watches').delete().eq('id', id);
    setWatches((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
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

      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
              activeFilter === f.key
                ? 'bg-white text-black'
                : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-neutral-900 border border-neutral-800 rounded-2xl">
          <p className="text-neutral-400 text-base mb-2">{activeFilter === 'all' ? 'Aún no hay relojes' : 'Sin relojes en esta categoría'}</p>
          <p className="text-neutral-600 text-sm mb-6">{activeFilter === 'all' ? 'Comienza agregando tu primer par de relojes.' : ''}</p>
          <button onClick={() => navigate('/admin/watches/new')}
            className="bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-3 rounded-xl transition-colors">
            + Agregar reloj
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((w) => (
            <div key={w.id} className="flex items-center gap-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 hover:border-neutral-700 transition-colors">
              {w.icon_image_url ? (
                <img src={w.icon_image_url} alt={w.style_name} className="w-16 h-16 object-cover rounded-xl flex-shrink-0" />
              ) : (
                <div className="w-16 h-16 bg-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-neutral-600 text-xs">Sin foto</span>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-base font-medium text-neutral-100 truncate">{w.style_name}</p>
                  {w.stock === 0 && (
                    <span className="text-xs text-neutral-600 font-medium shrink-0">Sin stock</span>
                  )}
                </div>
                <p className="text-sm text-neutral-500 mt-0.5">{CATEGORY_LABELS[w.category] ?? w.category}</p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-neutral-600 hidden sm:block">Stock</span>
                  <input
                    type="number"
                    min={0}
                    value={w.stock}
                    onChange={e => handleStock(w.id, parseInt(e.target.value) || 0)}
                    className="w-14 bg-neutral-800 border border-neutral-700 rounded-lg px-2 py-1.5 text-sm text-neutral-100 text-center focus:outline-none focus:border-neutral-500"
                  />
                </div>
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
