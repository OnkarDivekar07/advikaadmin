// src/components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/dashboard", icon: "tachometer-alt", text: "Dashboard" },
    { to: "/products", icon: "box-open", text: "Products" },
    { to: "/orders", icon: "shopping-cart", text: "Orders" },
    { to: "/users", icon: "users", text: "Users" },
    { to: "/inventory", icon: "warehouse", text: "Inventory" },
    { to: "/content", icon: "image", text: "Content" },
    { to: "/settings", icon: "cogs", text: "Settings" },
  ];

  return (
    <aside className="w-64 bg-white rounded-lg shadow-md p-6 sticky top-20 h-fit">
      <nav className="space-y-3">
        {links.map(({ to, icon, text }, i) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={i}
              to={to}
              className={`flex items-center space-x-3 rounded-md px-3 py-2 ${
                isActive
                  ? "text-gray-700 font-semibold bg-blue-100"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <i className={`fas fa-${icon} ${isActive ? "text-blue-600" : ""}`}></i>
              <span>{text}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
