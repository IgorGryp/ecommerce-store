// Component for displaying a single product card
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// React icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';
// Contexts
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Destructure the `addToCart` function from CartContext

  const { id, image, category, title, price } = product; // Destructure the product properties for easy access

  return (
    <div>
      {/* Product Image Section */}
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='flex items-center justify-center w-full h-full'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            {/* Product image */}
            <img
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={image}
              alt=''
            />
          </div>
        </div>
        {/* Action Buttons (Add to Cart & View Details) */}
        <div className='absolute flex flex-col items-center justify-center p-2 transition-all duration-300 opacity-0 -right-11 group-hover:right-2 top-2 group-hover:opacity-100 gap-y-2'>
          {/* Add to Cart Button */}
          <button onClick={() => addToCart(product, id)}>
            <div className='flex items-center justify-center w-12 h-12 text-white bg-red-500'>
              <BsPlus className='text-3xl' /> {/* Add Icon */}
            </div>
          </button>

          {/* View Product Details Button */}
          <Link
            to={`/product/${id}`}
            className='flex items-center justify-center w-12 h-12 bg-white text-primary drop-shadow-xl'
          >
            <BsEyeFill /> {/* View Icon */}
          </Link>
        </div>
      </div>

      {/* Product Information Section */}
      <div>
        {/* Product Category */}
        <div className='mb-1 text-sm text-gray-500 capitalize'>{category}</div>
        {/* Product Title */}
        <Link to={`/product/${id}`}>
          <h2 className='mb-1 font-semibold '>{title}</h2>
        </Link>
        {/* Product Price */}
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
