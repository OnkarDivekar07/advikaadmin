import React from 'react';

const Users = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Editor", status: "Active" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Viewer", status: "Inactive" },
    { id: 4, name: "Bob Martin", email: "bob.martin@example.com", role: "Admin", status: "Active" },
  ];

  return (
    <section aria-label="Users" className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Users</h2>
      <div className="mb-4">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
          <i className="fas fa-plus mr-2"></i>
          Add New User
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.status}</td>
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

export default Users;