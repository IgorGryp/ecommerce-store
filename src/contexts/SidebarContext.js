// Manages the sidebar’s open/close state using React Context API
import React, { useState, createContext } from 'react';

export const SidebarContext = createContext(); // State to track whether the sidebar is open or closed

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Function to close the sidebar
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
