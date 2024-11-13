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
  // Header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Event listener for Header
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className='container flex items-center justify-between h-full mx-auto'>
        {/* Logo */}
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>
        {/* Cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='relative flex cursor-pointer'
        >
          <BsBag className='text-2xl' />
          <div className='absolute bg-red-500 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
