import { useState, useEffect } from 'react';
import { BrandMark } from './BrandMark';

interface PageLoaderProps {
  onLoadingComplete: () => void;
}

export function PageLoader({ onLoadingComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'finishing' | 'done'>('loading');
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    // Stagger element appearances - faster timing
    setTimeout(() => setShowName(true), 200);
    setTimeout(() => setShowSubtitle(true), 400);
    setTimeout(() => setShowProgress(true), 550);

    // Fast progress to complete within ~2s
    const intervals = [
      { target: 40, delay: 30, step: 5 },
      { target: 75, delay: 25, step: 4 },
      { target: 95, delay: 20, step: 3 },
      { target: 100, delay: 15, step: 10 },
    ];

    let currentProgress = 0;
    let currentPhase = 0;
    let timer: ReturnType<typeof setInterval>;

    const runPhase = () => {
      if (currentPhase >= intervals.length) {
        setPhase('finishing');
        setTimeout(() => {
          setPhase('done');
          setTimeout(onLoadingComplete, 400);
        }, 300);
        return;
      }

      const { target, delay, step } = intervals[currentPhase];
      timer = setInterval(() => {
        currentProgress = Math.min(currentProgress + step, target);
        setProgress(currentProgress);

        if (currentProgress >= target) {
          clearInterval(timer);
          currentPhase++;
          setTimeout(runPhase, 50);
        }
      }, delay);
    };

    setTimeout(runPhase, 650);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black transition-all duration-500 ${
        phase === 'finishing' ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Soft background blobs - orange/red tones */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-orange-500/15 dark:bg-orange-500/10 blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            animation: 'float1 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-red-500/15 dark:bg-red-500/10 blur-3xl"
          style={{
            bottom: '15%',
            right: '10%',
            animation: 'float2 7s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-orange-600/10 dark:bg-orange-600/8 blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'float3 5s ease-in-out infinite',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with pulse ring */}
        <div className="relative mb-8">
          {/* Pulse rings */}
          <div
            className="absolute inset-0 w-20 h-20 -m-2 rounded-2xl bg-orange-500/10"
            style={{ animation: 'pulseRing 2s ease-out infinite' }}
          />
          <div
            className="absolute inset-0 w-20 h-20 -m-2 rounded-2xl bg-red-500/10"
            style={{ animation: 'pulseRing 2s ease-out infinite 0.5s' }}
          />

          {/* Logo */}
          <div
            className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/25 relative overflow-hidden"
            style={{
              animation: 'logoAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            <BrandMark
              size={32}
              fill="white"
              className="relative z-10"
              style={{ animation: 'drawIn 0.7s ease-out 0.2s both' }}
            />
            {/* Rotating shine */}
            <div
              className="absolute inset-0"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.15), transparent)',
                animation: 'rotateSpin 3s linear infinite',
              }}
            />
          </div>
        </div>

        {/* Name with letter reveal */}
        <div
          className="text-center mb-2"
          style={{
            opacity: showName ? 1 : 0,
            transform: showName ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h1 className="text-3xl text-gray-900 dark:text-white tracking-wide" style={{ fontWeight: 700 }}>
            {'Pramod B'.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  animation: showName ? `letterPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.04}s both` : 'none',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle with slide */}
        <div
          style={{
            opacity: showSubtitle ? 1 : 0,
            transform: showSubtitle ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <p className="text-sm text-gray-400 dark:text-gray-500 tracking-[0.25em] uppercase">UX Designer</p>
        </div>

        {/* Animated dots loader */}
        <div
          className="flex items-center gap-2 mt-10"
          style={{
            opacity: showProgress ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
              style={{
                animation: showProgress ? `bounce 1.2s ease-in-out ${i * 0.15}s infinite` : 'none',
              }}
            />
          ))}
        </div>

        {/* Progress line */}
        <div
          className="mt-6 w-56"
          style={{
            opacity: showProgress ? 1 : 0,
            transform: showProgress ? 'scaleX(1)' : 'scaleX(0.8)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="h-[3px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #F97316, #EF4444, #F97316)',
                backgroundSize: '200% 100%',
                animation: 'gradientSlide 2s linear infinite',
              }}
            />
          </div>
          <div className="flex justify-center mt-3">
            <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums tracking-wider">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, 15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes logoAppear {
          0% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes drawIn {
          0% { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes rotateSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes letterPop {
          0% { opacity: 0; transform: translateY(12px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
        }
        @keyframes gradientSlide {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </div>
  );
}