import { ReactNode } from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  maxOffset?: number;
}

// Parallax wrapper - disables transforms on mobile (< 768px) to prevent scroll shaking
export function Parallax({
  children,
  speed = -0.15,
  direction = 'vertical',
  className = '',
  maxOffset = 120,
}: ParallaxProps) {
  const { ref, style } = useParallax({ speed, direction, maxOffset });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
