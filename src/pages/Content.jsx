// src/pages/ContentManagement.jsx
import React from 'react';
import BannerManagement from '../component/Adminlogin/bannerManagemen';
import NewArrivalsManagement from '../component/Adminlogin/NewArrivalsManagement';
import Sidebar from "../component/Adminlogin/Sidebar";
import Header from "../component/Adminlogin/Header"; // Don't forget to import Header
import Footer from "../component/Adminlogin/footer"; // And Footer

const ContentManagement = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <section
            aria-label="Content management"
            className="bg-white rounded-lg shadow p-6"
            id="content"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Content Management
            </h2>
            <div className="space-y-6">
              <BannerManagement />
              <NewArrivalsManagement />
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContentManagement;
