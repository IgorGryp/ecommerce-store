// This component Fetches products from an API, stores them in state, and provides the data.
import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext(); // create context object to share the products data globally across components
// ProductProvider wraps <App /> and it is the child component of ProductProvider. It gets passed to ProductProvider as the children prop
// {children} refers to <App /> and all its child components
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // State to hold the products data

  // Fetch products from an external API (Fake Store API)
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts(); // Trigger the fetch when the component mounts
  }, []);

  return (
    // Providing the products data to the whole app through ProductContext
    // By wrapping {children} with the ProductContext.Provider, you ensure that any component inside ProductProvider (i.e., App and all its children) has access to the context value (data)
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
