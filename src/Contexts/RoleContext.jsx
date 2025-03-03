import { createContext, useState, useEffect, useContext } from "react";
import { getUserRole } from "../http/userService";

export const RoleContext = createContext(null);

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch the role (can be called after login)
  const fetchRole = async () => {
    setLoading(true);
    try {
      const response = await getUserRole();
      if (response.role === null || response.role == "") throw new Error("Failed to fetch role");
      setRole(response.role);
    } catch (error) {
      console.error("Error fetching role:", error);
      setRole(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch role on initial load
  useEffect(() => {
    fetchRole();
  }, []);

  return (
    <RoleContext.Provider value={{ role, loading, fetchRole }}>
      {children}
    </RoleContext.Provider>
  );
};

// Custom Hook for easier role access
export const useRole = () => useContext(RoleContext);