import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Login from './Pages/Login.jsx';
import UserAccess from './Pages/UserAccess.jsx';
import Dashboard from './Pages/Dashboard/Table.jsx';
import Input from './Pages/Input.jsx'
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout showNavbar={false}><Login /></Layout>} /> Login page without Navbar
        {/* <Route path="/login" element={<Layout showNavbar={false}><Login /></Layout>} /> Login page without Navbar */}
        <Route path="/dashboard" element={<Layout showNavbar={true}><Dashboard /></Layout>} /> {/* Dashboard with Navbar */}
        <Route path="/input-form" element={<Layout showNavbar={true}><Input /></Layout>} /> {/* Dashboard with Navbar */}
        <Route path="/user-rights" element={<Layout showNavbar={true}><UserAccess /></Layout>} /> {/* User access page with Navbar */}
        <Route path="/user-scope" element={<Layout showNavbar={true}><Dashboard /></Layout>} /> {/* Dashboard with Navbar */}
         
            
 
      </Routes>
      
    </Router>
  );
}
 
export default App;
 
