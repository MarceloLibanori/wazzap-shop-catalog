
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const EmptyCart = () => {
  return (
    <div className="text-center py-8">
      <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
      <p className="text-gray-500">Seu carrinho está vazio</p>
    </div>
  );
};

export default EmptyCart;
