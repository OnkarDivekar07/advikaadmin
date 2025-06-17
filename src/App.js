// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/AdminLoginPage/LoginPage';
import ContentPage from './pages/Content';
import AdminDashboard from './pages/Dashboard';
import ProductsPage from './pages/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}


export default App;
