import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
// react icons
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-pink-200">
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className="relative flex cursor-pointer">
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
