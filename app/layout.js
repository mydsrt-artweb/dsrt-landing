// app/layout.js
import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {/* Header global */}
        <header className="w-full px-6 py-6 flex justify-between items-center bg-gradient-to-b from-gray-900/80 to-transparent">
          <img
            src="/erasebg-transformed.png"
            alt="DSRT Logo"
            className="h-16 md:h-20"
          />
          <Link
            href="/auth/login"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition"
          >
            Login
          </Link>
        </header>

        {/* Main content dari halaman child */}
        <main>{children}</main>

        {/* Footer global */}
        <footer className="bg-gray-900 text-center md:text-left px-6 py-12 mt-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">DSRT</h3>
              <p className="text-gray-400 text-sm">
                Digital Smart Revise Technology
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/dsrt.official.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition"
              >
                Instagram
              </a>
              <a
                href="https://github.com/mydsrt-artweb/sds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition"
              >
                Github
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            &copy; 2025 DSRT. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
