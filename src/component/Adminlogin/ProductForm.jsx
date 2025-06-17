import React, { useState } from "react";
import axios from "axios";
const token = localStorage.getItem("token");
const ProductForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
    isNewArrival: false,
  });

  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setUploading(true);

  try {
    const form = new FormData();

    Object.entries(formData).forEach(([key, val]) => {
      form.append(key, val); // Browser handles type conversion
    });

    images.forEach((image) => {
      form.append("images", image);
    });

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/products`,
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Product created successfully!");
    if (onSuccess) onSuccess();
  } catch (error) {
    console.error("Upload failed:", error.response?.data || error.message);
    alert("Error uploading product");
  } finally {
    setUploading(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock Quantity"
        value={formData.stock}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      ></textarea>

      <label className="block">
        <input
          type="checkbox"
          name="isNewArrival"
          checked={formData.isNewArrival}
          onChange={handleChange}
          className="mr-2"
        />
        New Arrival?
      </label>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="w-full p-2 border rounded"
      />

      <div className="flex gap-4 mt-4">
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {uploading ? "Uploading..." : "Add Product"}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
