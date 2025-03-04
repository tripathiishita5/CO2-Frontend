import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import UserAccess from "./Pages/UserAccess";
import Dashboard from "./Pages/Dashboard/Table";
import Input from "./Pages/Input";
import ActivityScope from "./Pages/ActivityScope";
import Unauthorized from "./Pages/Unauthorized";
import EmissionFactors from "./Pages/EmissionFactors";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import LoadingScreen from "./Components/LoadingScreen";
import { RoleProvider } from "./contexts/RoleContext";
import { LoadingProvider, useLoading } from "./Contexts/LoadingContext";
import { useEffect } from "react";
import { setupInterceptors } from "./http/apiClient";


function App() {
  return (
    <RoleProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </RoleProvider>
  );
}

function AppContent() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setupInterceptors(setLoading); // Set up Axios interceptors
  }, []);

  return (
    <Router>
      <LoadingScreen />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["USER", "MANAGER", "ADMIN"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/input-form"
          element={
            <ProtectedRoute allowedRoles={["USER", "MANAGER", "ADMIN"]}>
              <Input />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-rights"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <UserAccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activity-scope"
          element={
            <ProtectedRoute allowedRoles={["MANAGER", "ADMIN"]}>
              <ActivityScope />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emission-factors"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <EmissionFactors />
            </ProtectedRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
