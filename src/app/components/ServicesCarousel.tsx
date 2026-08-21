import { useState, useRef, useEffect, useCallback, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const isPaused = useRef(false);

  // Calculate visible cards and total positions based on screen width
  const getCardsPerView = useCallback(() => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 4;
  }, []);

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const totalPositions = Math.max(1, services.length - cardsPerView + 1);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      setCurrentPosition((prev) => Math.min(prev, Math.max(0, services.length - newCardsPerView)));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getCardsPerView, services.length]);

  const scrollToPosition = useCallback((position: number, smooth = true) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[0] as HTMLElement;
    if (!card) return;
    const gap = 16; // gap-4
    const cardWidth = card.offsetWidth + gap;
    container.scrollTo({ left: position * cardWidth, behavior: smooth ? 'smooth' : 'auto' });
  }, []);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused.current) return;
      setCurrentPosition((prev) => {
        const next = prev >= totalPositions - 1 ? 0 : prev + 1;
        const isWrapping = next === 0;
        scrollToPosition(next, !isWrapping);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [scrollToPosition, totalPositions]);

  const scrollTo = (direction: 'left' | 'right') => {
    isPaused.current = true;
    setCurrentPosition((prev) => {
      const next = direction === 'left'
        ? (prev <= 0 ? totalPositions - 1 : prev - 1)
        : (prev >= totalPositions - 1 ? 0 : prev + 1);
      const isWrapping = (direction === 'right' && next === 0) || (direction === 'left' && next === totalPositions - 1);
      scrollToPosition(next, !isWrapping);
      return next;
    });
    setTimeout(() => { isPaused.current = false; }, 5000);
  };

  const handleDotClick = (dotIndex: number) => {
    isPaused.current = true;
    setCurrentPosition(dotIndex);
    scrollToPosition(dotIndex);
    setTimeout(() => { isPaused.current = false; }, 5000);
  };

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isPaused.current = true;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      scrollTo(diff > 0 ? 'right' : 'left');
    }
    setTimeout(() => { isPaused.current = false; }, 5000);
  };

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Services I provide to bring your ideas to life</p>
        </div>

        <div className="relative group">
          {/* Left Arrow - hidden on mobile */}
          <button
            onClick={() => scrollTo('left')}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow - hidden on mobile */}
          <button
            onClick={() => scrollTo('right')}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-1 py-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => { isPaused.current = true; }}
            onMouseLeave={() => { isPaused.current = false; }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] min-w-full sm:min-w-[calc(50%-8px)] lg:min-w-[calc(25%-12px)] flex-shrink-0 bg-white dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-500 dark:text-orange-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: totalPositions }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                currentPosition === index
                  ? 'w-8 h-3 bg-gradient-to-r from-orange-500 to-red-500'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}