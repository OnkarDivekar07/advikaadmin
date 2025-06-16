// src/component/Adminlogin/BannerManagement.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BannerManagement = () => {
  const [banners, setBanners] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:5000/api/banner';

  // Fetch banners from API
  const fetchBanners = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      if (Array.isArray(res.data)) {
        setBanners(res.data);
      } else {
        setBanners(res.data ? [res.data] : []); // Wrap single object in array
      }
    } catch (error) {
      console.error('Error fetching banners:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Handle form submit (upload banner)
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      await axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Banner uploaded successfully');
      setSelectedImage(null);
      setPreviewImage(null);
      fetchBanners(); // Refresh after upload
    } catch (error) {
      console.error('Error uploading banner:', error);
      alert('Failed to upload banner');
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Homepage Banners</h3>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="mb-6 space-y-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />
        {previewImage && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 mb-1">Preview:</p>
            <img src={previewImage} alt="Preview" className="w-full max-w-md rounded shadow" />
          </div>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={!selectedImage}
        >
          Upload Banner
        </button>
      </form>

      {/* Existing Banners */}
      {loading ? (
        <p className="text-gray-500">Loading banners...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {banners.map((banner, index) => (
            <div key={index} className="border rounded-lg p-3 bg-gray-50 flex flex-col items-center">
              <img
                alt={`Banner ${index + 1}`}
                src={banner.imageUrl}
                className="rounded mb-3 w-full h-[150px] object-cover"
              />
              {/* Future: Edit / Delete buttons can go here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerManagement;
