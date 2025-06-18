import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewArrivalsManagement = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNewArrivals = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/banner/new-arrivals`);
      setNewArrivals(res.data.data || []);
    } catch (error) {
      console.error('Error fetching new arrivals:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/banner/new-arrival/${id}`);
      // Remove the deleted item from the UI
      setNewArrivals(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing item from new arrivals:', error);
    }
  };

  useEffect(() => {
    fetchNewArrivals();
  }, []);

  if (loading) return <p>Loading New Arrivals...</p>;

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">New Arrivals</h3>
      <div className="grid grid-cols-4 gap-4">
        {newArrivals.map((item, index) => (
          <div key={index} className="border rounded-lg p-3 bg-gray-50 flex flex-col items-center">
            <img
              alt={item.name}
              className="rounded mb-3 w-full object-cover"
              src={item.images?.[0] || 'https://via.placeholder.com/150'}
              height="150"
              width="150"
            />
            <p className="font-medium text-gray-900 mb-1">{item.name}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm w-full"
              type="button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsManagement;
