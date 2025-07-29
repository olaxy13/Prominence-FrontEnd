import ProductCard from "./ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";

export default function ProductGrid({ products }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!products || products.length === 0) {
    return (
      <div className="w-full text-center text-gray-500 py-8">
        No items found.
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="p-2">
        <Splide
          options={{
            perPage: 2,
            gap: "1rem",
            arrows: true,
            pagination: true,
            drag: "free",
            snap: true,
            type: "loop",
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            resetProgress: false,
            speed: 1200,
          }}
        >
          {products.map((p) => (
            <SplideSlide key={p.id}>
              <ProductCard product={p} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
