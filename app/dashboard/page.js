'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    if(!email) {
      router.push('/');
    } else {
      setUserName(name || email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    router.push('/');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full px-6 py-6 flex justify-between items-center bg-gray-900 shadow">
        <h1 className="text-2xl font-bold">DSRT Dashboard</h1>
        <button onClick={handleLogout} className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-full shadow-lg transition">Logout</button>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome, {userName} 🎉</h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
          This is your DSRT dashboard. Manage your activities, explore features, and enjoy the smart digital experience.
        </p>
      </main>
    </div>
  )
}
