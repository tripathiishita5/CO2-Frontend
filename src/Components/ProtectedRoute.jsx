import { Navigate } from "react-router-dom";
import { useRole } from "../contexts/RoleContext";
import LoadingScreen from "./LoadingScreen";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { role, loading } = useRole();

  if (loading) return <LoadingScreen />; // Show loading screen while fetching role
  if (!role) return <Navigate to="/login" replace />; // Redirect to login if not authenticated

  // Ensure allowedRoles is an array, then check if role exists in it
  const isAllowed = Array.isArray(allowedRoles) ? allowedRoles.includes(role) : false;
  
  if (!isAllowed) return <Navigate to="/unauthorized" replace />; // Redirect if role mismatch

  return children; // Render the protected component
};

export default ProtectedRoute;