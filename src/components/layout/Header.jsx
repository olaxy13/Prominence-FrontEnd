import { useState, useContext } from "react";
import { NavLink } from "react-router";
import Logo from "../../assets/prominence-logo.png";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useCart } from "../../services/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navItems = [
    { to: "/products", label: "Products" },
    { to: "/laptops", label: "Laptops" },
    { to: "/accessories", label: "Laptop Accessories" },
    { to: "/phones", label: "Phones" },
    { to: "/repairs", label: "Repair Services" },
  ];

  return (
    <header className="">
      <nav className="container mx-auto flex flex-col p-4">
        {/* First Row: Logo, Search, Cart */}
        <div className="flex justify-between items-center w-full mb-2">
          {/* Logo */}
          <NavLink to="/" className="font-bold text-xl flex items-center">
            <div className="w-[100px]">
              <img
                src={Logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </NavLink>
          {/* Search Input */}
          <div className="flex-1 flex justify-center px-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Cart Icon */}
          <NavLink to="/cart" className="relative flex items-center">
            {/* Simple cart icon (SVG) */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .96.343 1.09.835l.383 1.437M7.5 14.25A3.75 3.75 0 0011.25 18h1.5a3.75 3.75 0 003.75-3.75V6.75A3.75 3.75 0 0012.75 3h-1.5A3.75 3.75 0 007.5 6.75v7.5z"
              />
            </svg> */}
            <MdOutlineShoppingCartCheckout className="text-[32px] cursor-pointer" />
            {/* Cart count badge */}
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
              {cartCount}
            </span>
          </NavLink>
        </div>
        {/* Second Row: Menu Items - always visible, horizontally scrollable on mobile */}
        <div
          className="w-full flex flex-row md:space-x-4  md:items-center bg-white z-50 transition-all duration-300 overflow-x-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                (isActive
                  ? "text-blue-600 font-semibold underline "
                  : "text-gray-800 hover:text-blue-600 ") +
                "text-lg px-3 py-2 whitespace-nowrap"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
