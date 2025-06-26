import { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardCards() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token'); // Adjust if you store token differently
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    { id: "total-products", icon: "box-open", label: "Total Products", value: stats.totalProducts, color: "blue" },
    { id: "total-orders", icon: "shopping-cart", label: "Total Orders", value: stats.totalOrders, color: "green" },
    { id: "total-users", icon: "users", label: "Total Users", value: stats.totalUsers, color: "yellow" },
    { id: "monthly-revenue", icon: "dollar-sign", label: "Total Revenue", value: `₹${stats.totalRevenue}`, color: "red" },
  ];

  return (
    <main className="flex-1 space-y-6">
      <section aria-label="Dashboard overview" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="dashboard">
        {cards.map(({ id, icon, label, value, color }, i) => (
          <div key={i} aria-labelledby={id} className="bg-white rounded-lg shadow p-5 flex items-center space-x-4" role="region">
            <div className={`p-3 bg-${color}-100 text-${color}-600 rounded-full`}>
              <i className={`fas fa-${icon} fa-2x`}></i>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500" id={id}>{label}</p>
              <p className="text-2xl font-semibold text-gray-800">{value}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default DashboardCards;
