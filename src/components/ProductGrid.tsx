
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/interfaces/Product';

interface ProductGridProps {
  products: Product[];
  onWhatsAppClick: (product: Product) => void;
}

const ProductGrid = ({ products, onWhatsAppClick }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          Nenhum produto encontrado
        </h3>
        <p className="text-gray-500">
          Tente ajustar os filtros ou termos de busca
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onWhatsAppClick={onWhatsAppClick}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
