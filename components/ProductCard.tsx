'use client';

import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/mockData';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : product.discount || 0;

  return (
    <a
      href={`/product/${product.id}`}
      className="group relative bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          loading="lazy"
        />
        
        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercent}%
          </div>
        )}

        {/* Quick Actions - Desktop */}
        <div
          className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-200 ${
            showActions ? 'opacity-100' : 'opacity-0'
          } hidden md:flex`}
        >
          <button
            onClick={handleLike}
            className={`p-2 rounded-full shadow-lg transition-all ${
              isLiked
                ? 'bg-red-500 text-white'
                : 'bg-white text-neutral-700 hover:bg-neutral-50'
            }`}
            aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Quick Actions - Mobile (Always visible) */}
        <div className="absolute top-3 right-3 md:hidden">
          <button
            onClick={handleLike}
            className={`p-2 rounded-full shadow-lg transition-all ${
              isLiked
                ? 'bg-red-500 text-white'
                : 'bg-white text-neutral-700'
            }`}
            aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-sm font-medium text-neutral-900 line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-neutral-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-neutral-500">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-neutral-900">
            ${product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-neutral-500 line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-2.5 bg-primary text-white rounded-button font-semibold text-sm hover:bg-primary-dark transition-all active:scale-98 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity"
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </span>
        </button>
      </div>
    </a>
  );
}

