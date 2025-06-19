
import jsPDF from 'jspdf';
import { CartItem } from '@/contexts/CartContext';

interface GeneratePDFProps {
  items: CartItem[];
  totalOriginal: number;
  totalComDesconto: number;
  temDesconto: boolean;
  totalQuantity: number;
}

const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

export const generateOrderPDF = ({
  items,
  totalOriginal,
  totalComDesconto,
  temDesconto,
  totalQuantity
}: GeneratePDFProps) => {
  const doc = new jsPDF();
  
  // Cabeçalho
  doc.setFontSize(20);
  doc.text('Leev Store - Pedido', 20, 30);
  
  doc.setFontSize(12);
  doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, 20, 45);
  doc.text(`Hora: ${new Date().toLocaleTimeString('pt-BR')}`, 20, 55);
  
  // Linha separadora
  doc.line(20, 65, 190, 65);
  
  // Itens do pedido
  doc.setFontSize(14);
  doc.text('Itens do Pedido:', 20, 80);
  
  let yPosition = 95;
  
  items.forEach((item, index) => {
    const priceWithDiscount = temDesconto ? item.price * 0.8 : item.price;
    const itemSubtotal = priceWithDiscount * item.quantity;
    
    doc.setFontSize(12);
    doc.text(`${index + 1}. ${item.name}`, 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.text(`SKU: ${item.sku}`, 25, yPosition);
    yPosition += 6;
    
    doc.text(`Quantidade: ${item.quantity}`, 25, yPosition);
    yPosition += 6;
    
    if (temDesconto) {
      doc.text(`Preço unitário: ${formatPrice(item.price)} → ${formatPrice(priceWithDiscount)}`, 25, yPosition);
    } else {
      doc.text(`Preço unitário: ${formatPrice(priceWithDiscount)}`, 25, yPosition);
    }
    yPosition += 6;
    
    doc.text(`Subtotal: ${formatPrice(itemSubtotal)}`, 25, yPosition);
    yPosition += 10;
    
    // Linha separadora entre itens
    doc.line(20, yPosition, 190, yPosition);
    yPosition += 10;
    
    // Verificar se precisa de nova página
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 30;
    }
  });
  
  // Totais
  yPosition += 10;
  doc.setFontSize(12);
  doc.text(`Total de unidades: ${totalQuantity}`, 20, yPosition);
  yPosition += 10;
  
  doc.text(`Total sem desconto: ${formatPrice(totalOriginal)}`, 20, yPosition);
  yPosition += 8;
  
  if (temDesconto) {
    doc.setFontSize(14);
    doc.text(`Com desconto (20%): ${formatPrice(totalComDesconto)}`, 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.text('Parabéns! Você ganhou 20% de desconto por comprar 3+ unidades.', 20, yPosition);
  }
  
  // Rodapé
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(10);
  doc.text('Leev Store - Produtos de qualidade', 20, pageHeight - 20);
  doc.text('WhatsApp: (11) 94753-7240', 20, pageHeight - 10);
  
  // Salvar o PDF
  const fileName = `pedido-leev-${new Date().toISOString().split('T')[0]}-${Date.now()}.pdf`;
  doc.save(fileName);
  
  return fileName;
};
