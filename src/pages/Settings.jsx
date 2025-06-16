import React, { useState } from 'react';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleNotificationsChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section aria-label="Settings" className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700">User  Preferences</h3>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={handleNotificationsChange}
            className="mr-2"
          />
          <label className="text-gray-600">Enable Notifications</label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeChange}
            className="mr-2"
          />
          <label className="text-gray-600">Enable Dark Mode</label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700">Account Settings</h3>
        <div className="mt-2">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none">
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;