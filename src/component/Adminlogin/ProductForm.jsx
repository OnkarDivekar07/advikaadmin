import React, { useState } from "react";
import axios from "axios";

const categoryOptions = ["Truck", "Tempo", "Pickup", "Car", "Two Wheeler", "Tractor"];
const token = localStorage.getItem("token");

const ProductForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: [],
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
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prev) => ({
      ...prev,
      category: selected,
    }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const form = new FormData();

      // Append form fields to FormData
      Object.entries(formData).forEach(([key, val]) => {
        if (Array.isArray(val)) {
          val.forEach((v) => form.append(`${key}[]`, v));
        } else {
          form.append(key, val);
        }
      });

      // Append images
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

      <label className="block font-medium text-gray-700 mb-2">Select Categories</label>
<div className="grid grid-cols-2 gap-2">
  {categoryOptions.map((cat) => (
    <label key={cat} className="flex items-center space-x-2">
      <input
        type="checkbox"
        value={cat}
        checked={formData.category.includes(cat)}
        onChange={(e) => {
          const selected = [...formData.category];
          if (e.target.checked) {
            selected.push(cat);
          } else {
            const index = selected.indexOf(cat);
            if (index > -1) selected.splice(index, 1);
          }
          setFormData((prev) => ({ ...prev, category: selected }));
        }}
      />
      <span>{cat}</span>
    </label>
  ))}
</div>
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
