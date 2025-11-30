'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, Hash, ArrowRight, User } from 'lucide-react';
import { Logo } from '@/components/logo';

type Student = {
  id: number;
  displayName: string;
  avatarUrl?: string;
  hasPin: boolean;
};

export default function StudentLoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'code' | 'select' | 'pin'>('code');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [classCode, setClassCode] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [pin, setPin] = useState('');

  async function handleCodeSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/student-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ classCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid class code');
      }

      setStudents(data.students);
      setStep('select');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleStudentSelect(student: Student) {
    setSelectedStudent(student);
    if (student.hasPin) {
      setStep('pin');
    } else {
      // No PIN required, login directly
      handleLogin(student.id);
    }
  }

  async function handleLogin(studentId: number, studentPin?: string) {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/student-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          studentId, 
          pin: studentPin,
          classCode // Include classCode for validation context if needed
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      router.push('/learn');
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  async function handlePinSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!selectedStudent) return;
    handleLogin(selectedStudent.id, pin);
  }

  return (
    <div className="bg-card border-2 border-border shadow-neo rounded-xl p-8 animate-in fade-in zoom-in duration-300 min-h-[400px] flex flex-col">
      <div className="text-center mb-8">
        <div className="inline-block mb-4">
          <Logo size="lg" className="justify-center" />
        </div>
        <h1 className="text-2xl font-bold font-lexend">Student Login</h1>
        <p className="text-muted-foreground mt-2">
          {step === 'code' && 'Enter your class code to start'}
          {step === 'select' && 'Who are you?'}
          {step === 'pin' && `Hello ${selectedStudent?.displayName}!`}
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {step === 'code' && (
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <div>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={classCode}
                  onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                  required
                  maxLength={6}
                  className="w-full pl-10 pr-4 py-4 text-2xl font-mono text-center tracking-widest uppercase rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="CODE"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-destructive/10 text-destructive text-sm font-bold rounded-lg border border-destructive/20 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || classCode.length < 6}
              className="w-full py-3 px-4 bg-accent text-accent-foreground font-bold rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Next <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}

        {step === 'select' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 max-h-[300px] overflow-y-auto p-2">
              {students.map((student) => (
                <button
                  key={student.id}
                  onClick={() => handleStudentSelect(student)}
                  className="flex flex-col items-center p-4 rounded-xl border-2 border-border bg-background hover:bg-muted transition-all hover:-translate-y-1 hover:shadow-neo"
                >
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-3">
                    {student.avatarUrl ? (
                      <img src={student.avatarUrl} alt={student.displayName} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <User className="w-8 h-8 text-secondary" />
                    )}
                  </div>
                  <span className="font-bold text-sm text-center truncate w-full">
                    {student.displayName}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep('code')}
              className="w-full py-2 text-sm text-muted-foreground hover:text-foreground font-bold"
            >
              Back to Code
            </button>
          </div>
        )}

        {step === 'pin' && (
          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Enter your 4-digit PIN</p>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
                maxLength={4}
                autoFocus
                className="w-32 mx-auto py-3 text-3xl font-mono text-center tracking-[0.5em] rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="••••"
              />
            </div>

            {error && (
              <div className="p-3 bg-destructive/10 text-destructive text-sm font-bold rounded-lg border border-destructive/20 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || pin.length < 4}
              className="w-full py-3 px-4 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Start Learning'
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setStep('select');
                setPin('');
                setError('');
              }}
              className="w-full py-2 text-sm text-muted-foreground hover:text-foreground font-bold"
            >
              Back to Students
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
