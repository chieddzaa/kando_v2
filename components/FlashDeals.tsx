'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/mockData';
import ProductCard from './ProductCard';
import { Clock } from 'lucide-react';

interface FlashDealsProps {
  products: Product[];
}

export default function FlashDeals({ products }: FlashDealsProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
                Flash Deals
              </h2>
              <p className="text-sm md:text-base text-neutral-600">
                Limited time offers - Don't miss out!
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-button shadow-md">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-sm font-semibold text-neutral-900">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

