import Link from 'next/link';
import { supabase } from '@/lib/supabase';

type SearchParams = Promise<{ grade?: string; page?: string }>;

export default async function TestsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { grade, page } = await searchParams;
  const gradeNum = grade ? Number(grade) : undefined;
  const currentPage = page ? Number(page) : 1;
  
  const itemsPerPage = 10;
  const from = (currentPage - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let query = supabase
    .from('quizzes')
    .select('id, title, grade', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (gradeNum) {
    query = query.eq('grade', gradeNum);
  }

  const { data: quizzes, count, error } = await query;

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-red-600">
        <p className="text-xl font-bold mb-2">Xatolik yuz berdi!</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }

  const totalPages = count ? Math.ceil(count / itemsPerPage) : 1;
  const grades = [8, 9, 11];

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Mavjud Testlar</h1>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          Jami: {count || 0} ta
        </span>
      </div>

      <div className="flex gap-2 flex-wrap bg-white p-3 rounded-xl border">
        <Link
          href="/tests"
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
            !gradeNum 
              ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Barchasi
        </Link>
        {grades.map((g) => (
          <Link
            key={g}
            href={`/tests?grade=${g}`}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
              gradeNum === g 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
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
              className="group flex justify-between items-center p-4 bg-white border rounded-xl hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {q.grade}
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-blue-700">
                  {q.title}
                </span>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-blue-500 font-medium">
                Boshlash →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {!quizzes?.length && (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed">
          <span className="text-4xl mb-3 block">📂</span>
          <p className="text-gray-500 text-lg">
            {gradeNum ? `${gradeNum}-sinf uchun testlar topilmadi.` : "Hozircha bazada testlar mavjud emas."}
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 pt-4">
          {currentPage > 1 && (
            <Link
              href={`/tests?${gradeNum ? `grade=${gradeNum}&` : ''}page=${currentPage - 1}`}
              className="px-3 py-1 border rounded-lg hover:bg-gray-50"
            >
              ← Oldingi
            </Link>
          )}
          
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg font-medium">
            {currentPage} / {totalPages}
          </span>

          {currentPage < totalPages && (
            <Link
              href={`/tests?${gradeNum ? `grade=${gradeNum}&` : ''}page=${currentPage + 1}`}
              className="px-3 py-1 border rounded-lg hover:bg-gray-50"
            >
              Keyingi →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
