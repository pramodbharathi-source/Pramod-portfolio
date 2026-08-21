import { useRef, useEffect, useState } from 'react';
import Frame34 from '../../imports/Frame34';

interface DexCoverImageProps {
  className?: string;
}

export function DexCoverImage({ className = '' }: DexCoverImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const DESIGN_WIDTH = 1280;
  const DESIGN_HEIGHT = 732;

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        // Scale to cover the container (like object-cover)
        const scaleX = containerWidth / DESIGN_WIDTH;
        const scaleY = containerHeight / DESIGN_HEIGHT;
        setScale(Math.max(scaleX, scaleY));
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          position: 'absolute',
          top: 0,
          left: '50%',
          marginLeft: -(DESIGN_WIDTH / 2),
        }}
      >
        <Frame34 />
      </div>
    </div>
  );
}