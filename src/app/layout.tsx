import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Huquq Olami',
  description: 'Huquq fanidan interaktiv test va darslar platformasi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white border-b sticky top-0 z-10">
          <nav className="max-w-4xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-xl font-bold text-blue-700">
              ⚖️ Huquq Olami
            </Link>
            <div className="flex gap-4 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600">Bosh sahifa</Link>
              <Link href="/tests" className="hover:text-blue-600">Testlar</Link>
              <Link href="/lessons" className="hover:text-blue-600">Darslar</Link>
              <Link href="/results" className="hover:text-blue-600">Natijalar</Link>
              <Link href="/login" className="hover:text-blue-600">Kirish</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} Huquq Olami
        </footer>
      </body>
    </html>
  );
}
