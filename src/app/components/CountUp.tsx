import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

function SpinDigit({ digit, duration, delay, active }: { digit: number; duration: number; delay: number; active: boolean }) {
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => setSpinning(true), delay);
    return () => clearTimeout(timer);
  }, [active, delay]);

  // Build the column: 0-9 repeated for spin effect, ending on target digit
  const spins = 3;
  const digits: number[] = [];
  for (let s = 0; s < spins; s++) {
    for (let d = 0; d <= 9; d++) {
      digits.push(d);
    }
  }
  for (let d = 0; d <= digit; d++) {
    digits.push(d);
  }

  const totalItems = digits.length;
  const itemHeight = 1.15; // em
  const finalOffset = (totalItems - 1) * itemHeight;

  return (
    <span
      className="inline-block overflow-hidden relative"
      style={{ height: `${itemHeight}em`, width: '0.62em' }}
    >
      <span
        className="inline-flex flex-col items-center"
        style={{
          transform: spinning ? `translateY(-${finalOffset}em)` : 'translateY(0)',
          transition: spinning
            ? `transform ${duration}ms cubic-bezier(0.12, 0.8, 0.2, 1)`
            : 'none',
          lineHeight: `${itemHeight}em`,
        }}
      >
        {digits.map((d, i) => (
          <span key={i} className="block" style={{ height: `${itemHeight}em` }}>
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

export function CountUp({ end, suffix = '', duration = 4000, className = '' }: CountUpProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  const digitChars = end.toString().split('');

  return (
    <span ref={ref} className={`inline-flex items-baseline ${className}`}>
      {digitChars.map((char, i) => (
        <SpinDigit
          key={i}
          digit={parseInt(char)}
          duration={duration}
          delay={i * 200}
          active={hasStarted}
        />
      ))}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
