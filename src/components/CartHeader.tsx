
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ShoppingCart } from 'lucide-react';

interface CartHeaderProps {
  itemCount: number;
  totalQuantity: number;
  onClose: () => void;
}

const CartHeader = ({ itemCount, totalQuantity, onClose }: CartHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-2">
        <ShoppingCart className="h-5 w-5 text-whatsapp-500" />
        <h2 className="text-lg font-semibold">Carrinho</h2>
        {itemCount > 0 && (
          <Badge variant="secondary" className="inline-flex items-center">
            {totalQuantity} {totalQuantity === 1 ? 'unidade' : 'unidades'}
          </Badge>
        )}
      </div>
      <Button variant="ghost" size="sm" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartHeader;
