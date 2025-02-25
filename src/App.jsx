import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "./components/AuthPage"; // Combined login/signup page
import Dashboard from "./components/Dashboard";
import { useAuth } from "./context/AuthContext";
import AdminDashboard from "./components/AdminDashboard";
function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
}

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          /><Route
          path="/admindashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
