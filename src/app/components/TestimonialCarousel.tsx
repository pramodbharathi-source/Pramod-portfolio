import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === active) return;
      setIsAnimating(true);
      setTimeout(() => {
        setActive(index);
        setTimeout(() => setIsAnimating(false), 50);
      }, 250);
    },
    [active, isAnimating]
  );

  const next = useCallback(() => {
    const nextIndex = (active + 1) % testimonials.length;
    goTo(nextIndex);
  }, [active, testimonials.length, goTo]);

  const prev = useCallback(() => {
    const prevIndex = (active - 1 + testimonials.length) % testimonials.length;
    goTo(prevIndex);
  }, [active, testimonials.length, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[active];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Quote area */}
      <div className="relative flex items-center gap-4 md:gap-8">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="flex-1 min-h-[280px] flex flex-col items-center justify-center overflow-hidden">
          <div
            className="text-center transition-all duration-400 ease-out"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'scale(0.96)' : 'scale(1)',
            }}
          >
            {/* Photo & Name */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="p-1">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black ring-orange-500 shadow-lg shadow-orange-500/20"
                >
                  <ImageWithFallback
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-gray-900 dark:text-white">{current.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {current.role}
                </div>
              </div>
            </div>

            {/* Decorative quote */}
            <div className="mb-4 flex justify-center">
              <Quote className="w-7 h-7 text-orange-500/30" />
            </div>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed italic max-w-3xl">
              {current.quote}
            </p>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active
                ? 'w-8 bg-gradient-to-r from-orange-500 to-red-500'
                : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}