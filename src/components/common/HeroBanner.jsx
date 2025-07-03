import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    title: "Phones",
    message: "Discover the latest in modern fashion",
    button: "Shop Now",
    link: "/products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    title: "Laptops",
    message: "Bright, bold, and beautiful styles for summer.",
    button: "Explore Summer",
    link: "/products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    title: "Phone Accessories",
    message: "Elevate your wardrobe with timeless pieces.",
    button: "View Classics",
    link: "/products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    title: "Gadget Repairs",
    message: "Special deals on select items. Limited time only!",
    button: "See Offers",
    link: "/products",
  },
];

export default function HeroBanner() {
  return (
    <div className="relative w-full mb-12 p-4">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 5000,
          speed: 1200,
          pauseOnHover: false,
          pauseOnFocus: false,
          arrows: false,
          pagination: true,
          cover: true,
          height: "60vh",
          breakpoints: {
            768: { height: "40vh" },
            480: { height: "28vh" },
          },
        }}
        aria-label="Hero Banner"
        className=" overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SplideSlide key={idx}>
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ minHeight: "100%", minWidth: "100%" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                style={{ filter: "brightness(0.6)" }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8 w-full">
                <h1 className="text-3xl md:text-6xl font-extrabold tracking-widest uppercase mb-4 text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base md:text-2xl font-light tracking-wide mb-6 text-white drop-shadow">
                  {slide.message}
                </p>
                <a
                  href={slide.link}
                  className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors duration-300"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
