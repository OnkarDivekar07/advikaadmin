import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, orderId: "ORD-001", customer: "John Doe", date: "2024-06-01", total: "$150.00", status: "Shipped" },
    { id: 2, orderId: "ORD-002", customer: "Jane Smith", date: "2024-06-02", total: "$200.00", status: "Pending" },
    { id: 3, orderId: "ORD-003", customer: "Alice Johnson", date: "2024-06-03", total: "$300.00", status: "Delivered" },
    { id: 4, orderId: "ORD-004", customer: "Bob Martin", date: "2024-06-04", total: "$120.00", status: "Cancelled" },
  ];

  return (
    <section aria-label="Orders" className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Orders</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="relative px-6 py-3"><span className="sr-only">View</span></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.orderId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-600 hover:text-blue-900" href="#">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Orders;