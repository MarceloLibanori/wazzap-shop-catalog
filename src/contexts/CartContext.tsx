import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definição da interface do item do carrinho
interface CartItem {
  id: string;
  name: string;
  sku: string;
  description?: string;
  price: number;
  quantity: number;
}

// Definição do tipo do contexto
interface CartContextType {
  items: CartItem[];
  getTotalPrice: () => number;
  getTotalPriceWithDiscount: () => number;
  getTotalQuantity: () => number;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

// Criação do contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para usar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider');
  return context;
};

// Provider do contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Carregar carrinho do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Salvar carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  // Funções do carrinho
  const getTotalPrice = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getTotalPriceWithDiscount = () => getTotalPrice() * 0.8;

  const getTotalQuantity = () =>
    items.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setItems(prev => prev.filter(item => item.id !== id));
    } else {
      setItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => setItems(prev => prev.filter(item => item.id !== id));

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        getTotalPrice,
        getTotalPriceWithDiscount,
        getTotalQuantity,
        updateQuantity,
        removeItem,
        clearCart,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};