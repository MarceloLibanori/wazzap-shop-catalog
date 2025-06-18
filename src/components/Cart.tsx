// src/contexts/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/interfaces/Product';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  quantity: number;
  sku: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalQuantity: () => number; // Nova função
  getTotalPrice: () => number;
  getTotalPriceWithDiscount: () => number; // Nova função com desconto
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          images: product.images || [],
          description: product.description || 'Descrição não disponível',
          quantity: 1,
          sku: product.sku || `SKU-${product.id}`,
        },
      ];
    });
  };

  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.length;
  };

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // ✨ Função para calcular preço com desconto
  const getTotalPriceWithDiscount = () => {
    const total = getTotalPrice();
    
    // Se houver mais de 3 **itens diferentes**
    if (items.length > 3) {
      const discountPercentage = 0.10; // 10% de desconto
      return total * (1 - discountPercentage);
    }

    // Ou, se quiser por **quantidade total de unidades**
    // if (getTotalQuantity() > 3) {
    //   const discountPercentage = 0.10;
    //   return total * (1 - discountPercentage);
    // }

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalQuantity,
        getTotalPrice,
        getTotalPriceWithDiscount,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};