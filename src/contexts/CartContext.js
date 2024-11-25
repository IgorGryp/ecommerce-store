// Manages the cart’s state, including items in the cart, total cost, and item quantity
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State for cart items (array of products in the cart)
  const [itemAmount, setItemAmount] = useState(0); // State for the total number of items in the cart
  const [total, setTotal] = useState(0); // State for the total cost of items in the cart

  // Calculate and update the total cost whenever the cart changes
  useEffect(() => {
    const total = cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.amount, // Multiply price by quantity for each item
      0 // Start with 0
    );
    setTotal(total); // Update the total cost state
  }, [cart]); // Dependency array: re-run this logic whenever `cart` changes

  // Calculate and update the total number of items in the cart
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce(
        (accumulator, currentItem) => accumulator + currentItem.amount, // Sum the quantities of all items
        0 // Start with 0
      );
      setItemAmount(amount); // Update the total item count state
    }
  }, [cart]); // Dependency array: re-run this logic whenever `cart` changes

  // Function to add a product to the cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }; // Add `amount` property to the product

    // Check if the product is already in the cart
    const cartItem = cart.find((item) => item.id === id);

    // If the product exists in the cart, increase its quantity
    if (cartItem) {
      const newCart = [...cart].map(
        (item) =>
          item.id === id
            ? { ...item, amount: cartItem.amount + 1 } // Increment the amount
            : item // Leave other items unchanged
      );
      setCart(newCart); // Update the cart state
    } else {
      setCart([...cart, newItem]); // If the product is not in the cart, add it as a new item
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id); // Remove the item by filtering
    setCart(newCart); // Update the cart state
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCart([]); // Reset the cart state to an empty array
  };

  // Function to increase the quantity of a product in the cart
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id); // Increase the quantity
  };

  // Function to decrease the quantity of a product in the cart
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id); // Find the item in the cart
    if (cartItem) {
      // If the item exists, update the cart with the decreased quantity
      const newCart = cart.map(
        (item) =>
          item.id === id
            ? { ...item, amount: cartItem.amount - 1 } // Decrease the amount by 1
            : item // Leave other items unchanged
      );
      setCart(newCart); // Update the cart state
    }
    // If the quantity drops below 2, remove the item from the cart
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
