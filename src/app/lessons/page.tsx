import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default async function LessonsPage() {
  const { data: lessons } = await supabase
    .from('lessons')
    .select('id, title, grade, goal')
    .eq('published', true)
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Darslar</h1>
      <ul className="space-y-3">
        {lessons?.map((l) => (
          <li key={l.id}>
            <Link
              href={`/lessons/${l.id}`}
              className="block p-4 bg-white border rounded-xl hover:bg-blue-50"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{l.title}</span>
                <span className="text-sm text-gray-500">{l.grade}-sinf</span>
              </div>
              {l.goal && <p className="text-sm text-gray-600 mt-1">{l.goal}</p>}
            </Link>
          </li>
        ))}
        {!lessons?.length && (
          <p className="text-gray-500">Hozircha darslar yo'q.</p>
        )}
      </ul>
    </div>
  );
}
