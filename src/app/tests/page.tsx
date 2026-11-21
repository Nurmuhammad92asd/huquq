'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

// Savol turi
type Q = {
  id: string;
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
};

export default function QuizPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  // Holatlar (States)
  const [questions, setQuestions] = useState<Q[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Savollarni yuklash
  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('quiz_id', id);

      if (error) {
        setErrorMsg(error.message);
      } else if (data) {
        setQuestions(data as Q[]);
      }
      setLoading(false);
    }
    load();
  }, [id]);

  const answeredCount = Object.keys(answers).length;
  const score = questions.filter((q) => answers[q.id] === q.correct_index).length;
  const percent = questions.length ? (score / questions.length) * 100 : 0;

  // NATIJANI SAQLASH HARAKATI (Serverga yuborish)
  async function saveResult() {
    setSaving(true);
    setErrorMsg('');

    try {
      // 1. Foydalanuvchini tekshirish
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setErrorMsg('Natijani saqlash uchun avval tizimga kiring!');
        setSaving(false);
        return;
      }

      // 2. Bazaga yuborish
      const { error } = await supabase.from('results').insert({
        student_id: user.id,
        quiz_id: id,
        score: score,
        total: questions.length,
        percent: percent,
      });

      if (error) throw error;

      // 3. Muvaffaqiyatli saqlansa
      setSaved(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Saqlashda xatolik yuz berdi');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Savollar yuklanmoqda...</p>;
  }

  if (!questions.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 mb-4">Bu testda savollar yo'q yoki test o'chirilgan.</p>
        <button onClick={() => router.push('/tests')} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Testlarga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border">
        <h1 className="text-2xl font-bold">Test yechish</h1>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {answeredCount} / {questions.length} javob berildi
        </span>
      </div>

      {/* Savollar ro'yxati */}
      {questions.map((q, i) => (
        <div key={q.id} className="bg-white border rounded-xl p-5 shadow-sm">
          <p className="font-semibold text-lg mb-4">
            {i + 1}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((opt, idx) => {
              const chosen = answers[q.id] === idx;
              const isCorrect = submitted && idx === q.correct_index;
              const isWrong = submitted && chosen && idx !== q.correct_index;
              
              return (
                <label
                  key={idx}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                    isCorrect
                      ? 'bg-green-50 border-green-500 text-green-800'
                      : isWrong
                      ? 'bg-red-50 border-red-500 text-red-800'
                      : chosen
                      ? 'bg-blue-50 border-blue-400 text-blue-800'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    disabled={submitted}
                    checked={chosen}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>{opt}</span>
                  {isCorrect && <span className="ml-auto text-green-600">✓</span>}
                  {isWrong && <span className="ml-auto text-red-600">✗</span>}
                </label>
              );
            })}
          </div>
          
          {submitted && q.explanation && (
            <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100">
              💡 <strong>Izoh:</strong> {q.explanation}
            </div>
          )}
        </div>
      ))}

      {/* Xatolik xabari */}
      {errorMsg && (
        <div className="p-4 bg-red-100 text-red-700 rounded-xl border border-red-200">
          ⚠️ {errorMsg}
        </div>
      )}

      {/* Pastki harakat tugmalari */}
      {!submitted ? (
        <button
          onClick={() => {
            if (answeredCount < questions.length) {
              if (!confirm('Ba\'zi savollarga javob bermadingiz. Baribir tekshirilsinmi?')) return;
            }
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg"
        >
          Javoblarni tekshirish
        </button>
      ) : (
        <div className="bg-white border rounded-xl p-6 text-center space-y-6 shadow-md">
          <div>
            <p className="text-gray-500 font-medium mb-1">Sizning natijangiz</p>
            <p className="text-5xl font-black text-blue-700">
              {score} <span className="text-2xl text-gray-400">/ {questions.length}</span>
            </p>
            <p className={`text-xl font-bold mt-2 ${percent >= 70 ? 'text-green-600' : percent >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
              {percent.toFixed(1)}% {percent >= 70 ? 'Ajoyib!' : percent >= 50 ? 'Yaxshi!' : 'Ko\'proq o\'qish kerak'}
            </p>
          </div>

          <div className="flex gap-3 justify-center flex-wrap pt-4 border-t">
            <button
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                setSaved(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
            >
              🔄 Qayta yechish
            </button>
            
            <button
              onClick={saveResult}
              disabled={saving || saved}
              className={`px-6 py-2.5 font-medium rounded-lg transition shadow-sm ${
                saved 
                  ? 'bg-green-100 text-green-700 cursor-not-allowed' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {saved ? '✓ Saqlandi' : saving ? '⏳ Saqlanmoqda...' : '💾 Natijani saqlash'}
            </button>
            
            <button
              onClick={() => router.push('/tests')}
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Testlarga qaytish
            </button>
          </div>
          
          {saved && (
            <p className="text-sm text-green-600 mt-2">
              Natijangiz muvaffaqiyatli saqlandi. <a href="/results" className="underline font-medium">Natijalarni ko'rish</a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
