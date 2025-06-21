
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText } from 'lucide-react';

interface CartActionsProps {
  onWhatsAppOrder: () => void;
  onGeneratePDF: () => void;
  onClearCart: () => void;
}

const CartActions = ({ onWhatsAppOrder, onGeneratePDF, onClearCart }: CartActionsProps) => {
  return (
    <div className="space-y-2">
      <Button
        onClick={onWhatsAppOrder}
        className="w-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white"
      >
        <MessageCircle className="h-4 w-4 mr-2" />
        Finalizar Pedido no WhatsApp
      </Button>

      <Button
        onClick={onGeneratePDF}
        variant="outline"
        className="w-full"
      >
        <FileText className="h-4 w-4 mr-2" />
        Gerar PDF do Pedido
      </Button>

      <Button variant="outline" onClick={onClearCart} className="w-full">
        Limpar Carrinho
      </Button>
    </div>
  );
};

export default CartActions;
