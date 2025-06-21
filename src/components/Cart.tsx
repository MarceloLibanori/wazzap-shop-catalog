
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { generateOrderPDF } from '@/utils/pdfGenerator';
import { toast } from '@/components/ui/use-toast';
import DeliveryForm from './DeliveryForm';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import CartActions from './CartActions';
import EmptyCart from './EmptyCart';

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

  const [deliveryData, setDeliveryData] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    cidade: '',
    cep: '',
    frete: ''
  });

  const totalItems = getTotalQuantity();
  const temDesconto = totalItems >= 3;
  const totalOriginal = getTotalPrice();
  const totalComDesconto = temDesconto ? getTotalPriceWithDiscount() : totalOriginal;

  const isDeliveryDataValid = () => {
    return deliveryData.nome && 
           deliveryData.telefone && 
           deliveryData.endereco && 
           deliveryData.cidade && 
           deliveryData.cep && 
           deliveryData.frete;
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    if (!isDeliveryDataValid()) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os dados de entrega.",
        variant: "destructive",
      });
      return;
    }

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

    message += "\n📦 *Dados para Entrega:*\n";
    message += `👤 Nome: ${deliveryData.nome}\n`;
    message += `📱 Telefone: ${deliveryData.telefone}\n`;
    message += `📍 Endereço: ${deliveryData.endereco}\n`;
    message += `🏙️ Cidade: ${deliveryData.cidade}\n`;
    message += `📮 CEP: ${deliveryData.cep}\n`;
    
    const freteLabel = {
      onibus: 'Ônibus',
      correio: 'Correio',
      transportadora: 'Transportadora'
    }[deliveryData.frete] || deliveryData.frete;
    
    message += `🚚 Frete: ${freteLabel} (consultar valor)\n`;

    message += "\n📞 Gostaria de finalizar este pedido!\nObrigado 😊";

    const phoneNumber = "5511947537240";
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

    if (!isDeliveryDataValid()) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os dados de entrega antes de gerar o PDF.",
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
        totalQuantity: totalItems,
        deliveryData
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
          <CartHeader 
            itemCount={items.length}
            totalQuantity={totalItems}
            onClose={() => setIsOpen(false)}
          />

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    temDesconto={temDesconto}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeItem}
                  />
                ))}

                {totalItems > 0 && totalItems < 3 && (
                  <div className="mt-4 text-sm text-yellow-600">
                    Compre mais {3 - totalItems} unidade(s) e ganhe 20% de desconto!
                  </div>
                )}

                <DeliveryForm
                  deliveryData={deliveryData}
                  onDeliveryDataChange={setDeliveryData}
                />
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t p-4">
              <CartSummary
                totalOriginal={totalOriginal}
                totalComDesconto={totalComDesconto}
                temDesconto={temDesconto}
              />
              
              <div className="mt-4">
                <CartActions
                  onWhatsAppOrder={handleWhatsAppOrder}
                  onGeneratePDF={handleGeneratePDF}
                  onClearCart={clearCart}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
