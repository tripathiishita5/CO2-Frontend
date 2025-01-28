import React from 'react';
import Navbar from '../Navbar';

 
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      
        {children}  {/* This will render the page content */}

    </div>
  );
}
 
export default Layout;