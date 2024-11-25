// The ProductProvider component is responsible for fetching product data and making it accessible to the entire app
import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext(); // Create context object to share the products data globally across components

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // State to hold the fetched products data

  // Fetch products data from an external API when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Update the products state with the fetched data
      } catch (error) {
        console.error('Error fetching products:', error); // Handle errors
      }
    };

    fetchProducts(); // Trigger the fetch operation
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
