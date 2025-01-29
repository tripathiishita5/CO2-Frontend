import Navbar from '../Navbar'; // Assuming Navbar component is in this path
 
const Layout = ({ children, showNavbar = true }) => {
  return (
    <div>
      {showNavbar && <Navbar />}   
      <main>
        {children}
      </main>
    </div>
  );
};
 
export default Layout;