
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { ArrowUp, Sparkles } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Dados de exemplo dos produtos
  const products: Product[] = [
    {
      id: 1,
      name: "Smartphone Galaxy Pro",
      price: 899.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      category: "Eletrônicos",
      description: "Smartphone com câmera de 108MP e bateria de longa duração",
      inStock: true
    },
    {
      id: 2,
      name: "Tênis Running Sport",
      price: 159.90,
      originalPrice: 199.90,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      category: "Esportes",
      description: "Tênis confortável para corrida e caminhada",
      inStock: true
    },
    {
      id: 3,
      name: "Fone Bluetooth Premium",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "Eletrônicos",
      description: "Fone com cancelamento de ruído e qualidade Hi-Fi",
      inStock: true
    },
    {
      id: 4,
      name: "Camiseta Fitness Dry",
      price: 49.90,
      originalPrice: 69.90,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      category: "Roupas",
      description: "Camiseta de alta performance com tecnologia dry-fit",
      inStock: true
    },
    {
      id: 5,
      name: "Relógio Smartwatch",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      category: "Eletrônicos",
      description: "Smartwatch com monitor cardíaco e GPS",
      inStock: false
    },
    {
      id: 6,
      name: "Mochila Urbana",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      category: "Acessórios",
      description: "Mochila resistente à água com compartimento para laptop",
      inStock: true
    },
    {
      id: 7,
      name: "Cafeteira Espresso",
      price: 299.90,
      originalPrice: 399.90,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      category: "Casa",
      description: "Cafeteira automática com sistema de espuma",
      inStock: true
    },
    {
      id: 8,
      name: "Kit Skincare Natural",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
      category: "Beleza",
      description: "Kit completo com produtos naturais para cuidados da pele",
      inStock: true
    }
  ];

  const categories = Array.from(new Set(products.map(product => product.category)));

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  const productCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(category => {
      counts[category] = products.filter(p => p.category === category).length;
    });
    return counts;
  }, [products, categories]);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onSearch={setSearchTerm} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-whatsapp-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Catálogo Premium
            </h2>
            <Sparkles className="h-8 w-8 ml-3 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Produtos selecionados com qualidade garantida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center text-lg">
              <span className="bg-white/20 rounded-full p-2 mr-3">✓</span>
              Entrega rápida
            </div>
            <div className="flex items-center text-lg">
              <span className="bg-white/20 rounded-full p-2 mr-3">✓</span>
              Melhor preço
            </div>
            <div className="flex items-center text-lg">
              <span className="bg-white/20 rounded-full p-2 mr-3">✓</span>
              Atendimento no WhatsApp
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          productCounts={productCounts}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onWhatsAppClick={handleWhatsAppOrder}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}

        {/* Scroll to top button */}
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg z-40"
          size="icon"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">MeuCatálogo</h3>
          <p className="text-gray-400 mb-4">
            Produtos de qualidade com atendimento personalizado no WhatsApp
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>📞 (11) 99999-9999</span>
            <span>📧 contato@meucatalogo.com</span>
            <span>🕐 Seg-Sex 9h às 18h</span>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
