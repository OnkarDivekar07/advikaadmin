import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../component/Adminlogin/Header";
import Sidebar from "../component/Adminlogin/Sidebar";

const OrderViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/order/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrder(data);
      } catch (err) {
        console.error("Error fetching order:", err);
        if (err.response?.status === 404) {
          setError("Order not found.");
          setTimeout(() => navigate("/orders"), 2000);
        } else {
          setError("Failed to fetch order.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, navigate]);

  const formatDate = (date) => {
    const d = new Date(date);
    return isNaN(d) ? "Invalid Date" : d.toLocaleString();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <section className="bg-white p-6 rounded shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Details
            </h1>

            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && order && (
              <div className="space-y-3 text-gray-700">
                <p><span className="font-medium">Order ID:</span> {order.id}</p>
                <p><span className="font-medium">Customer:</span> {order.user?.name || "N/A"}</p>
                <p><span className="font-medium">Date:</span> {formatDate(order.createdAt)}</p>
                <p><span className="font-medium">Status:</span> {order.status}</p>
                <p><span className="font-medium">Payment Status:</span> {order.paymentStatus}</p>
                <p><span className="font-medium">Total:</span> ₹{order.total?.toFixed(2) || "0.00"}</p>
 {/* Delivery Address */}
    <h3>Delivery Address:</h3>
    {order.address ? (
      <div className="delivery-address">
        <p><strong>Name:</strong> {order.address.name}</p>
        <p><strong>Street:</strong> {order.address.houseArea}</p>
        <p><strong>City:</strong> {order.address.city}, {order.address.state}</p>
        <p><strong>Pincode:</strong> {order.address.pincode}</p>
        <p><strong>Phone:</strong> {order.address.phone}</p>
      </div>
    ) : (
      <p>No address found for this order.</p>
    )}
                {order.orderItems?.length > 0 && (
  <div className="mt-6">
    <h2 className="text-lg font-semibold mb-2">Order Items</h2>
    <table className="w-full border text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Product</th>
          <th className="p-2 border">Quantity</th>
          <th className="p-2 border">Price</th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item) => (
          <tr key={item.id}>
            <td className="p-2 border">{item.product?.name || "N/A"}</td>
            <td className="p-2 border">{item.quantity}</td>
            <td className="p-2 border">₹{item.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default OrderViewPage;
