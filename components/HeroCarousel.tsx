'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, promoTiles } from '@/lib/mockData';
import Image from 'next/image';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <div className="relative w-full">
      {/* Hero Carousel */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/20">
        <Image
          src={currentHero.image}
          alt={currentHero.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {currentHero.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 drop-shadow-md">
                {currentHero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={currentHero.ctaLink}
                  className="px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-button font-semibold text-base md:text-lg hover:bg-primary-dark transition-all active:scale-95 shadow-lg"
                >
                  {currentHero.ctaText}
                </a>
                {currentHero.secondaryCtaText && (
                  <a
                    href={currentHero.secondaryCtaLink}
                    className="px-6 py-3 md:px-8 md:py-4 bg-white/90 text-primary rounded-button font-semibold text-base md:text-lg hover:bg-white transition-all active:scale-95 shadow-lg"
                  >
                    {currentHero.secondaryCtaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Promo Tiles Row */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {promoTiles.map((tile) => (
            <a
              key={tile.id}
              href={tile.link}
              className={`${tile.color} text-white p-6 rounded-card hover:opacity-90 transition-all active:scale-98 shadow-md`}
            >
              <h3 className="text-xl font-bold">{tile.title}</h3>
              <p className="text-sm mt-1 opacity-90">Shop now →</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

