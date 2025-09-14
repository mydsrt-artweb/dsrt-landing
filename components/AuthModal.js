'use client';

import { useState } from 'react';

export default function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-xl p-8 w-full max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white font-bold">✕</button>
        <div className="flex justify-center gap-4 mb-6 text-white text-lg font-semibold">
          <button className={tab==='login'?'border-b-2 border-indigo-500':''} onClick={()=>setTab('login')}>Login</button>
          <button className={tab==='register'?'border-b-2 border-indigo-500':''} onClick={()=>setTab('register')}>Register</button>
          <button className={tab==='forgot'?'border-b-2 border-indigo-500':''} onClick={()=>setTab('forgot')}>Forgot</button>
        </div>
        {tab==='login' && (
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white focus:outline-none"/>
            <input type="password" placeholder="Password" className="p-3 rounded bg-gray-800 text-white focus:outline-none"/>
            <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition">Login</button>
          </form>
        )}
        {tab==='register' && (
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-3 rounded bg-gray-800 text-white focus:outline-none"/>
            <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white focus:outline-none"/>
            <input type="password" placeholder="Password" className="p-3 rounded bg-gray-800 text-white focus:outline-none"/>
            <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition">Register</button>
          </form>
        )}
        {tab==='forgot' && (
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Enter your email" className="p-3 rounded bg-gray-800 text-white focus:outline-none"/>
            <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition">Send Reset Link</button>
          </form>
        )}
      </div>
    </div>
  );
          }
