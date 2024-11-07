import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// React icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// Components
import CartItem from '../components/CartItem';
// Sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } fixed top-0 w-full h-full bg-white shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="text-sm font-semibold uppercase">Shoping Bag (0)</div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
