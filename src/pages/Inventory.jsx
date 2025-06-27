import React from 'react';
import Header from '../component/Adminlogin/Header'; // Adjust the path as needed
import Sidebar from '../component/Adminlogin/Sidebar'; // Adjust the path as needed
import Footer from '../component/Adminlogin/footer'; // Adjust the path as needed

const Inventory = () => {
  const inventoryItems = [
    { id: 1, productName: "Red Sneaker Shoe", sku: "RS-001", stock: 120, reorderLevel: 30 },
    { id: 2, productName: "Black Leather Handbag", sku: "BLH-002", stock: 45, reorderLevel: 10 },
    { id: 3, productName: "Blue Cotton T-Shirt", sku: "BCT-003", stock: 300, reorderLevel: 50 },
    { id: 4, productName: "Green Sports Watch", sku: "GSW-004", stock: 75, reorderLevel: 20 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <section aria-label="Inventory" className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reorder Level</th>
                  <th className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.productName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.sku}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.reorderLevel}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a className="text-blue-600 hover:text-blue-900" href="#">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Inventory;
