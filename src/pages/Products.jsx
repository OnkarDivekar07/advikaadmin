import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: "Red Sneaker Shoe", sku: "RS-001", price: "$50.00", stock: 120 },
    { id: 2, name: "Black Leather Handbag", sku: "BLH-002", price: "$80.00", stock: 45 },
    { id: 3, name: "Blue Cotton T-Shirt", sku: "BCT-003", price: "$20.00", stock: 300 },
    { id: 4, name: "Green Sports Watch", sku: "GSW-004", price: "$150.00", stock: 75 },
    { id: 5, name: "White Wireless Headphones", sku: "WWH-005", price: "$120.00", stock: 60 },
  ];

  return (
    <section aria-label="Products" className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Products</h2>
      <div className="mb-4">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
          <i className="fas fa-plus mr-2"></i>
          Add New Product
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sku}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock}</td>
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
  );
};

export default Products;