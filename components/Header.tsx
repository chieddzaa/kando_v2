'use client';

import { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    'Women', 'Men', 'Electronics', 'Home', 'Beauty', 'Kids', 'Grocery', 'Deals'
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Header */}
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 -ml-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  Kando
                </span>
              </a>
            </div>

            {/* Search Bar - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search fashion, electronics, home…"
                  className="w-full h-12 px-4 pr-12 rounded-button border-2 border-neutral-200 focus:border-primary focus:outline-none text-base"
                  aria-label="Search products"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-500 hover:text-primary transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
              {/* Mobile Search Icon */}
              <button
                className="md:hidden p-2 text-neutral-700"
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>

              {/* Account */}
              <a
                href="/account"
                className="flex flex-col items-center gap-1 text-neutral-700 hover:text-primary transition-colors"
                aria-label="Account"
              >
                <User className="w-6 h-6 md:w-5 md:h-5" />
                <span className="text-xs hidden md:inline">Account</span>
              </a>

              {/* Cart */}
              <a
                href="/cart"
                className="relative flex flex-col items-center gap-1 text-neutral-700 hover:text-primary transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6 md:w-5 md:h-5" />
                <span className="text-xs hidden md:inline">Cart</span>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </a>
            </div>
          </div>

          {/* Category Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6 h-12 border-t border-neutral-200">
            <button
              onClick={() => setIsCategoryDrawerOpen(!isCategoryDrawerOpen)}
              className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
            >
              Browse Categories
            </button>
            {categories.slice(0, 8).map((cat) => (
              <a
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="px-2 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors whitespace-nowrap"
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Search Bar - Shown when active */}
        <div className="md:hidden border-t border-neutral-200 px-4 py-3">
          <div className="relative">
            <input
              type="search"
              placeholder="Search fashion, electronics, home…"
              className="w-full h-10 px-4 pr-10 rounded-button border-2 border-neutral-200 focus:border-primary focus:outline-none text-sm"
              aria-label="Search products"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          </div>
        </div>
      </header>

      {/* Mobile Category Drawer */}
      {isCategoryDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsCategoryDrawerOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Categories</h2>
              <button
                onClick={() => setIsCategoryDrawerOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-4">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  className="block px-4 py-3 text-neutral-700 hover:bg-secondary hover:text-primary rounded-button transition-colors"
                  onClick={() => setIsCategoryDrawerOpen(false)}
                >
                  {cat}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

