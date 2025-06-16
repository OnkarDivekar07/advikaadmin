import React from 'react';

const NewArrivalsManagement = () => {
  const newArrivals = [
    {
      src: "https://storage.googleapis.com/a1aa/image/ec5345a5-a9b1-4c2b-1033-ff144b5b37af.jpg",
      name: "White Running Shoes",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/62ba4e72-3b04-4940-828b-2e3c28f2039c.jpg",
      name: "Black Leather Wallet",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/eb8c5796-f8e4-4a00-5730-2959c2ffb028.jpg",
      name: "Blue Denim Jacket",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/b6eca3b0-2e8d-4564-62da-4b241ab367e4.jpg",
      name: "Silver Hoop Earrings",
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">New Arrivals</h3>
      <div className="grid grid-cols-4 gap-4">
        {newArrivals.map((item, index) => (
          <div key={index} className="border rounded-lg p-3 bg-gray-50 flex flex-col items-center">
            <img
              alt={item.name}
              className="rounded mb-3 w-full object-cover"
              src={item.src}
              height="150"
              width="150"
            />
            <p className="font-medium text-gray-900 mb-1">{item.name}</p>
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm w-full" type="button">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsManagement;