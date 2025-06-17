
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Vim pelo seu catálogo online e gostaria de saber mais sobre os produtos.";
    const phoneNumber = "5511947537240"; // Substitua pelo número real
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-whatsapp-500 hover:bg-whatsapp-600 shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-scale-in"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
