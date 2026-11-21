
import Link from "next/link";

const features = [
  {
    icon: "⚖️",
    title: "Huquqiy bilimlar",
    description: "Huquq fanining muhim mavzularini sodda va tushunarli o‘rganing.",
    link: "/lessons",
    color: "blue",
  },
  {
    icon: "📝",
    title: "Interaktiv testlar",
    description: "Bilimingizni sinab ko‘ring va natijalaringizni tahlil qiling.",
    link: "/tests",
    color: "gold",
  },
  {
    icon: "🏆",
    title: "Natijalar va yutuqlar",
    description: "O‘z rivojlanishingizni kuzating va yangi marralarni zabt eting.",
    link: "/results",
    color: "purple",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071426] text-white">
      <header className="border-b border-white/10 bg-[#0A1B30]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-2xl text-[#071426]">
              ⚖
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">HUQUQ OLAMI</h1>
              <p className="text-xs text-slate-400">Bilim. Adolat. Taraqqiyot.</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link href="/" className="hover:text-amber-400">Bosh sahifa</Link>
            <Link href="/tests" className="hover:text-amber-400">Testlar</Link>
            <Link href="/lessons" className="hover:text-amber-400">Darslar</Link>
            <Link href="/results" className="hover:text-amber-400">Natijalar</Link>
          </nav>

          <Link
            href="/login"
            className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-[#071426] transition hover:bg-amber-300"
          >
            Kirish →
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
              <span>✦</span> HUQUQIY TA'LIMNING YANGI AVLODI
            </div>

            <h2 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Huquqni
              <span className="block text-amber-400">bilish —</span>
              kelajakni
              <span className="block">anglashdir.</span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              8-, 9- va 11-sinf o‘quvchilari uchun interaktiv huquqiy
              ta'lim platformasi. O‘rganing, bilimingizni sinang va
              o‘z kelajagingizni yarating.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/tests"
                className="rounded-xl bg-amber-400 px-8 py-4 font-bold text-[#071426] shadow-lg shadow-amber-400/20 transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Testni boshlash →
              </Link>
              <Link
                href="/lessons"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:border-amber-400 hover:text-amber-400"
              >
                Darslarni ko‘rish
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold text-amber-400">8–11</p>
                <p className="text-sm text-slate-500">Sinf darajalari</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-amber-400">24/7</p>
                <p className="text-sm text-slate-500">O‘rganish imkoniyati</p>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-amber-400">100%</p>
                <p className="text-sm text-slate-500">Bilim sari intilish</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-[#142B46] to-[#0B192B] p-10 shadow-2xl">
              <div className="text-center">
                <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/5 text-8xl text-amber-400">
                  ⚖️
                </div>
                <h3 className="mt-8 text-2xl font-bold">Adolat bilimdan boshlanadi</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Har bir o‘quvchi huquqiy bilimga ega bo‘lishi kerak.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <span className="text-2xl">📚</span>
                  <p className="mt-2 text-sm font-semibold">Darslar</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <span className="text-2xl">🎯</span>
                  <p className="mt-2 text-sm font-semibold">Testlar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A1B30] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-amber-400">
              Platforma imkoniyatlari
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Bilim olishning yangi usuli
            </h2>
            <p className="mt-4 text-slate-400">
              Bir platformada o‘rganish, mashq qilish va natijalarni kuzatish.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.link}
                className="group rounded-2xl border border-white/10 bg-[#10243C] p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-400/50 hover:bg-[#142B46]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10 text-4xl">
                  {feature.icon}
                </div>
                <h3 className="mt-7 text-xl font-bold group-hover:text-amber-400">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
                <p className="mt-7 font-semibold text-amber-400">
                  Batafsil ko‘rish →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#142B46] to-[#102039] px-8 py-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            Bugun boshlang
          </p>
          <h2 className="mt-5 text-3xl font-black md:text-5xl">
            Bilimingizni sinashga tayyormisiz?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Huquqiy savodxonligingizni oshiring va o‘z imkoniyatlaringizni kashf eting.
          </p>
          <Link
            href="/tests"
            className="mt-9 inline-flex rounded-xl bg-amber-400 px-9 py-4 font-bold text-[#071426] transition hover:bg-amber-300"
          >
            Testlarni boshlash →
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050F1D] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Huquq Olami. Barcha huquqlar himoyalangan.</p>
          <p className="text-amber-400">Bilim. Adolat. Taraqqiyot.</p>
        </div>
      </footer>
    </main>
  );
}
