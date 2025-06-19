import jsPDF from 'jspdf';
import { CartItem } from '@/contexts/CartContext';

interface GeneratePDFProps {
  items: CartItem[];
  totalOriginal: number;
  totalComDesconto: number;
  temDesconto: boolean;
  totalQuantity: number;
}

const formatPrice = (price: number): string => `R$ ${price.toFixed(2).replace('.', ',')}`;

export const generateOrderPDF = ({
  items,
  totalOriginal,
  totalComDesconto,
  temDesconto,
  totalQuantity
}: GeneratePDFProps) => {
  const doc = new jsPDF();
  const now = new Date();
  const date = now.toLocaleDateString('pt-BR');
  const time = now.toLocaleTimeString('pt-BR');
  const discountRate = 0.2;

  const marginX = 20;
  let y = 30;

  const addLineSeparator = (y: number, thickness = 0.1) => {
    doc.setLineWidth(thickness);
    doc.line(marginX, y, 190, y);
  };

  const addText = (text: string, x: number, y: number, size = 12, isBold = false, align: 'left' | 'center' = 'left') => {
    doc.setFontSize(size);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const textX = align === 'center' ? doc.internal.pageSize.getWidth() / 2 : x;
    doc.text(text, textX, y, { align });
  };

  // Título centralizado
  addText('🛍️ Leev Store - Resumo do Pedido', 0, y, 18, true, 'center');
  y += 10;
  addLineSeparator(y);
  y += 10;

  // Informações básicas
  addText(`Data: ${date}`, marginX, y, 11);
  y += 6;
  addText(`Hora: ${time}`, marginX, y, 11);
  y += 10;
  addLineSeparator(y);
  y += 10;

  // Itens
  addText('📦 Itens do Pedido', marginX, y, 14, true);
  y += 10;

  items.forEach((item, index) => {
    const priceComDesconto = temDesconto ? item.price * (1 - discountRate) : item.price;
    const subtotal = priceComDesconto * item.quantity;

    addText(`${index + 1}. ${item.name}`, marginX, y, 12, true);
    y += 6;
    addText(`SKU: ${item.sku}`, marginX + 5, y, 10);
    y += 5;
    addText(`Quantidade: ${item.quantity}`, marginX + 5, y, 10);
    y += 5;

    const priceText = temDesconto
      ? `Preço unitário: ${formatPrice(item.price)} → ${formatPrice(priceComDesconto)}`
      : `Preço unitário: ${formatPrice(priceComDesconto)}`;

    addText(priceText, marginX + 5, y, 10);
    y += 5;

    addText(`Subtotal: ${formatPrice(subtotal)}`, marginX + 5, y, 10);
    y += 8;

    addLineSeparator(y, 0.05);
    y += 8;

    if (y > 260) {
      doc.addPage();
      y = 30;
    }
  });

  // Totais
  addText('🧾 Resumo da Compra', marginX, y, 14, true);
  y += 8;
  addText(`Total de unidades: ${totalQuantity}`, marginX, y);
  y += 6;
  addText(`Total sem desconto: ${formatPrice(totalOriginal)}`, marginX, y);
  y += 6;

  if (temDesconto) {
    addText(`Com desconto (20%): ${formatPrice(totalComDesconto)}`, marginX, y, 12, true);
    y += 8;
    addText('🎉 Parabéns! Você ganhou 20% de desconto por comprar 3+ unidades.', marginX, y, 10);
    y += 8;
  }

  y += 10;
  addLineSeparator(y);
  y += 10;

  // Rodapé fixado na parte inferior
  const pageHeight = doc.internal.pageSize.height;
  addText('Leev Store - Produtos de qualidade', marginX, pageHeight - 20, 10);
  addText('WhatsApp: (11) 94753-7240', marginX, pageHeight - 12, 10);

  const fileName = `pedido-leev-${now.toISOString().split('T')[0]}-${Date.now()}.pdf`;
  doc.save(fileName);

  return fileName;
};
