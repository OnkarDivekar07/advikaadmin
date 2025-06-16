// src/components/DashboardCards.jsx
function DashboardCards() {
  const cards = [
    { id: "total-products", icon: "box-open", label: "Total Products", value: "1,234", color: "blue" },
    { id: "total-orders", icon: "shopping-cart", label: "Total Orders", value: "3,567", color: "green" },
    { id: "total-users", icon: "users", label: "Total Users", value: "8,910", color: "yellow" },
    { id: "monthly-revenue", icon: "dollar-sign", label: "Monthly Revenue", value: "$123,456", color: "red" },
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
