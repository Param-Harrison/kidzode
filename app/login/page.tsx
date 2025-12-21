"use client";

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { db } from '@/lib/local-storage';
import { NeoButton } from "@/components/ui/neobrutalism/neo-button";
import { Terminal } from "lucide-react";

function LoginForm() {
  const [name, setName] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const user = await db.users.login(name);
      const targetPath = redirect || '/learn';
      router.push(targetPath);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-primary p-4 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] mb-6">
            <Terminal className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-black font-lexend uppercase">Welcome Back</h2>
          <p className="mt-2 text-xl text-muted-foreground">Enter your name to start coding!</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
             <input
              type="text"
              required
              className="w-full p-4 text-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <NeoButton 
            type="submit" 
            className="w-full py-8 text-xl font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            Start Coding
          </NeoButton>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center">
          <div className="bg-gray-200 w-12 h-12 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] mb-6"></div>
          <div className="bg-gray-200 h-10 w-48 mb-2"></div>
          <div className="bg-gray-200 h-6 w-64"></div>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
