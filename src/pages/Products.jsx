import React, { useState } from "react";
import { useNavigate } from "react-router";
import ProductGrid from "../components/common/ProductGrid";

const MOCK = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Phones",
    price: 999,
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
  },
  {
    id: 2,
    name: "Galaxy S24",
    category: "Phones",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71qZy8c7QwL._AC_UY218_.jpg",
  },
  {
    id: 3,
    name: "Pixel 8",
    category: "Phones",
    price: 799,
    image: "https://m.media-amazon.com/images/I/81Qw5Zl+JwL._AC_UY218_.jpg",
  },
  {
    id: 4,
    name: "MacBook Pro",
    category: "Laptops",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    category: "Laptops",
    price: 1499,
    image: "https://m.media-amazon.com/images/I/71w4pP5nQWL._AC_UY218_.jpg",
  },
  {
    id: 6,
    name: "HP Spectre x360",
    category: "Laptops",
    price: 1399,
    image: "https://m.media-amazon.com/images/I/71w4pP5nQWL._AC_UY218_.jpg",
  },
  {
    id: 7,
    name: "Phone Case",
    category: "Phone Accessories",
    price: 29,
    image: "https://m.media-amazon.com/images/I/61ZbF1V+QwL._AC_UY218_.jpg",
  },
  {
    id: 8,
    name: "Wireless Charger",
    category: "Phone Accessories",
    price: 49,
    image: "https://m.media-amazon.com/images/I/61ZbF1V+QwL._AC_UY218_.jpg",
  },
  {
    id: 9,
    name: "Screen Protector",
    category: "Phone Accessories",
    price: 19,
    image: "https://m.media-amazon.com/images/I/61ZbF1V+QwL._AC_UY218_.jpg",
  },
];

const categories = ["Phones", "Laptops", "Phone Accessories"];

export default function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? MOCK
      : MOCK.filter((product) => selectedCategories.includes(product.category));

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Sidebar Filters */}
      <aside className="w-full h-fit md:w-64 mb-6 md:mb-0 bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="accent-blue-600 w-4 h-4"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </aside>
      {/* Product Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((filteredProduct) => (
            <div
              key={filteredProduct.id}
              className="border border-gray-200 rounded-lg bg-white shadow hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center cursor-pointer"
              onClick={() => navigate(`/product/${filteredProduct.id}`)}
            >
              <img
                src={filteredProduct.image}
                alt={filteredProduct.name}
                className="w-full h-44 object-contain mb-4 rounded"
              />
              <h4 className="font-semibold text-lg mb-1">
                {filteredProduct.name}
              </h4>
              <p className="text-gray-500 mb-1">{filteredProduct.brand}</p>
              <p className="font-bold text-blue-600 text-xl">
                ${filteredProduct.price}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
