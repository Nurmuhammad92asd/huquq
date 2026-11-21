'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [grade, setGrade] = useState<8 | 9 | 11>(8);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (mode === 'signup') {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage('Xatolik: ' + error.message);
        setLoading(false);
        return;
      }
      if (data.user) {
        await supabase.from('profiles').insert({
          id: data.user.id,
          full_name: fullName,
          grade,
        });
      }
      setMessage('Ro\'yxatdan o\'tdingiz. Endi tizimga kiring.');
      setMode('login');
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setMessage('Xatolik: ' + error.message);
    else router.push('/tests');
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/');
  }

  return (
    <div className="max-w-md mx-auto bg-white border rounded-2xl p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">
        {mode === 'login' ? 'Tizimga kirish' : 'Ro\'yxatdan o\'tish'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        {mode === 'signup' && (
          <>
            <input
              type="text"
              placeholder="To'liq ismingiz"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full border rounded-lg p-2"
            />
            <select
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value) as 8 | 9 | 11)}
              className="w-full border rounded-lg p-2"
            >
              <option value={8}>8-sinf</option>
              <option value={9}>9-sinf</option>
              <option value={11}>11-sinf</option>
            </select>
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded-lg p-2"
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Kuting...' : mode === 'login' ? 'Kirish' : 'Ro\'yxatdan o\'tish'}
        </button>
      </form>

      {message && <p className="text-sm text-center text-red-600">{message}</p>}

      <div className="text-center text-sm">
        {mode === 'login' ? (
          <button
            onClick={() => setMode('signup')}
            className="text-blue-600 hover:underline"
          >
            Hisobingiz yo'qmi? Ro'yxatdan o'ting
          </button>
        ) : (
          <button
            onClick={() => setMode('login')}
            className="text-blue-600 hover:underline"
          >
            Hisobingiz bormi? Kirish
          </button>
        )}
      </div>

      <div className="text-center pt-2 border-t">
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-red-600"
        >
          Chiqish
        </button>
      </div>
    </div>
  );
}
