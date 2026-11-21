import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default async function TestsPage({
  searchParams,
}: {
  searchParams: Promise<{ grade?: string }>;
}) {
  const { grade } = await searchParams;
  const gradeNum = grade ? Number(grade) : undefined;

  let query = supabase
    .from('quizzes')
    .select('id, title, grade')
    .order('created_at', { ascending: false });

  if (gradeNum) query = query.eq('grade', gradeNum);

  const { data: quizzes } = await query;

  const grades = [8, 9, 11];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Testlar</h1>

      <div className="flex gap-2 flex-wrap">
        <Link
          href="/tests"
          className={`px-4 py-2 rounded-lg border text-sm ${
            !gradeNum ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'
          }`}
        >
          Hammasi
        </Link>
        {grades.map((g) => (
          <Link
            key={g}
            href={`/tests?grade=${g}`}
            className={`px-4 py-2 rounded-lg border text-sm ${
              gradeNum === g ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'
            }`}
          >
            {g}-sinf
          </Link>
        ))}
      </div>

      <ul className="space-y-3">
        {quizzes?.map((q) => (
          <li key={q.id}>
            <Link
              href={`/tests/${q.id}`}
              className="flex justify-between items-center p-4 bg-white border rounded-xl hover:bg-blue-50"
            >
              <span className="font-semibold">{q.title}</span>
              <span className="text-sm text-gray-500">{q.grade}-sinf</span>
            </Link>
          </li>
        ))}
        {!quizzes?.length && (
          <p className="text-gray-500">Bu bo'limda hozircha testlar yo'q.</p>
        )}
      </ul>
    </div>
  );
}
