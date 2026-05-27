import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) { setError('Servicio no configurado.'); return; }
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError('El correo o la contraseña no son correctos. Intenta de nuevo.');
      setLoading(false);
    } else {
      navigate('/admin');
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-300">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-base text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
              placeholder="tucorreo@email.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-300">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-base text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-950 border border-red-800 rounded-xl px-4 py-3">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-4 bg-white hover:bg-neutral-200 text-black text-sm font-semibold rounded-xl transition-colors disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar al panel'}
          </button>

          <Link to="/admin/recuperar" className="text-center text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
            ¿Olvidaste tu contraseña?
          </Link>
        </form>
      </div>
    </div>
  );
}
