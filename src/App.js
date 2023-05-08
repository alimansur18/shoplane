import './App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Homepage from './pages/homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Categorypage from './pages/CategoryPage';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/Cartpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/category/:category" element={<Categorypage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/products/detail/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
