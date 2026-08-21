import { useState, useRef, useEffect } from 'react';
import { Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from './Navbar';

interface PasswordGateProps {
  onSuccess: () => void;
  projectName?: string;
}

const CORRECT_PASSWORD = 'dex2024';

export function PasswordGate({ onSuccess, projectName = 'DEX Case Study' }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Password Form */}
      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div
          className={`w-full max-w-md transition-transform ${shake ? 'animate-shake' : ''}`}
        >
          {/* Lock Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Lock className="w-9 h-9 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">{projectName}</h1>
            <p className="text-gray-500 dark:text-gray-400">
              This case study is password protected due to NDA restrictions. Please enter the password to view.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Enter password"
                className={`w-full px-5 py-4 bg-gray-100 dark:bg-gray-900 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all pr-12 ${
                  error
                    ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && (
              <p className="text-red-400 text-sm flex items-center gap-1.5">
                <span className="w-1 h-1 bg-red-400 rounded-full" />
                Incorrect password. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <ShieldCheck className="w-5 h-5" />
              Unlock Case Study
            </button>
          </form>

          {/* Hint */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 dark:text-gray-600 text-sm">
              Request access by contacting{' '}
              <a href="mailto:Pramodbharathi@gmail.com" className="text-orange-400 hover:text-orange-300 transition underline">
                Pramodbharathi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
          20%, 40%, 60%, 80% { transform: translateX(6px); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>
    </div>
  );
}