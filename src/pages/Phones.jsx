import React, { useState } from "react";
import { useNavigate } from "react-router";
import { fetchPhone } from "../services/data";
import { useQuery } from "@tanstack/react-query";
import Loader from '../assets/loader.gif'



const Phones = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["phone"],
    queryFn: fetchPhone,
    staleTime: 10 * 60 * 1000, // cache for 10 minutes
  });

  const phoneData = data?.data || [];
  const brands = Array.from(new Set(phoneData.map((l) => l.brand)));

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredPhones =
    selectedBrands.length === 0
      ? phoneData
      : phoneData.filter((phone) => selectedBrands.includes(phone.brand));

  if (isLoading) {
      return (
        <div className="flex justify-center items-center gap-8 p-4 md:p-8 bg-gray-50 min-h-screen">
          <img src={Loader} alt="loader gif" className="w-10 h-10"/>
        </div>
      );
    }
  
    if (isError) {
      return (
        <div className="flex justify-center items-center gap-8 p-4 md:p-8 bg-gray-50 min-h-screen">
          <p>Failed to load accessories. Please try again later.</p>
        </div>
      );
    }
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
                src={phone.photos[0]}
                alt={phone.name}
                className="w-full h-44 object-contain mb-4 rounded"
              />
              <h4 className="font-semibold text-lg mb-1">{phone.name}</h4>
              <p className="text-gray-500 mb-1">{phone.brand}</p>
              <p className="font-bold text-blue-600 text-xl">₦{Number(phone.price).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Phones;
