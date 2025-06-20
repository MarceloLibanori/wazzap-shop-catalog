
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Minus, ShoppingCart, MessageCircle, FileText } from 'lucide-react';
import { generateOrderPDF } from '@/utils/pdfGenerator';
import { toast } from '@/components/ui/use-toast';

// Função auxiliar para formatar valores em Real
const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

const Cart = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalPriceWithDiscount,
    getTotalQuantity,
    isOpen,
    setIsOpen,
  } = useCart();

  const totalItems = getTotalQuantity();
  const temDesconto = totalItems >= 3;
  const totalOriginal = getTotalPrice();
  const totalComDesconto = temDesconto ? getTotalPriceWithDiscount() : totalOriginal;

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = "🛒 *Meu Pedido:*\n\n";

    items.forEach((item, index) => {
      const priceWithDiscount = temDesconto ? item.price * 0.8 : item.price;
      const itemSubtotal = priceWithDiscount * item.quantity;

      message += `*${index + 1}. ${item.name}*\n`;
      message += `SKU: ${item.sku}\n`;
      message += `Quantidade: ${item.quantity}\n`;

      if (temDesconto) {
        message += `Preço unitário: ~~R$ ${formatPrice(item.price)}~~ → `;
      }
      message += `Preço unitário: R$ ${formatPrice(priceWithDiscount)}\n`;
      message += `Subtotal: R$ ${formatPrice(itemSubtotal)}\n`;
      message += "──────────────────────\n";
    });

    message += `\n💰 *Total sem desconto:* ${formatPrice(totalOriginal)}\n`;

    if (temDesconto) {
      message += `🎉 *Com desconto (20%):* ${formatPrice(totalComDesconto)}\n`;
      message += "__________________________\n";
      message += "\n🎁 Parabéns! Você ganhou 20% de desconto por comprar mais de 3 unidades.\n";
    }

    message += "\n📞 Gostaria de finalizar este pedido!\nObrigado 😊";

    const phoneNumber = "5511947537240"; // substitua pelo número correto
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleGeneratePDF = () => {
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione produtos ao carrinho para gerar o PDF.",
        variant: "destructive",
      });
      return;
    }

    try {
      const fileName = generateOrderPDF({
        items,
        totalOriginal,
        totalComDesconto,
        temDesconto,
        totalQuantity: totalItems
      });
      
      toast({
        title: "PDF gerado!",
        description: `O arquivo "${fileName}" foi baixado com sucesso.`,
      });
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast({
        title: "Erro",
        description: "Não foi possível gerar o PDF. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-whatsapp-500" />
              <h2 className="text-lg font-semibold">Carrinho</h2>
              {items.length > 0 && (
                <Badge variant="secondary" className="inline-flex items-center">
                  {totalItems} {totalItems === 1 ? 'unidade' : 'unidades'}
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Conteúdo do carrinho */}
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
                    <div className="flex space-x-3">
                      {/* Imagem do produto */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.images[0] || '/fallback-image.jpg'}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
                        />
                      </div>
                      
                      {/* Informações do produto */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                        <p className="text-xs text-gray-500 mb-1">SKU: {item.sku}</p>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-2">{item.description}</p>

                        <div className="mt-1">
                          {temDesconto ? (
                            <div>
                              <span className="text-gray-500 line-through text-xs">
                                {formatPrice(item.price)}
                              </span>{' '}
                              <span className="text-whatsapp-600 font-semibold">
                                {formatPrice(item.price * 0.8)}
                              </span>
                            </div>
                          ) : (
                            <span className="text-whatsapp-600 font-semibold">
                              {formatPrice(item.price)}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="inline-flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="inline-flex items-center text-sm font-medium min-w-[2rem] text-center">
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
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Mensagem de incentivo ao desconto */}
                {totalItems > 0 && totalItems < 3 && (
                  <div className="mt-4 text-sm text-yellow-600">
                    Compre mais {3 - totalItems} unidade(s) e ganhe 20% de desconto!
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Rodapé com total e botões */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-2">
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

              <div className="space-y-2">
                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Finalizar Pedido no WhatsApp
                </Button>

                <Button
                  onClick={handleGeneratePDF}
                  variant="outline"
                  className="w-full"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Gerar PDF do Pedido
                </Button>

                <Button variant="outline" onClick={clearCart} className="w-full">
                  Limpar Carrinho
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
