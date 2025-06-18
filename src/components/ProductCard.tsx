import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

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

interface ProductCardProps {
  product: Product;
  onWhatsAppClick: (product: Product) => void;
}

const ProductCard = ({ product, onWhatsAppClick }: ProductCardProps) => {
  const { addItem } = useCart();
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border-gray-100 animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
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
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-whatsapp-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-whatsapp-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              variant="outline"
              className="flex-1 border-whatsapp-500 text-whatsapp-600 hover:bg-whatsapp-50"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? 'Adicionar' : 'Indisponível'}
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
