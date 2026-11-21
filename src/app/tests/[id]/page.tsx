'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

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

  const [questions, setQuestions] = useState<Q[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('quiz_id', id);

      if (!error && data) setQuestions(data as Q[]);
      setLoading(false);
    }
    load();
  }, [id]);

  const answeredCount = Object.keys(answers).length;
  const score = questions.filter((q) => answers[q.id] === q.correct_index).length;
  const percent = questions.length ? (score / questions.length) * 100 : 0;

  async function saveResult() {
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Natijani saqlash uchun avval tizimga kiring.');
      setSaving(false);
      return;
    }
    const { error } = await supabase.from('results').insert({
      student_id: user.id,
      quiz_id: id,
      score,
      total: questions.length,
      percent,
    });
    setSaving(false);
    if (error) alert('Xatolik: ' + error.message);
    else setSaved(true);
  }

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Yuklanmoqda...</p>;
  }

  if (!questions.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 mb-4">Bu testda savollar yo'q.</p>
        <button
          onClick={() => router.push('/tests')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Testlarga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Test</h1>
        <span className="text-sm text-gray-500">
          {answeredCount} / {questions.length} javob berildi
        </span>
      </div>

      {questions.map((q, i) => (
        <div key={q.id} className="bg-white border rounded-xl p-4">
          <p className="font-medium mb-3">
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
                  className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition ${
                    isCorrect
                      ? 'bg-green-100 border-green-500'
                      : isWrong
                      ? 'bg-red-100 border-red-500'
                      : chosen
                      ? 'bg-blue-50 border-blue-400'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    disabled={submitted}
                    checked={chosen}
                    onChange={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: idx }))
                    }
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
          {submitted && q.explanation && (
            <p className="mt-3 text-sm text-gray-600 bg-gray-50 p-2 rounded">
              💡 {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => {
            if (answeredCount < questions.length) {
              if (!confirm('Ba\'zi savollarga javob bermadingiz. Baribir tekshirilsinmi?')) return;
            }
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700"
        >
          Tekshirish
        </button>
      ) : (
        <div className="bg-white border rounded-xl p-6 text-center space-y-4">
          <p className="text-2xl font-bold">
            Natija: {score} / {questions.length}
          </p>
          <p className="text-lg text-gray-600">{percent.toFixed(1)}%</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                setSaved(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Qayta yechish
            </button>
            <button
              onClick={saveResult}
              disabled={saving || saved}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {saved ? 'Saqlandi ✓' : saving ? 'Saqlanmoqda...' : 'Natijani saqlash'}
            </button>
            <button
              onClick={() => router.push('/tests')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Testlarga qaytish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
