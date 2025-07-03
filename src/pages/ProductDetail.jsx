import { useParams } from "react-router";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = {
    id,
    name: `Product ${id}`,
    price: id * 25000,
    // image: "https://via.placeholder.com/600",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    desc: "Detailed product description.",
  };
  const [qty, setQty] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <img src={product.image} alt={product.name} className="rounded" />
      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-green-600 font-bold text-xl mt-2">
          ₦{product.price}
        </p>
        <p className="mt-4">{product.desc}</p>
        <div className="mt-4 space-x-2">
          <label>Qty:</label>
          <input
            type="number"
            className="border p-1 w-16"
            value={qty}
            min="1"
            onChange={(e) => setQty(e.target.value)}
          />
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
