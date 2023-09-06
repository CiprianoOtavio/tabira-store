import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { CartManager } from '../types/CartManager';

interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  totalPrice: () => string;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: () => '',
  clearCart: () => {},
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isServer = typeof window === 'undefined'; // Verifica se o código está sendo executado no servidor

  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    if (!isServer) {
      // Inicialize o carrinho apenas no cliente
      const cartManager = new CartManager();
      setCart(cartManager.getCart());
    }
  }, []);

  const addToCart = (item: Product) => {
    const cartManager = new CartManager();
    cartManager.addToCart(item);
    setCart(cartManager.getCart());
  };

  const removeFromCart = (item: Product) => {
    const cartManager = new CartManager();
    cartManager.removeFromCart(item);
    setCart(cartManager.getCart());
  };

  const clearCart = () => {
    const cartManager = new CartManager();
    cartManager.clearCart();
    setCart([]);
  };

  function totalPrice(): string {
    const totalPrice: number = cart
      .map((product) => product.price)
      .reduce((previousV, currentV) => previousV + currentV, 0);
    return totalPrice.toFixed(2);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, totalPrice, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
