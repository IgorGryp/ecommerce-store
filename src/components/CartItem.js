// Component to render an individual cart item with controls for changing quantities or removing items
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// React icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
// Contexts
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext); // Destructure functions and properties from CartContext

  const { id, title, image, price, amount } = item; // Destructure product details from the `item` prop

  return (
    <div className='flex w-full py-2 font-light text-gray-500 border-b border-gray-200 gap-x-4 lg:px-6'>
      {/* Wrapper for the cart item */}
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* Product Image with Link to product details */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </Link>
        {/* Details Section */}
        <div className='flex flex-col w-full'>
          {/* Title and Remove Button */}
          <div className='flex justify-between mb-2'>
            {/* Product Title as a Link */}
            <Link
              to={`/product/${id}`}
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
            >
              {title}
            </Link>

            {/* Remove Button */}
            <div
              onClick={() => removeFromCart(id)} // Remove item from cart on click
              className='text-xl cursor-pointer'
            >
              <IoMdClose className='text-gray-500 transition hover:text-red-500' />
            </div>
          </div>
          {/* Quantity and Price Details */}
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* Quantity Controls */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* Decrease Quantity Button */}
              <div
                onClick={() => decreaseAmount(id)}
                className='flex items-center justify-center flex-1 h-full cursor-pointer'
              >
                <IoMdRemove />
              </div>
              {/* Current Quantity */}
              <div className='flex items-center justify-center h-full px-2'>
                {amount}
              </div>
              {/* Increase Quantity Button */}
              <div
                onClick={() => increaseAmount(id)}
                className='flex items-center justify-center flex-1 h-full cursor-pointer '
              >
                <IoMdAdd />
              </div>
            </div>

            {/* Single Item Price */}
            <div className='flex items-center justify-around flex-1'>
              $ {price}
            </div>

            {/* Total Price for this item */}
            <div className='flex items-center justify-end flex-1 font-medium text-primary'>
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
