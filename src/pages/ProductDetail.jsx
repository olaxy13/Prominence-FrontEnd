import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useCart } from "../services/CartContext";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/data";
import { useNavigate } from "react-router";
import Loader from "../assets/loader.gif";
import { MdErrorOutline } from "react-icons/md";

export default function ProductDetail() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [mainImg, setMainImg] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["productFetch", id],
    queryFn: () => fetchProductById(id),
    staleTime: 10 * 60 * 1000, // cache for 10 minutes
  });

  const product = data?.data?.data;


  useEffect(() => {
    if (product?.photos?.length) {
      setMainImg(product.photos[0]);
    }
  }, [product]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <img src={Loader} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-96 text-red-600">
        <MdErrorOutline size={48} className="mb-2" />
        <p>Details can't be fetched</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-fit flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        &#8592; Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={mainImg}
            alt={product?.name}
            className="rounded w-full h-80 object-contain mb-4"
          />
          <div className="flex gap-2 mt-2">
            {product?.photos?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                  mainImg === img ? "border-blue-600" : "border-transparent"
                }`}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{product?.name}</h2>
          <p className="text-green-600 font-bold text-xl mt-2">
            ₦{Number(product?.price).toLocaleString()}
          </p>
          <div className="mt-2">
            <span className="font-semibold">Brand:</span>{" "}
            {product?.brand || "N/A"}
          </div>
          <div className="mt-1">
            <span className="font-semibold">Model:</span>{" "}
            {product?.model || "N/A"}
          </div>
          <div className="mt-1">
            <span className="font-semibold">Color:</span>{" "}
            {product?.color || "N/A"}
          </div>
          <div className="mt-1">
            <span className="font-semibold">Availability:</span>{" "}
            {product?.isAvailable ? "In stock" : "Sold out"}
          </div>
          <div className="mt-1">
            <span className="font-semibold">Specifications:</span>
            <p>{product?.specifications || "N/A"}</p>
          </div>
          <div className="mt-4">
            <span className="font-semibold">Description:</span>
            <p>{product?.description}</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <label>Qty:</label>
            <button
              type="button"
              className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
              onClick={() => setQty((prev) => Math.max(1, Number(prev) - 1))}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="number"
              className="border p-1 w-16 text-center"
              value={qty}
              min="1"
              onChange={(e) => {
                const val = Math.max(1, Number(e.target.value));
                setQty(val);
              }}
            />
            <button
              type="button"
              className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
              onClick={() => setQty((prev) => Number(prev) + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
              onClick={() => {
                addToCart(product, Number(qty));
                navigate("/cart");
              }}
            >
              Add to Cart
            </button>
            {/* <button
              className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
