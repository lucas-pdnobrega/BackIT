"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      const { token } = await res.json();
      document.cookie = `token=${token}; path=/; max-age=86400`;
      router.push('/home');
    } else {
      alert('Invalid e-mail or password.');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-sm w-full space-y-6">
        <Image
          alt="BackIT"
          width={180}
          height={38}
          src="/backup.svg"
          className="mx-auto dark:invert"
        />
        <h2 className="text-center text-2xl font-bold">Sign in to your BackIT account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-500"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Need to create an account?{' '}
          <button onClick={() => {router.push('/signup')}} className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign up
          </button>
        </p>
      </div>
    </main>
  );
}
