'use client';

import { Product } from '@/lib/mockData';
import ProductCard from './ProductCard';

interface ProductGridSectionProps {
  title: string;
  products: Product[];
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

export default function ProductGridSection({
  title,
  products,
  subtitle,
  columns = 4,
}: ProductGridSectionProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-neutral-600">{subtitle}</p>
          )}
        </div>

        <div className={`grid ${gridCols[columns]} gap-4 md:gap-6`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

