'use client';

import { useState, useEffect } from 'react';
import AuthModal from '../components/AuthModal';
import Link from 'next/link';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    import('../js/bg').then(module => module.initBackground());
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Canvas background */}
      <canvas id="bg" className="fixed inset-0 z-0"></canvas>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <img src="/assets/logo.png" alt="DSRT Logo" className="h-16 md:h-20" />
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-20 z-10 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">DSRT</h1>
        <p className="text-xl md:text-2xl mb-8 text-white">Digital Smart Revise Technology</p>
        <p className="text-gray-300 max-w-3xl text-center text-lg md:text-xl leading-relaxed mb-8">
          DSRT is a cutting-edge digital platform designed to revolutionize the way individuals and businesses approach learning, revision, and workflow optimization. By integrating advanced AI-driven tools with a user-friendly interface, DSRT ensures that your tasks are performed efficiently, securely, and intelligently, delivering measurable productivity gains and seamless digital experiences.
        </p>
        <Link href="#features">
          <a className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition">
            Get Started
          </a>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
              <i className="fas fa-bolt text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-white">Fast & Smart</h3>
              <p className="text-gray-400">Experience high-speed performance with optimized smart features.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
              <i className="fas fa-lock text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-white">Secure</h3>
              <p className="text-gray-400">Your data is protected with industry-leading security protocols.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
              <i className="fas fa-mobile-alt text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2 text-white">Mobile Friendly</h3>
              <p className="text-gray-400">Optimized for all devices: mobile, tablet, and desktop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center md:text-left px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">DSRT</h3>
            <p className="text-gray-400 text-sm">Digital Smart Revise Technology</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/dsrt.official.2025" target="_blank">
              <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://github.com/mydsrt-artweb/sds" target="_blank">
              <img src="/assets/icons/github.svg" alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-8">&copy; 2025 DSRT. All rights reserved.</p>
      </footer>

      {/* Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
