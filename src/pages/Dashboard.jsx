import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <nav className="space-y-3">
          <button 
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/portfolio-form")}
          >
            Create/Edit Portfolio
          </button>
          <button 
            className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={() => navigate("/portfolio-preview")}
          >
            Preview Portfolio
          </button>
          <button 
            className="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            onClick={() => navigate("/generate-pdf")}
          >
            Generate PDF
          </button>
          <button 
            className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
