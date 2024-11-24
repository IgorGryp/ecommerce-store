// This component manages the cart’s state, such as items in the cart, total cost, and item quantity.
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State for cart items
  const [itemAmount, setItemAmount] = useState(0); // State for total item count
  const [total, setTotal] = useState(0); // State for total cost

  // Calculate and update total cost when cart changes
  useEffect(() => {
    const total = cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.amount,
      0
    );
    setTotal(total);
  }, [cart]);

  // Update item count when cart changes
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce(
        (accumulator, currentItem) => accumulator + currentItem.amount,
        0
      );
      setItemAmount(amount);
    }
  }, [cart]);

  // Add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // Check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // If cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Remove fom the cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // Decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
