'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselItem = {
  id: number;
  content: React.ReactNode;
};

type CarouselProps = {
  items: CarouselItem[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export function Carousel({ items, autoSlide = false, autoSlideInterval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  // Prevent default touch behavior to stop page scrolling
  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };
    
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('touchmove', preventDefault, { passive: false });
    }
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('touchmove', preventDefault);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
        ref={carouselRef}
        className="flex h-full transition-transform duration-300 ease-out touch-none"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div 
            key={item.id}
            className="w-full h-full flex-shrink-0 flex items-center justify-center"
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile/tablet, visible on desktop (lg breakpoint) */}
      <div className="hidden lg:block">
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Indicators - Hidden on mobile/tablet, visible on desktop (lg breakpoint) */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 space-x-3 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
