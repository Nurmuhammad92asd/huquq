import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default async function HomePage() {
  const { count: quizCount } = await supabase
    .from('quizzes')
    .select('*', { count: 'exact', head: true });

  const { count: lessonCount } = await supabase
    .from('lessons')
    .select('*', { count: 'exact', head: true })
    .eq('published', true);

  return (
    <div className="space-y-10">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Huquq Olami
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Huquq fanidan interaktiv testlar va darslar. 8, 9 va 11-sinflar uchun.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link
            href="/tests"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700"
          >
            Testni boshlash
          </Link>
          <Link
            href="/lessons"
            className="bg-white border px-6 py-3 rounded-xl font-medium hover:bg-gray-50"
          >
            Darslarni ko'rish
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-2xl border text-center">
          <p className="text-4xl font-bold text-blue-700">{quizCount ?? 0}</p>
          <p className="text-gray-600 mt-1">Mavjud testlar</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border text-center">
          <p className="text-4xl font-bold text-green-700">{lessonCount ?? 0}</p>
          <p className="text-gray-600 mt-1">Nashr etilgan darslar</p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl border">
        <h2 className="text-xl font-semibold mb-3">Qanday ishlaydi?</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Ro'yxatdan o'ting yoki tizimga kiring.</li>
          <li>Sinvingizga mos testni tanlang.</li>
          <li>Savollarga javob bering va natijani darhol ko'ring.</li>
          <li>Xatolaringiz uchun izohlarni o'qing.</li>
        </ol>
      </section>
    </div>
  );
}
