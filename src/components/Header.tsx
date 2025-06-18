
import React from 'react';
import { ShoppingBag, Search, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const { getTotalItems, setIsOpen } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-whatsapp-500 to-blue-500 p-2 rounded-xl">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-whatsapp-600 to-blue-600 bg-clip-text text-transparent">
                Leev store Catálogo
              </h1>
              <p className="text-sm text-gray-600">Produtos de qualidade</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-10 bg-gray-50 border-gray-200 focus:border-whatsapp-500 focus:ring-whatsapp-500"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(true)}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
