import HeroBanner from "../components/common/HeroBanner";
import ProductGrid from "../components/common/ProductGrid";

const MOCK = [
  {
    id: 1,
    name: "Smartphone A",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Laptop B",
    price: 250000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Headphones C",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Headphones D",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div>
        <h2 className="text-2xl font-semibold mb-4 p-4">Laptops</h2>
        <ProductGrid products={MOCK} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 p-4">Laptop Accessories</h2>
        <ProductGrid products={MOCK} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 p-4">Phones</h2>
        <ProductGrid products={MOCK} />
      </div>
    </div>
  );
}
