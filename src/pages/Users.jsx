import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../component/Adminlogin/Header';
import Sidebar from '../component/Adminlogin/Sidebar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // or sessionStorage if you're using that
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/admin/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data); // assuming the backend sends { users: [...] }
      } catch (error) {
        console.error('Failed to fetch users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Users</h2>

            {loading ? (
              <p>Loading...</p>
            ) : (
             <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
    <thead className="bg-gray-100 text-left text-gray-600 font-semibold">
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Phone</th>
        <th className="px-4 py-2">Role</th>
        <th className="px-4 py-2">Total Orders</th>
        <th className="px-4 py-2">Total Spent</th>
        <th className="px-4 py-2">Last Order</th>
        <th className="px-4 py-2">City</th>
        <th className="px-4 py-2">Joined On</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={user.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <td className="px-4 py-2">{user.name}</td>
          <td className="px-4 py-2">{user.email}</td>
          <td className="px-4 py-2">{user.phone}</td>
          <td className="px-4 py-2">{user.role || 'Customer'}</td>
          <td className="px-4 py-2">{user.totalOrders}</td>
          <td className="px-4 py-2">₹{user.totalSpent}</td>
          <td className="px-4 py-2">
            {user.lastOrderDate
              ? new Date(user.lastOrderDate).toLocaleDateString()
              : 'N/A'}
          </td>
          <td className="px-4 py-2">{user.addresses?.[0]?.city || '—'}</td>
          <td className="px-4 py-2">
            {new Date(user.joinedOn).toLocaleDateString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div> )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Users;
