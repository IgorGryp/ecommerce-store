import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

// Component for individual product details
// Checks URL parameter and renders the corresponding product
const ProductDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const productsContext = useContext(ProductContext);

  // Check if productsContext contains the products array
  const products =
    productsContext && Array.isArray(productsContext.products) ? productsContext.products : null;

  // Check if products is available and is an array
  if (!products) {
    return <p>Loading...</p>;
  }

  console.log(products);

  const selectedProduct = products.find((p) => p.id === Number(id)); // Find the product that matches the id

  // If the product is not found, handle it
  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  console.log(id);

  return (
    <>
      <div>Product Details Page</div>
      <p>Product ID: {id}</p>
      <div>{selectedProduct.title}</div>
    </>
  );
};

export default ProductDetails;
