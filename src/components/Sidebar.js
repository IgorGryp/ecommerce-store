import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// React icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// Components
import CartItem from '../components/CartItem';
// Contexts
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } fixed top-0 w-full h-full bg-white shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='text-sm font-semibold uppercase'>
          Shoping Bag ({itemAmount})
        </div>
        {/* Close icon */}
        <div
          onClick={handleClose}
          className='flex items-center justify-center w-8 h-8 cursor-pointer'
        >
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className='flex flex-col py-4 mt-4 gap-y-3'>
        <div className='flex items-center justify-between w-full'>
          {/* Total price */}
          <div className='font-semibold uppercase'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* Clear cart icon */}
          <div
            onClick={clearCart}
            className='flex items-center justify-center w-12 h-12 py-4 text-xl text-white bg-red-500 cursor-pointer'
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={'/'}
          className='flex items-center justify-center w-full p-4 font-medium bg-gray-200 text-primary'
        >
          View cart
        </Link>
        <Link
          to={'/'}
          className='flex items-center justify-center w-full p-4 font-medium text-white bg-primary'
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
