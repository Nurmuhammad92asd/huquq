'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

type Result = {
  id: string;
  score: number;
  total: number;
  percent: number;
  created_at: string;
  quizzes: { title: string; grade: number } | null;
};

export default function ResultsPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoggedIn(false);
        setLoading(false);
        return;
      }
      setLoggedIn(true);
      const { data } = await supabase
        .from('results')
        .select('id, score, total, percent, created_at, quizzes(title, grade)')
        .eq('student_id', user.id)
        .order('created_at', { ascending: false });

      setResults((data as unknown as Result[]) ?? []);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <p className="text-gray-500">Yuklanmoqda...</p>;

  if (loggedIn === false) {
    return (
      <div className="text-center py-10 space-y-4">
        <p className="text-gray-600">Natijalarni ko'rish uchun tizimga kiring.</p>
        <Link
          href="/login"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Kirish
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mening natijalarim</h1>

      {!results.length && (
        <p className="text-gray-500">Hozircha natijalar yo'q.</p>
      )}

      <ul className="space-y-3">
        {results.map((r) => (
          <li
            key={r.id}
            className="bg-white border rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                {r.quizzes?.title ?? 'Test o\'chirilgan'}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(r.created_at).toLocaleString('uz-UZ')}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">
                {r.score} / {r.total}
              </p>
              <p
                className={`text-sm ${
                  r.percent >= 70
                    ? 'text-green-600'
                    : r.percent >= 50
                    ? 'text-yellow-600'
                    : 'text-red-600'
                }`}
              >
                {Number(r.percent).toFixed(1)}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
