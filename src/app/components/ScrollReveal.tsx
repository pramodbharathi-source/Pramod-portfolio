import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type AnimationVariant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'fadeIn' | 'scaleUp' | 'slideUp';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const variants: Record<AnimationVariant, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
  fadeUp: {
    hidden: { opacity: 0, transform: 'translateY(40px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeDown: {
    hidden: { opacity: 0, transform: 'translateY(-40px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  fadeLeft: {
    hidden: { opacity: 0, transform: 'translateX(-40px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  fadeRight: {
    hidden: { opacity: 0, transform: 'translateX(40px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, transform: 'scale(0.9)' },
    visible: { opacity: 1, transform: 'scale(1)' },
  },
  slideUp: {
    hidden: { opacity: 0, transform: 'translateY(60px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
};

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const { hidden, visible } = variants[variant];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? visible : hidden),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
