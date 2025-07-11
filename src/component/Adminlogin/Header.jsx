// src/components/Header.jsx
function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6 sm:flex sm:items-center sm:justify-between h-16">
        <div className="flex items-center space-x-3">
          <img
            src="/admin-logo.png"
            alt="E-commerce Admin Panel logo"
            className="h-10 w-10 rounded"
          />
          <h1 className="text-2xl font-semibold text-gray-800">Advika  Decore Admin</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative text-gray-600 hover:text-blue-600 focus:outline-none">
            <i className="fas fa-bell fa-lg"></i>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold">5</span>
          </button>

          <button className="flex items-center space-x-2 focus:outline-none">
            <span className="hidden sm:block text-gray-700 font-medium">ADMIN</span>
            <i className="fas fa-chevron-down text-gray-500"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
