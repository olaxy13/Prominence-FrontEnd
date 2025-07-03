import React, { useState } from "react";
import { useNavigate } from "react-router";

// Mock data for phones
const phoneData = [
  {
    id: 1,
    name: "iPhone 15",
    brand: "Apple",
    price: 999,
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
  },
  {
    id: 2,
    name: "Galaxy S24",
    brand: "Samsung",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71qZy8c7QwL._AC_UY218_.jpg",
  },
  {
    id: 3,
    name: "Pixel 8",
    brand: "Google",
    price: 799,
    image: "https://m.media-amazon.com/images/I/81Qw5Zl+JwL._AC_UY218_.jpg",
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 749,
    image: "https://m.media-amazon.com/images/I/61Qe0euJJZL._AC_UY218_.jpg",
  },
  {
    id: 5,
    name: "iPhone SE",
    brand: "Apple",
    price: 429,
    image: "https://m.media-amazon.com/images/I/81-fNm5gQML._AC_UY218_.jpg",
  },
  {
    id: 6,
    name: "Galaxy A55",
    brand: "Samsung",
    price: 499,
    image: "https://m.media-amazon.com/images/I/71p1r6rQGGL._AC_UY218_.jpg",
  },
];

const brands = ["Apple", "Samsung", "Google", "OnePlus"];

const Phones = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const navigate = useNavigate();

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredPhones =
    selectedBrands.length === 0
      ? phoneData
      : phoneData.filter((phone) => selectedBrands.includes(phone.brand));

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Sidebar Filters */}
      <aside className="w-full h-fit md:w-64 mb-6 md:mb-0 bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="accent-blue-600 w-4 h-4"
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </aside>
      {/* Product Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhones.map((phone) => (
            <div
              onClick={() => navigate(`/products/${phone.id}`)}
              key={phone.id}
              className="border border-gray-200 rounded-lg bg-white shadow hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center cursor-pointer"
            >
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-44 object-contain mb-4 rounded"
              />
              <h4 className="font-semibold text-lg mb-1">{phone.name}</h4>
              <p className="text-gray-500 mb-1">{phone.brand}</p>
              <p className="font-bold text-blue-600 text-xl">${phone.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Phones;
