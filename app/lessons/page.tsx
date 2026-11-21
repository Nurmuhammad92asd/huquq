
import Link from "next/link";

const grades = [
  {
    grade: "8-SINF",
    title: "Huquqiy bilimlar",
    icon: "⚖️",
    description: "Huquq va davlat haqidagi boshlang‘ich bilimlar.",
    color: "border-blue-400/30",
  },
  {
    grade: "9-SINF",
    title: "Konstitutsiyaviy huquq",
    icon: "📘",
    description: "Konstitutsiya, inson huquqlari va erkinliklari.",
    color: "border-amber-400/30",
  },
  {
    grade: "11-SINF",
    title: "Huquqiy munosabatlar",
    icon: "🏛️",
    description: "Huquqiy tizim va qonunchilik asoslari.",
    color: "border-purple-400/30",
  },
];

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-[#071426] text-white">
      <header className="border-b border-white/10 bg-[#0A1B30]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-2xl text-[#071426]">⚖</div>
            <div>
              <h1 className="font-bold tracking-wide">HUQUQ OLAMI</h1>
              <p className="text-xs text-slate-400">Bilim. Adolat. Taraqqiyot.</p>
            </div>
          </Link>

          <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
            <Link href="/">Bosh sahifa</Link>
            <Link href="/tests">Testlar</Link>
            <Link href="/lessons" className="text-amber-400">Darslar</Link>
            <Link href="/results">Natijalar</Link>
          </nav>

          <Link href="/login" className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-[#071426]">
            Kirish →
          </Link>
        </div>
      </header>

      <section className="border-b border-white/10 bg-gradient-to-br from-[#142B46] to-[#071426]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-400">
            ✦ BILIM OLAMI
          </span>

          <h2 className="mt-8 text-4xl font-black md:text-6xl">
            Darslar
            <span className="block text-amber-400">akademiyasi</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Huquq fanini tizimli o‘rganing. Mavzularni o‘zlashtiring,
            bilimlaringizni mustahkamlang va kelajagingizga investitsiya qiling.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <span className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">📚 Mavzuli darslar</span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">🎓 8–11-sinflar</span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">📝 Bilim nazorati</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">Ta’lim yo‘nalishlari</p>
          <h2 className="mt-3 text-3xl font-black">Sinfingizni tanlang</h2>
          <p className="mt-3 text-slate-400">O‘zingizga mos darslarni tanlab o‘rganishni boshlang.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {grades.map((item) => (
            <div key={item.grade} className={`rounded-3xl border ${item.color} bg-[#10243c] p-8 transition hover:-translate-y-2 hover:bg-[#142B46]`}>
              <div className="flex items-center justify-between">
                <span className="text-5xl">{item.icon}</span>
                <span className="rounded-full bg-white/5 px-4 py-2 text-sm font-bold text-amber-400">{item.grade}</span>
              </div>

              <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 min-h-16 leading-7 text-slate-400">{item.description}</p>

              <Link
                href={`/lessons?grade=${item.grade.replace("-SINF", "")}`}
                className="mt-8 flex items-center justify-between rounded-xl bg-amber-400 px-5 py-4 font-bold text-[#071426] hover:bg-amber-300"
              >
                Darslarni ko‘rish <span className="text-xl">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#142B46] to-[#102039] p-10 text-center md:p-14">
          <div className="text-5xl">🎓</div>
          <h2 className="mt-6 text-3xl font-black">Bilim — eng katta boylik!</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Har kuni yangi bilim oling. Huquqiy savodxonligingizni
            oshiring va o‘z imkoniyatlaringizni kengaytiring.
          </p>
          <Link href="/tests" className="mt-8 inline-flex rounded-xl bg-amber-400 px-8 py-4 font-bold text-[#071426] hover:bg-amber-300">
            Bilimimni sinayman →
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050F1D] px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Huquq Olami. Barcha huquqlar himoyalangan.
      </footer>
    </main>
  );
}
