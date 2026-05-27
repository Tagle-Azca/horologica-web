import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { ImageUploader } from './ImageUploader';

const CATEGORIES = [
  { value: 'dive',        label: 'Buceo' },
  { value: 'integrated',  label: 'Brazalete Integrado' },
  { value: 'chronograph', label: 'Cronógrafo' },
  { value: 'dress',       label: 'Vestir' },
  { value: 'gmt',         label: 'GMT' },
  { value: 'sport',       label: 'Sport' },
  { value: 'pilot',       label: 'Piloto' },
  { value: 'field',       label: 'Field' },
] as const;

interface VisualSimilarity { feature: string; description: string; }
interface TechSpec { label: string; original: string; homage: string; }

interface FormState {
  id: string; style_name: string; brand_original: string; brand_homage: string; editorial: string;
  category: string; badges: string; icon_image_url: string; homage_image_url: string;
  original_name: string; homage_name: string; hero_tagline: string;
  design_philosophy: string;
  why_iconic: string; visual_similarities: VisualSimilarity[]; tech_specs: TechSpec[];
}

const empty: FormState = {
  id: '', style_name: '', brand_original: '', brand_homage: '', editorial: '', category: 'dive',
  badges: '', icon_image_url: '', homage_image_url: '',
  original_name: '', homage_name: '', hero_tagline: '',
  design_philosophy: '',
  why_iconic: '', visual_similarities: [], tech_specs: [],
};

function Field({ label, hint, children }: { label: string; hint: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-neutral-200">{label}</label>
      <p className="text-xs text-neutral-500">{hint}</p>
      {children}
    </div>
  );
}

function Section({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 pt-6 pb-2 border-t border-neutral-800">
      <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-sm font-bold text-neutral-400">{number}</span>
      </div>
      <div>
        <h2 className="text-base font-semibold text-neutral-200">{title}</h2>
        <p className="text-xs text-neutral-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export function WatchForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(empty);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const isEdit = !!id;

  useEffect(() => {
    if (!isEdit) return;
    Promise.all([
      supabase?.from('watches').select('*').eq('id', id).maybeSingle(),
      supabase?.from('comparison_details').select('*').eq('id', id).maybeSingle(),
    ]).then(([watchRes, detailRes]) => {
      const w = watchRes?.data;
      const d = detailRes?.data;
      if (!w) return;
      setForm({
        id: w.id, style_name: w.style_name,
        brand_original: (w.brands as string).split(' · ')[0] ?? '',
        brand_homage: (w.brands as string).split(' · ')[1] ?? '',
        editorial: w.editorial, category: w.category,
        badges: (w.badges as string[]).join(', '),
        icon_image_url: w.icon_image_url ?? '',
        homage_image_url: w.homage_image_url ?? '',
        original_name: d?.original_name ?? '', homage_name: d?.homage_name ?? '',
        hero_tagline: d?.hero_tagline ?? '',
        design_philosophy: d?.design_philosophy ?? '',
        why_iconic: d?.why_iconic ?? '',
        visual_similarities: (d?.visual_similarities as VisualSimilarity[]) ?? [],
        tech_specs: (d?.tech_specs as TechSpec[]) ?? [],
      });
    });
  }, [id, isEdit]);

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));
  }

  function updateSimilarity(i: number, key: keyof VisualSimilarity, val: string) {
    setForm((p) => { const a = [...p.visual_similarities]; a[i] = { ...a[i], [key]: val }; return { ...p, visual_similarities: a }; });
  }

  function updateSpec(i: number, key: keyof TechSpec, val: string) {
    setForm((p) => { const a = [...p.tech_specs]; a[i] = { ...a[i], [key]: val }; return { ...p, tech_specs: a }; });
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    const watchPayload = {
      id: form.id, style_name: form.style_name,
      brands: [form.brand_original, form.brand_homage].filter(Boolean).join(' · '),
      editorial: form.editorial, category: form.category,
      badges: form.badges.split(',').map((b) => b.trim()).filter(Boolean),
      icon_image_url: form.icon_image_url || null,
      homage_image_url: form.homage_image_url || null,
    };
    const detailPayload = {
      id: form.id, original_name: form.original_name, homage_name: form.homage_name,
      hero_tagline: form.hero_tagline,
      design_philosophy: form.design_philosophy,
      why_iconic: form.why_iconic, visual_similarities: form.visual_similarities,
      tech_specs: form.tech_specs,
    };
    const watchOp = isEdit
      ? supabase!.from('watches').update(watchPayload).eq('id', id!)
      : supabase!.from('watches').insert(watchPayload);
    const [watchRes, detailRes] = await Promise.all([
      watchOp,
      supabase!.from('comparison_details').upsert(detailPayload, { onConflict: 'id' }),
    ]);
    const err = watchRes.error || detailRes.error;
    if (err) { setError(err.message); setSaving(false); return; }
    navigate('/admin');
  }

  const input = 'bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-base text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 w-full';
  const area = `${input} resize-y`;

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-5 pb-16">
      <div className="mb-2">
        <h1 className="text-2xl font-serif text-neutral-100">
          {isEdit ? 'Editar reloj' : 'Agregar nuevo reloj'}
        </h1>
        <p className="text-neutral-500 text-sm mt-1">
          Completa la información y guarda al final. Puedes subir las fotos directamente desde tu computadora.
        </p>
      </div>

      <Section number={1} title="Información del card"
        description="Lo que aparece en la tarjeta del catálogo principal." />

      <Field label="Nombre del estilo" hint="El nombre poético o descriptivo del par. Ejemplo: El Buceo Clásico">
        <input className={input} value={form.style_name} onChange={set('style_name')}
          placeholder="Ej: El Náutico Dorado" required />
      </Field>

      <Field label="Tipo de reloj" hint="¿A qué categoría pertenece este estilo?">
        <select className={input} value={form.category} onChange={set('category')}>
          {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
        </select>
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Reloj original" hint="La marca y modelo de lujo. Ej: Rolex Submariner">
          <input className={input} value={form.brand_original} onChange={set('brand_original')}
            placeholder="Ej: Rolex Submariner" required />
        </Field>
        <Field label="Reloj homenaje" hint="La marca y modelo del homenaje. Ej: San Martin SN007">
          <input className={input} value={form.brand_homage} onChange={set('brand_homage')}
            placeholder="Ej: San Martin SN007" required />
        </Field>
      </div>

      <Field label="Descripción corta" hint="2 o 3 frases que describen la esencia de este par. Aparece en la tarjeta.">
        <textarea className={area} rows={3} value={form.editorial} onChange={set('editorial')}
          placeholder="Ej: El náutico de lujo por excelencia. Su bisel cerámico bidireccional..." />
      </Field>

      <Field label="Etiquetas" hint="Palabras clave separadas por coma. Aparecen como pequeñas pastillas en la tarjeta.">
        <input className={input} value={form.badges} onChange={set('badges')}
          placeholder="Ej: Bisel Bidireccional, Cerámica, Acero 904L" />
      </Field>

      <Field label="ID interno" hint={isEdit ? 'No se puede cambiar una vez creado.' : 'Una palabra sin espacios ni acentos, en minúsculas. Ejemplo: yacht-master-style'}>
        <input className={`${input} ${isEdit ? 'opacity-50' : ''}`} value={form.id} onChange={set('id')}
          placeholder="Ej: yacht-master-style" required disabled={isEdit} />
      </Field>

      <Section number={2} title="Fotos"
        description="Sube la foto del reloj original (de lujo) y la foto del homenaje." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ImageUploader
          label="Reloj original (de lujo)"
          description="El Rolex, AP, Patek, etc."
          currentUrl={form.icon_image_url}
          onUpload={(url) => setForm((p) => ({ ...p, icon_image_url: url }))}
        />
        <ImageUploader
          label="Reloj homenaje"
          description="El San Martin, Pagani, Seiko, etc."
          currentUrl={form.homage_image_url}
          onUpload={(url) => setForm((p) => ({ ...p, homage_image_url: url }))}
        />
      </div>

      <Section number={3} title="Página de detalle"
        description="Lo que aparece cuando el visitante hace clic en la tarjeta. Puedes dejarlo vacío y llenarlo después." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nombre completo del original" hint="Ej: Rolex Yacht-Master 126622">
          <input className={input} value={form.original_name} onChange={set('original_name')}
            placeholder="Ej: Rolex Yacht-Master 126622" />
        </Field>
        <Field label="Nombre completo del homenaje" hint="Ej: Pagani Design PD-1682">
          <input className={input} value={form.homage_name} onChange={set('homage_name')}
            placeholder="Ej: Pagani Design PD-1682" />
        </Field>
      </div>

      <Field label="Frase principal" hint="La frase grande que aparece en la parte superior de la página. Puedes escribir \n para hacer un salto de línea.">
        <input className={input} value={form.hero_tagline} onChange={set('hero_tagline')}
          placeholder="Ej: Dos relojes.\nUna distancia visual sorprendentemente corta." />
      </Field>

      <Field label="Filosofía de diseño" hint="¿Qué elementos visuales comparten ambos relojes?">
        <textarea className={area} rows={4} value={form.design_philosophy} onChange={set('design_philosophy')}
          placeholder="Describe los elementos de diseño que los acercan..." />
      </Field>

      <Field label="¿Por qué es icónico?" hint="¿Qué hace a este diseño tan reconocible e influyente?">
        <textarea className={area} rows={4} value={form.why_iconic} onChange={set('why_iconic')}
          placeholder="Lo que lo hace único e inconfundible..." />
      </Field>

      <Section number={4} title="Similitudes visuales"
        description="Los elementos que ambos relojes comparten. Puedes agregar los que quieras." />

      <div className="flex flex-col gap-3">
        {form.visual_similarities.map((s, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-neutral-400">Elemento {i + 1}</span>
              <button type="button"
                onClick={() => setForm((p) => ({ ...p, visual_similarities: p.visual_similarities.filter((_, j) => j !== i) }))}
                className="text-sm text-neutral-600 hover:text-red-400 transition-colors">
                Eliminar
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <input className={input} placeholder="Nombre del elemento (Ej: Bisel rotatorio unidireccional)"
                value={s.feature} onChange={(e) => updateSimilarity(i, 'feature', e.target.value)} />
              <textarea className={area} rows={2} placeholder="Descripción de la similitud..."
                value={s.description} onChange={(e) => updateSimilarity(i, 'description', e.target.value)} />
            </div>
          </div>
        ))}
        <button type="button"
          onClick={() => setForm((p) => ({ ...p, visual_similarities: [...p.visual_similarities, { feature: '', description: '' }] }))}
          className="border-2 border-dashed border-neutral-700 hover:border-neutral-500 rounded-2xl py-4 text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
          + Agregar similitud visual
        </button>
      </div>

      <Section number={5} title="Especificaciones técnicas"
        description="Las diferencias técnicas entre ambos relojes. Movimiento, material, diámetro, etc." />

      <div className="flex flex-col gap-3">
        {form.tech_specs.map((s, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-neutral-400">Especificación {i + 1}</span>
              <button type="button"
                onClick={() => setForm((p) => ({ ...p, tech_specs: p.tech_specs.filter((_, j) => j !== i) }))}
                className="text-sm text-neutral-600 hover:text-red-400 transition-colors">
                Eliminar
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <input className={input} placeholder="Nombre (Ej: Movimiento, Material, Diámetro...)"
                value={s.label} onChange={(e) => updateSpec(i, 'label', e.target.value)} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className={input} placeholder="Valor del original (Ej: Cal. 3235)"
                  value={s.original} onChange={(e) => updateSpec(i, 'original', e.target.value)} />
                <input className={input} placeholder="Valor del homenaje (Ej: Miyota 8215)"
                  value={s.homage} onChange={(e) => updateSpec(i, 'homage', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <button type="button"
          onClick={() => setForm((p) => ({ ...p, tech_specs: [...p.tech_specs, { label: '', original: '', homage: '' }] }))}
          className="border-2 border-dashed border-neutral-700 hover:border-neutral-500 rounded-2xl py-4 text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
          + Agregar especificación técnica
        </button>
      </div>

      {error && (
        <div className="bg-red-950 border border-red-800 rounded-xl px-4 py-3">
          <p className="text-red-300 text-sm">Error al guardar: {error}</p>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-neutral-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button type="button" onClick={() => navigate('/admin')}
            className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
            Cancelar y volver
          </button>
          <button type="submit" disabled={saving}
            className="bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-8 py-3 rounded-xl transition-colors disabled:opacity-50">
            {saving ? 'Guardando...' : 'Guardar reloj'}
          </button>
        </div>
      </div>
    </form>
  );
}
