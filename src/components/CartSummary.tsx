
import React from 'react';

interface CartSummaryProps {
  totalOriginal: number;
  totalComDesconto: number;
  temDesconto: boolean;
}

const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

const CartSummary = ({ totalOriginal, totalComDesconto, temDesconto }: CartSummaryProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-2xl font-bold text-whatsapp-600">
          {formatPrice(totalComDesconto)}
        </span>
      </div>

      {temDesconto && (
        <>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal:</span>
            <span>{formatPrice(totalOriginal)}</span>
          </div>
          <div className="flex justify-between text-green-600 font-medium">
            <span>Com desconto (20%):</span>
            <span>{formatPrice(totalComDesconto)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
