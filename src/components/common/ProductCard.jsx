import { Link } from "react-router";
export default function ProductCard({ product }) {
  return (
    <div className="bg-white group border-none rounded-none overflow-hidden relative transition-transform hover:scale-105">
      <Link to={`/products/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-[3/4] object-cover group-hover:opacity-90 transition-opacity duration-300"
        />
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 px-4 py-3 flex flex-col items-start">
          <h3 className="text-base font-light uppercase tracking-widest mb-1 text-gray-900">
            {product.name}
          </h3>
          <p className="text-lg font-semibold text-black">₦{product.price}</p>
        </div>
      </Link>
    </div>
  );
}
