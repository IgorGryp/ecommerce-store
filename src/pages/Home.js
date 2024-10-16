import React, { useContext } from 'react';
// Importing the product context to access product data
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
  // Get products from the ProductContext
  const { products } = useContext(ProductContext);
  console.log(products);
  return <div>Homepage</div>;
};

export default Home;
