
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import WhatsAppButton from '@/components/WhatsAppButton';
import Cart from '@/components/Cart';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { CartProvider } from '@/contexts/CartContext';
import { products, Product } from '@/data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Array.from(new Set(products.map(product => product.category)));

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const productCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(category => {
      counts[category] = products.filter(p => p.category === category).length;
    });
    return counts;
  }, [categories]);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Olá! Tenho interesse no produto:

*${product.name}*
Preço: R$ ${product.price.toFixed(2).replace('.', ',')}

${product.description}

Poderia me dar mais informações?`;
    
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header onSearch={setSearchTerm} />
        
        <HeroSection />

        <div className="container mx-auto px-4 py-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            productCounts={productCounts}
          />

          <ProductGrid
            products={filteredProducts}
            onWhatsAppClick={handleWhatsAppOrder}
          />

          <ScrollToTopButton />
        </div>

        <Footer />

        <WhatsAppButton />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
