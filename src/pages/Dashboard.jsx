// src/pages/AdminDashboard.jsx
import Header from "../component/Adminlogin/Header";
import Sidebar from "../component/Adminlogin/Sidebar";
import DashboardCards from "../component/Adminlogin/DashboardOverview";
import Footer from "../component/Adminlogin/footer";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 max-w-7xl mx-auto px-4 lg:px-8 sm:px-6 py-6 space-x-6 flex-col md:flex-row">
        <Sidebar />
        <DashboardCards />
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
