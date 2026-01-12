'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/lib/mockData';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  subtitle?: string;
}

export default function ProductCarousel({
  title,
  products,
  subtitle,
}: ProductCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 280; // Approximate card width including gap
  const scrollAmount = cardWidth * 2;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm md:text-base text-neutral-600">{subtitle}</p>
            )}
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollLeft}
              disabled={scrollPosition === 0}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4"
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[240px] md:w-[260px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

