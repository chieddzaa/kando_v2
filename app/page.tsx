import TrustBar from '@/components/TrustBar';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import CategoryStrip from '@/components/CategoryStrip';
import ProductCarousel from '@/components/ProductCarousel';
import ProductGridSection from '@/components/ProductGridSection';
import FlashDeals from '@/components/FlashDeals';
import ValueProps from '@/components/ValueProps';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { mockProducts } from '@/lib/mockData';

export default function Home() {
  // Filter products for different sections
  const trendingProducts = mockProducts.slice(0, 10);
  const bestSellers = mockProducts.slice(2, 10);
  const recommendedProducts = mockProducts.slice(4, 12);
  const flashDealProducts = mockProducts.filter((p) => p.discount && p.discount > 30);

  return (
    <main className="min-h-screen">
      <TrustBar />
      <Header />
      <HeroCarousel />
      <CategoryStrip />
      
      {/* Trending Now */}
      <ProductCarousel
        title="Trending Now"
        subtitle="Shop what's hot right now"
        products={trendingProducts}
      />

      {/* Flash Deals */}
      <FlashDeals products={flashDealProducts.length > 0 ? flashDealProducts : mockProducts.slice(0, 8)} />

      {/* Best Sellers */}
      <ProductGridSection
        title="Best Sellers"
        subtitle="Customer favorites you'll love"
        products={bestSellers}
        columns={4}
      />

      {/* Just For You / Recommended */}
      <ProductGridSection
        title="Just For You"
        subtitle="Recommended based on your interests"
        products={recommendedProducts}
        columns={4}
      />

      <ValueProps />
      <Footer />
      <BackToTop />
    </main>
  );
}

