import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Logo from "../../assets/prominence-logo.png";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useCart } from "../../services/CartContext";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 10 * 60 * 1000,
  });
  const products = data?.data?.data || [];
  const filtered =
    search.trim().length > 0
      ? products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

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
            <div className="w-[60px] sm:w-[100px]">
              <img
                src={Logo}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </NavLink>
          {/* Search Input */}
          <div className="flex-1 flex flex-col items-center px-4 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
              autoComplete="off"
            />
            {showDropdown && filtered.length > 0 && (
              <div className="absolute top-full left-0 w-full max-w-md bg-white border border-gray-200 rounded shadow z-500 mt-1 max-h-64 overflow-y-auto">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center gap-2"
                    onMouseDown={() => {
                      setShowDropdown(false);
                      setSearch("");
                      navigate(`/products/${product.id}`);
                    }}
                  >
                    <img
                      src={product.photos?.[0] || product.image}
                      alt={product.name}
                      className="w-8 h-8 object-cover rounded"
                    />
                    <span>{product.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Cart Icon */}
          <NavLink to="/cart" className="relative flex items-center">
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
