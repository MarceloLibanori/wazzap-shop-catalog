import React, { useState } from 'react';
// ... outros imports

const ProductCard = ({ product, onWhatsAppClick }: ProductCardProps) => {
  const { addItem } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product.inStock && quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
    }
  };

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white border-gray-100 animate-fade-in">
      {/* ... Imagem, miniaturas, e conteúdo anterior ... */}

      <CardContent className="p-4">
        <div className="space-y-2">
          {/* ... título, descrição, preços ... */}

          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseQty}
              className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100"
            >
              −
            </button>
            <span className="min-w-[24px] text-center">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <div className="flex space-x-2 mt-2">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              variant="outline"
              className="flex-1 border-whatsapp-500 text-whatsapp-600 hover:bg-whatsapp-50"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? `Adicionar (${quantity})` : 'Indisponível'}
            </Button>

            <Button
              onClick={() => onWhatsAppClick(product)}
              disabled={!product.inStock}
              className="flex-1 bg-whatsapp-500 hover:bg-whatsapp-600 text-white transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Comprar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
