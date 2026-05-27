import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'request' | 'new-password'>('request');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Supabase redirige aquí con #access_token en la URL cuando el usuario
    // hace clic en el link del correo de recuperación
    supabase?.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') setMode('new-password');
    });
  }, []);

  async function handleRequest(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/recuperar`,
    });
    setLoading(false);
    if (error) setError('No se pudo enviar el correo. Intenta de nuevo.');
    else setMessage('Te enviamos un correo con el enlace de recuperación. Revisa tu bandeja de entrada.');
  }

  async function handleNewPassword(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) setError('No se pudo cambiar la contraseña. Intenta de nuevo.');
    else {
      setMessage('Contraseña actualizada correctamente.');
      setTimeout(() => navigate('/admin'), 1500);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <form
          onSubmit={mode === 'request' ? handleRequest : handleNewPassword}
          className="flex flex-col gap-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-8"
        >
          {mode === 'request' ? (
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
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-300">Nueva contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-base text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
                placeholder="Mínimo 6 caracteres"
                minLength={6}
                required
              />
            </div>
          )}

          {error && (
            <div className="bg-red-950 border border-red-800 rounded-xl px-4 py-3">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {message && (
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3">
              <p className="text-neutral-300 text-sm">{message}</p>
            </div>
          )}

          {!message && (
            <button
              type="submit"
              disabled={loading}
              className="mt-2 py-4 bg-white hover:bg-neutral-200 text-black text-sm font-semibold rounded-xl transition-colors disabled:opacity-50"
            >
              {loading
                ? 'Enviando...'
                : mode === 'request'
                  ? 'Enviar correo de recuperación'
                  : 'Guardar nueva contraseña'}
            </button>
          )}

          <a href="/admin/login" className="text-center text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
            Volver al login
          </a>
        </form>
      </div>
    </div>
  );
}
