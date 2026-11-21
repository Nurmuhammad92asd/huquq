
import Link from "next/link";

const grades = [
  {
    grade: "8-SINF",
    title: "Huquqiy bilimlar asoslari",
    description: "Huquq, davlat, jamiyat va qonunchilik bo‘yicha bilimlaringizni sinang.",
    icon: "⚖️",
    color: "from-blue-500/20 to-blue-900/10",
    border: "border-blue-400/30",
  },
  {
    grade: "9-SINF",
    title: "Konstitutsiyaviy huquq",
    description: "Konstitutsiya, fuqarolik huquqlari va majburiyatlarini o‘rganing.",
    icon: "📘",
    color: "from-amber-500/20 to-amber-900/10",
    border: "border-amber-400/30",
  },
  {
    grade: "11-SINF",
    title: "Huquqiy munosabatlar",
    description: "Qonunchilik, huquqiy munosabatlar va zamonaviy huquqiy bilimlarni mustahkamlang.",
    icon: "🏛️",
    color: "from-purple-500/20 to-purple-900/10",
    border: "border-purple-400/30",
  },
];

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-[#071426] text-white">
      <header className="border-b border-white/10 bg-[#0A1B30]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-2xl text-[#071426]">
              ⚖
            </div>
            <div>
              <h1 className="font-bold tracking-wide">HUQUQ OLAMI</h1>
              <p className="text-xs text-slate-400">Bilim. Adolat. Taraqqiyot.</p>
            </div>
          </Link>

          <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
            <Link href="/" className="hover:text-amber-400">Bosh sahifa</Link>
            <Link href="/tests" className="text-amber-400">Testlar</Link>
            <Link href="/lessons" className="hover:text-amber-400">Darslar</Link>
            <Link href="/results" className="hover:text-amber-400">Natijalar</Link>
          </nav>

          <Link href="/login" className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-[#071426]">
            Kirish →
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#10243c] to-[#071426]">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-400">
              ✦ BILIMINGIZNI SINAB KO‘RING
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
              Testlar
              <span className="block text-amber-400">akademiyasi</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Sinfingizga mos testlarni tanlang, huquqiy bilimlaringizni
              mustahkamlang va o‘z natijalaringizni yaxshilang.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                📚 8–11-sinflar
              </span>
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                🎯 Interaktiv testlar
              </span>
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                🏆 Natijalar tahlili
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              O‘quv yo‘nalishlari
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Sinfingizni tanlang
            </h2>
            <p className="mt-3 text-slate-400">
              O‘zingizga mos bilim darajasidan boshlang.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {grades.map((item) => (
            <div
              key={item.grade}
              className={`rounded-3xl border ${item.border} bg-gradient-to-br ${item.color} p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-4xl">
                  {item.icon}
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-amber-400">
                  {item.grade}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 min-h-20 leading-7 text-slate-400">
                {item.description}
              </p>

              <Link
                href={`/tests?grade=${item.grade.replace("-SINF", "")}`}
                className="mt-8 flex items-center justify-between rounded-xl bg-amber-400 px-5 py-4 font-bold text-[#071426] transition hover:bg-amber-300"
              >
                Testlarni ko‘rish
                <span className="text-xl">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-[#10243c] p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="text-4xl">🏆</span>
              <h2 className="mt-5 text-3xl font-black">
                Har bir test — yangi imkoniyat!
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                O‘z bilimlaringizni muntazam tekshiring. Natijalaringizni
                tahlil qiling va huquqiy savodxonligingizni oshiring.
              </p>
              <Link
                href="/results"
                className="mt-7 inline-flex rounded-xl border border-amber-400/40 px-6 py-3 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-[#071426]"
              >
                Natijalarimni ko‘rish →
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="flex h-56 w-56 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/5 text-8xl">
                ⚖️
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050F1D] px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Huquq Olami. Bilim. Adolat. Taraqqiyot.
      </footer>
    </main>
  );
}
