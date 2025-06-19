
import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const { getTotalQuantity, setIsOpen } = useCart();
  const totalQuantity = getTotalQuantity();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo e Título */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#b37c74]/10">
              <img
                src="/images/logoleev.jpg"
                alt="Logo Leev"
                className="h-10 w-10 rounded-xl object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#b37c74]">
                Leev store Catálogo
              </h1>
              <p className="text-sm text-[#b37c74]">Produtos de qualidade</p>
            </div>
          </div>

          {/* Busca + Carrinho */}
          <div className="flex items-center space-x-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b37c74] h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-10 bg-gray-50 border-gray-200 focus:border-[#b37c74] focus:ring-[#b37c74] text-[#b37c74] placeholder-[#b37c74]"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(true)}
              className="relative text-[#b37c74] border-[#b37c74] hover:bg-[#b37c74]/10"
            >
              <ShoppingCart className="h-4 w-4" />
              {totalQuantity > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
                >
                  {totalQuantity}
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
