import React, { createContext, useState, useEffect } from 'react';

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // State to hold the products data
  const [products, setProducts] = useState([]);

  // Fetch products from an external API (Fake Store API)
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    // Trigger the fetch when the component mounts
    fetchProducts();
  }, []);

  return (
    // Providing the product data to the whole app through ProductContext
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
