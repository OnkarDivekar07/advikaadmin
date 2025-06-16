// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../component/Adminlogin/Logo';
import InputField from '../../component/Adminlogin/InputField';
import SubmitButton from '../../component/Adminlogin/SubmitButton';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // 👈 Add this

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, formData);
      console.log('✅ Login successful:', response.data);

      // OPTIONAL: Store token if you want
      // localStorage.setItem('token', response.data.token);

      alert('Login successful');

      navigate('/dashboard');  // 👈 Navigate to Dashboard after login
    } catch (err) {
      console.error('❌ Login failed:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <Logo />
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Admin Panel Login
        </h1>

        {error && (
          <p className="mb-4 text-red-600 text-center font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <InputField
            label="Email address"
            type="email"
            name="email"
            placeholder="admin@example.com"
            iconClass="fas fa-envelope"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
            iconClass="fas fa-lock"
            value={formData.password}
            onChange={handleChange}
          />
          <SubmitButton text={loading ? 'Logging in...' : 'Login'} />
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          © 2024 Admin Panel. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
