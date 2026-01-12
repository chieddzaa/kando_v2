export interface Product {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Women', icon: '👗', slug: 'women' },
  { id: '2', name: 'Men', icon: '👔', slug: 'men' },
  { id: '3', name: 'Electronics', icon: '📱', slug: 'electronics' },
  { id: '4', name: 'Home', icon: '🏠', slug: 'home' },
  { id: '5', name: 'Beauty', icon: '💄', slug: 'beauty' },
  { id: '6', name: 'Kids', icon: '🧸', slug: 'kids' },
  { id: '7', name: 'Grocery', icon: '🛒', slug: 'grocery' },
  { id: '8', name: 'Deals', icon: '🔥', slug: 'deals' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Everything You Need, All in One Place',
    subtitle: 'Discover thousands of products across fashion, tech, home, and more',
    ctaText: 'Shop Trending',
    ctaLink: '/trending',
    secondaryCtaText: 'Browse Categories',
    secondaryCtaLink: '/categories',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'Flash Sale: Up to 70% Off',
    subtitle: 'Limited time deals on bestsellers. Shop now before they\'re gone!',
    ctaText: 'Shop Now',
    ctaLink: '/deals',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'New Arrivals Every Week',
    subtitle: 'Stay ahead of trends with our latest fashion and lifestyle picks',
    ctaText: 'Explore New',
    ctaLink: '/new-arrivals',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=600&fit=crop',
  },
];

export const promoTiles = [
  { id: '1', title: 'Under $25', link: '/under-25', color: 'bg-primary' },
  { id: '2', title: 'New Arrivals', link: '/new-arrivals', color: 'bg-secondary' },
  { id: '3', title: 'Clearance', link: '/clearance', color: 'bg-red-500' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Classic White T-Shirt - Premium Cotton',
    price: 19.99,
    compareAtPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 234,
    discount: 33,
    category: 'women',
  },
  {
    id: '2',
    title: 'Wireless Bluetooth Headphones - Noise Cancelling',
    price: 79.99,
    compareAtPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 892,
    discount: 38,
    category: 'electronics',
  },
  {
    id: '3',
    title: 'Modern Minimalist Desk Lamp - LED',
    price: 34.99,
    compareAtPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 156,
    discount: 30,
    category: 'home',
  },
  {
    id: '4',
    title: 'Hydrating Face Serum - Vitamin C',
    price: 24.99,
    compareAtPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 445,
    discount: 37,
    category: 'beauty',
  },
  {
    id: '5',
    title: 'Slim Fit Denim Jeans - Dark Wash',
    price: 49.99,
    compareAtPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    rating: 4.4,
    reviewCount: 678,
    discount: 29,
    category: 'men',
  },
  {
    id: '6',
    title: 'Smart Fitness Tracker - Waterproof',
    price: 89.99,
    compareAtPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 1234,
    discount: 40,
    category: 'electronics',
  },
  {
    id: '7',
    title: 'Cozy Throw Blanket - Soft Fleece',
    price: 29.99,
    compareAtPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1584100936595-beb1b5b3e39a?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 312,
    discount: 33,
    category: 'home',
  },
  {
    id: '8',
    title: 'Lipstick Set - 6 Matte Shades',
    price: 19.99,
    compareAtPrice: 34.99,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 567,
    discount: 43,
    category: 'beauty',
  },
  {
    id: '9',
    title: 'Casual Sneakers - Comfort Fit',
    price: 59.99,
    compareAtPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 789,
    discount: 33,
    category: 'women',
  },
  {
    id: '10',
    title: 'Portable Phone Charger - 10000mAh',
    price: 24.99,
    compareAtPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 423,
    discount: 37,
    category: 'electronics',
  },
  {
    id: '11',
    title: 'Ceramic Coffee Mug Set - 4 Pack',
    price: 18.99,
    compareAtPrice: 28.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
    rating: 4.4,
    reviewCount: 234,
    discount: 34,
    category: 'home',
  },
  {
    id: '12',
    title: 'Men\'s Leather Wallet - RFID Blocking',
    price: 39.99,
    compareAtPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 345,
    discount: 33,
    category: 'men',
  },
];

