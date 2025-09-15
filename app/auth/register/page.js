'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if(userEmail) router.push('/dashboard');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-80 md:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none" required />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none" required />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none" required />
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition">Register</button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-400">
          <Link href="/auth/login" className="hover:text-white">Back to Login</Link>
        </div>
      </div>
    </div>
  )
}
