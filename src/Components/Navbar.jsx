import { LogOut } from "lucide-react";
import React from "react";
import { logout } from "../http/authService";
import { useLocation } from "react-router-dom";
import { useRole } from "../contexts/RoleContext";

const Navbar = () => {
  const { role, loading } = useRole();
  const location = useLocation();

  async function handleLogout() {
    try {
      const response = await logout();
      console.log(response);
      
      if (response.result === true) { 
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  // Hide navbar on login page
  if (location.pathname === "/" || location.pathname === "/login" || !role) {
    return null;
  }

  // Show loading until role is determined
  if (loading) {
    return null;
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex items-center justify-between pr-8 py-2">
        {/* Logo Section */}
        <div className="p-4">
          <img
            src="https://www.metermarket.co.uk/assets/manufacturers/_manufacturerTile2x/logo_secure.png"
            alt="Secure Meter Logo"
            className="h-12"
          />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex md:items-center md:space-x-8" id="navbarNav">
          <a href="/dashboard" className="text-[#820C59] hover:bg-[#F3E5F5] hover:text-[#6F1747] px-3 py-2 transition-all duration-300 rounded-md">
            Dashboard
          </a>

          <a href="/input-form" className="text-[#820C59] hover:bg-[#F3E5F5] hover:text-[#6F1747] px-3 py-2 transition-all duration-300 rounded-md">
            Input Form
          </a>

          {/* Show "User Rights" only for MANAGER or ADMIN */}
          {role == "ADMIN" && (
            <a href="/user-rights" className="text-[#820C59] hover:bg-[#F3E5F5] hover:text-[#6F1747] px-3 py-2 transition-all duration-300 rounded-md">
              User Rights
            </a>
          )}

          {/* Show "Activity Scope" only for MANAGER or ADMIN */}
          {["MANAGER", "ADMIN"].includes(role) && (
            <a href="/activity-scope" className="text-[#820C59] hover:bg-[#F3E5F5] hover:text-[#6F1747] px-3 py-2 transition-all duration-300 rounded-md">
              Activity Data
            </a>
          )}

          <button onClick={handleLogout} title="Logout" className="cursor-pointer p-2 hover:bg-[#F3E5F5] rounded-md">
            <LogOut color="#820C59" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;