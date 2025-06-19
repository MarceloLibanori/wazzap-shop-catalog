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

  const addLineSeparator = (y: number) => {
    doc.line(20, y, 190, y);
  };

  const addText = (text: string, x: number, y: number, size = 12, isBold = false) => {
    doc.setFontSize(size);
    doc.setFont(undefined, isBold ? 'bold' : 'normal');
    doc.text(text, x, y);
  };

  // Cabeçalho
  addText('Leev Store - Pedido', 20, 30, 20, true);
  addText(`Data: ${date}`, 20, 45);
  addText(`Hora: ${time}`, 20, 55);
  addLineSeparator(65);

  // Itens
  addText('Itens do Pedido:', 20, 75, 14, true);

  let y = 85;

  items.forEach((item, index) => {
    const priceComDesconto = temDesconto ? item.price * (1 - discountRate) : item.price;
    const subtotal = priceComDesconto * item.quantity;

    addText(`${index + 1}. ${item.name}`, 20, y);
    y += 6;
    addText(`SKU: ${item.sku}`, 25, y, 10);
    y += 5;
    addText(`Quantidade: ${item.quantity}`, 25, y, 10);
    y += 5;

    const priceText = temDesconto
      ? `Preço unitário: ${formatPrice(item.price)} → ${formatPrice(priceComDesconto)}`
      : `Preço unitário: ${formatPrice(priceComDesconto)}`;

    addText(priceText, 25, y, 10);
    y += 5;

    addText(`Subtotal: ${formatPrice(subtotal)}`, 25, y, 10);
    y += 8;

    addLineSeparator(y);
    y += 8;

    if (y > 260) {
      doc.addPage();
      y = 30;
    }
  });

  // Totais
  y += 10;
  addText(`Total de unidades: ${totalQuantity}`, 20, y);
  y += 8;
  addText(`Total sem desconto: ${formatPrice(totalOriginal)}`, 20, y);
  y += 8;

  if (temDesconto) {
    addText(`Com desconto (20%): ${formatPrice(totalComDesconto)}`, 20, y, 13, true);
    y += 8;
    addText('Parabéns! Você ganhou 20% de desconto por comprar 3+ unidades.', 20, y, 10);
    y += 10;
  }

  // Rodapé
  const pageHeight = doc.internal.pageSize.height;
  addLineSeparator(pageHeight - 25);
  addText('Leev Store - Produtos de qualidade', 20, pageHeight - 18, 10);
  addText('WhatsApp: (11) 94753-7240', 20, pageHeight - 10, 10);

  // Salvar
  const fileName = `pedido-leev-${now.toISOString().split('T')[0]}-${Date.now()}.pdf`;
  doc.save(fileName);

  return fileName;
};
