import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Phones from "../pages/Phones";
import Laptops from "../pages/Laptops";
import Repairs from "../pages/Repairs";
import Accessories from "../pages/Accessories";
import PhoneAccessories from "../pages/PhoneAccessories";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/phones" element={<Phones />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/phone-accessories" element={<PhoneAccessories />} />
      <Route path="/laptops" element={<Laptops />} />
      <Route path="/repairs" element={<Repairs />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
