import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the context to hold cart data and actions
const CartContext = createContext();

// 2. Export a custom hook to easily access the cart context
export const useCart = () => useContext(CartContext);

// 3. Provider component
export const CartProvider = ({ children }) => {
  // 🛒 Initialize cart from localStorage or empty
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  // 👁️ Controls cart submenu visibility
  const [showCart, setShowCart] = useState(false);

  // ➕ Add or increase item quantity
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ➖ Decrease quantity (not below 1)
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // ❌ Remove item completely
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 👁️ Toggle cart menu visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // 💾 Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        showCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
