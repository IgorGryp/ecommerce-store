// This component displays the logo and cart icon with item count, and changes appearance when scrolling
// Component to display the website header
import React, { useContext, useEffect, useState } from 'react';
// Contexts
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
// React icons
import { BsBag } from 'react-icons/bs';
// Logo
import Logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to track if the header is active (scrolled down)
  const [isActive, setIsActive] = useState(false);
  // Accessing context values
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Adds a scroll event listener to change the header's appearance when scrolling
  useEffect(() => {
    // Define the scroll handler
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      console.log('Scrolling');
    };
    // Add the event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup: Remove the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Header container with dynamic classes for styling based on `isActive`
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className='container flex items-center justify-between h-full mx-auto sm:pl-6'>
        {/* Logo Section */}
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>
        {/* Cart Icon Section */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='relative flex cursor-pointer sm:pr-6'
        >
          {/* Shopping Bag Icon */}
          <BsBag className='text-2xl' />
          {/* Cart Item Count Badge */}
          <div className='absolute bg-red-500 sm:right-4 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount} {/* Displays the total number of items in the cart */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
