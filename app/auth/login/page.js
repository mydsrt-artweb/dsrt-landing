'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if(userEmail) router.push('/dashboard');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if(email === storedEmail && password === storedPassword){
      router.push('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl w-80 md:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition">Login</button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-400">
          <Link href="/auth/register" className="hover:text-white">Register</Link> | 
          <Link href="/auth/forgot" className="hover:text-white">Forgot Password?</Link>
        </div>
      </div>
    </div>
  )
}
