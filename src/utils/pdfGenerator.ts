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

export const generateOrderPDF = async ({
  items,
  totalOriginal,
  totalComDesconto,
  temDesconto,
  totalQuantity
}: GeneratePDFProps) => {
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPosition = 50;

  // Carregar logotipo via URL (deve ser uma imagem pública)
  const logoUrl = 'https://seu-dominio.com/imagens/logo.png';  // substitua por sua URL real

  // Baixar a imagem como base64
  const response = await fetch(logoUrl);
  const blob = await response.blob();
  const reader = new FileReader();
  
  // Converter para base64
  await new Promise((resolve) => {
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });

  const logoDataUri = reader.result as string;

  // Adicionar logotipo no topo
  doc.addImage(logoDataUri, 'PNG', margin, 15, 40, 25); // posição x, y, largura, altura

  // Cabeçalho centralizado
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Leev Store - Pedido', pageWidth / 2, 30, { align: 'center' });

  // Data e hora
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, margin, 45);
  doc.text(`Hora: ${new Date().toLocaleTimeString('pt-BR')}`, pageWidth - margin - 80, 45);

  // Linha separadora
  doc.setDrawColor(0, 0, 0);
  doc.line(margin, 55, pageWidth - margin, 55);

  yPosition = 70;

  // Título da tabela
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Itens do Pedido:', margin, yPosition);
  yPosition += 10;

  // Cabeçalho da tabela
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Produto', margin + 5, yPosition);
  doc.text('Quantidade', margin + 70, yPosition);
  doc.text('Preço Unitário', margin + 110, yPosition);
  doc.text('Subtotal', margin + 150, yPosition);
  yPosition += 8;

  doc.setFont('helvetica', 'normal');

  items.forEach((item, index) => {
    const priceWithDiscount = temDesconto ? item.price * 0.8 : item.price;
    const itemSubtotal = priceWithDiscount * item.quantity;

    if (yPosition > 270) {
      doc.addPage();
      yPosition = 30;
    }

    // Linha da tabela
    doc.setFontSize(11);
    doc.text(`${index + 1}. ${item.name}`, margin + 5, yPosition);
    doc.text(`${item.quantity}`, margin + 80, yPosition, { align: 'center' });
    doc.text(
      temDesconto
        ? `${formatPrice(item.price)} → ${formatPrice(priceWithDiscount)}`
        : formatPrice(priceWithDiscount),
      margin + 120,
      yPosition,
      { align: 'right' }
    );
    doc.text(formatPrice(itemSubtotal), pageWidth - margin - 10, yPosition, { align: 'right' });

    yPosition += 8;

    // SKU
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(`SKU: ${item.sku}`, margin + 5, yPosition);
    yPosition += 6;
    doc.setTextColor(0, 0, 0);

    // Separador de linha
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 6;
  });

  yPosition += 10;

  // Totais
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Total de unidades: ${totalQuantity}`, margin, yPosition);
  yPosition += 10;

  doc.text(`Total sem desconto: ${formatPrice(totalOriginal)}`, margin, yPosition);
  yPosition += 8;

  if (temDesconto) {
    doc.setFontSize(14);
    doc.setTextColor(0, 128, 0); // Verde escuro
    doc.text(`Com desconto (20%): ${formatPrice(totalComDesconto)}`, margin, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('Parabéns! Você ganhou 20% de desconto por comprar 3+ unidades.', margin, yPosition);
    yPosition += 10;
  }

  // Rodapé
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('Leev Store - Produtos de qualidade', margin, pageHeight - 20);
  doc.text('WhatsApp: (11) 94753-7240', margin, pageHeight - 10);

  // Salvar o PDF
  const fileName = `pedido-leev-${new Date().toISOString().split('T')[0]}-${Date.now()}.pdf`;
  doc.save(fileName);

  return fileName;
};