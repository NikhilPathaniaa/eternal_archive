import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "The Good Karma Project",
    subtitle: "Vedic Wisdom Meets Modern Science",
    description:
      "Explore how ancient sacred sciences influence creativity, human energy, and the modern world. A movement to uplift collective consciousness.",
    icon: "✨",
  },
  {
    id: 2,
    title: "Timeless Symbols, Modern Purpose",
    subtitle: "Sacred Geometry For Creative Minds",
    description:
      "We use ancient geometric structures, yantras, and vibrational patterns to enhance clarity, focus, and energetic alignment.",
    icon: "🕉️",
  },
  {
    id: 3,
    title: "The Future of Spiritual Design",
    subtitle: "Combining Art, Energy & Intention",
    description:
      "A new approach to creativity—balanced between tradition and innovation—designed to elevate your inner potential.",
    icon: "🌟",
  },
];

const Hero1 = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [current, isAnimating]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rich golden gradient background */}
      <div className="absolute inset-0 bg-[#fcd24d]" />

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16 w-full py-20">

        {/* Content wrapper */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center overflow-hidden">

          {/* Left side - Text content */}
          <div className="space-y-10 md:space-y-12">
            <div
              key={`content-${slide.id}`}
              className="space-y-8 animate-slideIn"
              style={{
                animation: current > 0 ? 'slideInLeft 0.8s ease-out' : 'slideInRight 0.8s ease-out'
              }}
            >
              {/* Icon and Subtitle */}
              <div className="space-y-4">
                <div className="text-6xl">{slide.icon}</div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-full" />
                  <span className="text-sm font-bold tracking-widest uppercase text-black">
                    {slide.subtitle}
                  </span>
                </div>
              </div>

              {/* Main title */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-black">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-2xl font-semibold">
                {slide.description}
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <button className="group relative px-10 py-5 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-3xl">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 transition-all duration-300 group-hover:shadow-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="relative flex items-center gap-3 text-lg">
                    Begin Your Journey
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </button>
              </div>
            </div>

            {/* Carousel controls */}
            <div className="flex items-center gap-8 pt-12 border-t border-yellow-400/30">
              {/* Indicator dots */}
              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="group relative transition-all duration-500"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div
                      className={`rounded-full transition-all duration-500 ${
                        index === current ? 'w-12 h-3' : 'w-3 h-3'
                      } bg-gradient-to-r from-yellow-400 to-amber-500`}
                      style={{
                        opacity: index === current ? 1 : 0.3,
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Counter */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-black">{String(current + 1).padStart(2, '0')}</span>
                <span className="text-yellow-600">/</span>
                <span className="text-lg text-black/60 font-bold">{String(slides.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Right side - Spiritual Visual */}
          <div className="relative h-[500px] md:h-[650px] flex items-center justify-center perspective overflow-hidden">

            {/* Decorative mandala-inspired rings */}
            <div
              key={`visual-${slide.id}`}
              className="relative w-full h-full animate-fadeIn"
              style={{
                animation: current > 0 ? 'slideInLeft 0.8s ease-out' : 'slideInRight 0.8s ease-out'
              }}
            >
              {/* Outer glowing circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border-3 border-yellow-300/40 animate-pulse-slow shadow-2xl" style={{
                  boxShadow: '0 0 80px rgba(250, 204, 21, 0.3), inset 0 0 80px rgba(250, 204, 21, 0.1)'
                }} />
              </div>

              {/* Rotating golden ring */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                <div className="w-80 h-80 rounded-full border-2 border-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 opacity-60"
                  style={{
                    borderImage: 'linear-gradient(135deg, #fcd34d, #f59e0b, #fbbf24) 1',
                  }}
                />
              </div>

              {/* Inner slower rotating ring */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin-reverse">
                <div className="w-64 h-64 rounded-full border-2 border-yellow-200/40" />
              </div>

              {/* Floating spiritual dots in orbits */}
              {[0, 120, 240].map((angle, i) => (
                <div
                  key={`dot-${i}`}
                  className="absolute top-1/2 left-1/2 -ml-3 -mt-3 w-6 h-6 rounded-full shadow-lg animate-float"
                  style={{
                    background: `radial-gradient(circle, #fcd34d, #f59e0b)`,
                    boxShadow: '0 0 20px rgba(250, 204, 21, 0.8)',
                    transform: `rotate(${angle}deg) translateY(-190px)`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}

              {/* Center radiant glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full blur-3xl bg-gradient-to-r from-yellow-300 to-amber-300 opacity-40 animate-pulse-slow" />
              </div>

              {/* Sparkle icon at center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-yellow-500 opacity-80 animate-bounce-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows - positioned absolutely */}
        <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto w-14 h-14 rounded-full bg-white/70 backdrop-blur-md shadow-xl flex items-center justify-center text-amber-700 hover:bg-white hover:scale-125 hover:shadow-2xl transition-all duration-300 active:scale-95 border border-yellow-200/50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={nextSlide}
            className="pointer-events-auto w-14 h-14 rounded-full bg-white/70 backdrop-blur-md shadow-xl flex items-center justify-center text-amber-700 hover:bg-white hover:scale-125 hover:shadow-2xl transition-all duration-300 active:scale-95 border border-yellow-200/50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
