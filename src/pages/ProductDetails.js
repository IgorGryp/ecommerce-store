// Component for displaying detailed information about a specific product
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// Contexts
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

// Component for individual product details
// Checks URL parameter and renders the corresponding product
const ProductDetails = () => {
  const { id } = useParams(); // Extracting the `id` parameter from the URL
  const { products } = useContext(ProductContext); // Accessing the list of products from the ProductContext
  const { addToCart } = useContext(CartContext); // Accessing the addToCart function from the CartContext

  // Finding the specific product by matching the id
  const product = products.find((item) => item.id === Number(id));

  // Show a loading message if the products list is empty
  if (!products) {
    return (
      <section className='flex items-center justify-center h-screen'>
        Loading...
      </section>
    );
  }

  // Destructuring the product properties for easier access
  const { title, price, description, image } = product;

  return (
    <section className='flex items-center h-screen pt-32 pb-12 lg:py-32'>
      <div className='container mx-auto'>
        {/* Wrapper for image and product details */}
        <div className='flex flex-col items-center lg:flex-row'>
          {/* Image section */}
          <div className='flex items-center justify-center flex-1 mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
          </div>

          {/* Text section */}
          <div className='flex-1 text-center lg:text-left'>
            {/* Product title */}
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
              {title}
            </h1>
            {/* Product price */}
            <div className='mb-6 text-xl font-medium text-red-500'>
              $ {price}
            </div>
            {/* Product description */}
            <p className='mb-8'>{description}</p>
            {/* Add to cart button */}
            <button
              onClick={() => addToCart(product, product.id)}
              className='px-8 py-4 text-white bg-primary'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
