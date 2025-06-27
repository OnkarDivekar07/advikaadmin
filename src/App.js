// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/AdminLoginPage/LoginPage';
import ContentPage from './pages/Content';
import AdminDashboard from './pages/Dashboard';
import ProductsPage from './pages/Products';
import Order from   './pages/Orders';
import OrderViewPage from "./pages/orderviewpage";
import Users from  "./pages/Users"
import Inventory from './pages/Inventory';
import  Settings from "./pages/Settings"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<Order/>} />
        <Route path="/orders/:id" element={<OrderViewPage/>} /> 
        <Route path="/users" element={<Users/>} /> 
        <Route path="/inventory" element={<Inventory/>} /> 
        <Route path="/settings" element={<Settings/>} /> 
      </Routes>
    </Router>
  );
}


export default App;
