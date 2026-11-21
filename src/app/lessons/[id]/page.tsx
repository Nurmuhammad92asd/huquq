import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: lesson } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', id)
    .eq('published', true)
    .single();

  if (!lesson) notFound();

  return (
    <article className="space-y-6 bg-white p-6 rounded-2xl border">
      <Link href="/lessons" className="text-sm text-blue-600">
        ← Darslarga qaytish
      </Link>

      <header>
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
        <p className="text-sm text-gray-500 mt-1">{lesson.grade}-sinf</p>
      </header>

      {lesson.goal && (
        <section>
          <h2 className="font-semibold text-lg mb-1">Maqsad</h2>
          <p className="text-gray-700">{lesson.goal}</p>
        </section>
      )}

      {lesson.body && (
        <section>
          <h2 className="font-semibold text-lg mb-1">Mavzu</h2>
          <p className="text-gray-700 whitespace-pre-line">{lesson.body}</p>
        </section>
      )}

      {lesson.terms?.length > 0 && (
        <section>
          <h2 className="font-semibold text-lg mb-1">Asosiy tushunchalar</h2>
          <ul className="list-disc list-inside text-gray-700">
            {lesson.terms.map((t: string, i: number) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      {lesson.example && (
        <section>
          <h2 className="font-semibold text-lg mb-1">Misol</h2>
          <p className="text-gray-700 whitespace-pre-line">{lesson.example}</p>
        </section>
      )}
    </article>
  );
}
