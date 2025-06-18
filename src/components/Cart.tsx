import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Minus, ShoppingCart, MessageCircle } from 'lucide-react';

const Cart = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalPriceWithDiscount,
    getTotalItems,
    isOpen,
    setIsOpen,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = "🛒 *Meu Pedido:*\n\n";

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   SKU: ${item.sku}\n`;
      message += `   Quantidade: ${item.quantity}\n`;
      message += `   Preço unitário: R$ ${item.price.toFixed(2).replace('.', ',')}\n`;
      message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });

    const totalPrice = getTotalPrice();
    const totalPriceWithDiscount = getTotalPriceWithDiscount();
    const hasDiscount = items.length > 3;

    message += `💰 *Total sem desconto: R$ ${totalPrice.toFixed(2).replace('.', ',')}*\n`;

    if (hasDiscount) {
      message += `🎉 *Com desconto (10%): R$ ${totalPriceWithDiscount.toFixed(2).replace('.', ',')}*\n`;
    }

    message += "\nGostaria de finalizar este pedido!";

    const phoneNumber = "5511947537240";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  const totalOriginal = getTotalPrice();
  const totalComDesconto = getTotalPriceWithDiscount();
  const temDesconto = items.length > 3;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-whatsapp-500" />
              <h2 className="text-lg font-semibold">Carrinho</h2>
              {items.length > 0 && (
                <Badge variant="secondary">
                  {items.length} {items.length === 1 ? 'item' : 'itens'}
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Carrinho vazio ou com itens */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500">Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                    <div>
                      <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                      <p className="text-xs text-gray-500 mb-1">SKU: {item.sku}</p>
                      <p className="text-gray-500 text-sm line-clamp-3 mb-2">
                        {item.description}
                      </p>
                      <p className="text-whatsapp-600 font-semibold">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>

                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rodapé com total e botões */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-whatsapp-600">
                  R$ {totalComDesconto.toFixed(2).replace('.', ',')}
                </span>
              </div>

              {/* Mensagem de desconto */}
              {temDesconto && (
                <div className="text-green-600 text-sm">
                  Parabéns! Você ganhou 20% de desconto por comprar mais de 3 produtos.
                </div>
              )}

              {/* Valores detalhados (opcional) */}
              {temDesconto && (
                <div className="text-right text-sm text-gray-500">
                  <span className="line-through">R$ {totalOriginal.toFixed(2).replace('.', ',')}</span>
                </div>
              )}

              <Button
                onClick={handleWhatsAppOrder}
                className="w-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Finalizar Pedido no WhatsApp
              </Button>

              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full"
              >
                Limpar Carrinho
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;