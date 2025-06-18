import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  description: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onWhatsAppClick: (product: Product) => void;
}

const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

const ProductCard = ({ product, onWhatsAppClick }: ProductCardProps) => {
  const { addItem } = useCart();
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (product.inStock) {
      addItem({ ...product, quantity });
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border-gray-100 animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={mainImage || '/fallback-image.jpg'}
          alt={product.name}
          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
        />
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
            -{discount}%
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-sm">
              Esgotado
            </Badge>
          </div>
        )}
      </div>

      {/* Miniaturas */}
      <div className="flex space-x-2 mt-2 px-4">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${product.name} thumbnail ${i + 1}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
              img === mainImage ? 'border-whatsapp-600' : 'border-transparent'
            }`}
            onClick={() => setMainImage(img)}
            onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
          />
        ))}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>

          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-whatsapp-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-whatsapp-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Contador de quantidade */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              aria-label="Decrementar quantidade"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
            >
              -
            </button>
            <span className="w-6 text-center">{quantity}</span>
            <button
              type="button"
              aria-label="Incrementar quantidade"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <div className="flex space-x-2 mt-2">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              variant="outline"
              className="flex-1 border-whatsapp-500 text-whatsapp-600 hover:bg-whatsapp-50"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? `Adicionar (${quantity})` : 'Indisponível'}
            </Button>

            <Button
              onClick={() => onWhatsAppClick(product)}
              disabled={!product.inStock}
              className="flex-1 bg-whatsapp-500 hover:bg-whatsapp-600 text-white transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Comprar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;