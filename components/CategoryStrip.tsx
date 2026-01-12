'use client';

import { categories } from '@/lib/mockData';
import { ChevronRight } from 'lucide-react';

export default function CategoryStrip() {
  return (
    <div className="bg-white border-b border-neutral-200 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.slug}`}
              className="flex flex-col items-center gap-2 min-w-[80px] md:min-w-[100px] p-3 rounded-card hover:bg-secondary transition-all group"
            >
              <span className="text-3xl md:text-4xl">{category.icon}</span>
              <span className="text-xs md:text-sm font-medium text-neutral-700 group-hover:text-primary transition-colors text-center">
                {category.name}
              </span>
            </a>
          ))}
          <a
            href="/categories"
            className="flex flex-col items-center justify-center gap-2 min-w-[80px] md:min-w-[100px] p-3 rounded-card hover:bg-secondary transition-all group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-primary transition-colors">
              <ChevronRight className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" />
            </div>
            <span className="text-xs md:text-sm font-medium text-neutral-700 group-hover:text-primary transition-colors">
              More
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

