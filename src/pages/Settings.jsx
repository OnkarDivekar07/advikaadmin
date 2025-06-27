import { useNavigate } from 'react-router-dom';
import React from 'react';
import Header from "../component/Adminlogin/Header";
import Sidebar from "../component/Adminlogin/Sidebar";

const Settings = () => {
  const navigate = useNavigate(); // ✅ move this here

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // ✅ now it works
  };

  return (
     <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
    <section aria-label="Settings" className="bg-white rounded-lg shadow p-6">
      {/* ... other settings ... */}

      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700">Account Settings</h3>
        <div className="mt-2">
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </div>
      </div>
    </section>
    </main>
    </div>
    </div>
  );
};

export default Settings;
