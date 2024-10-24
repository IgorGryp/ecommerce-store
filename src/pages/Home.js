import React, { useContext } from 'react';
// Importing the product context to access product data
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
  // Get products from the ProductContext (access the value of ProductContext)
  const { products } = useContext(ProductContext);

  // Get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  console.log(filteredProducts);

  return <div>Homepage</div>;
};

export default Home;
