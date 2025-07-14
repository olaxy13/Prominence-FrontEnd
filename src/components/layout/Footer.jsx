export default function Footer() {
  return (
    <footer className="container bg-black text-white border-t border-gray-800 text-xs py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
        <div>
          <h3 className="font-bold mb-3 text-base">Reach Us</h3>
          <ul className="space-y-1">
            <li>
              <a href="tel:+2348107074738" className="hover:underline">
                +2348107074738
              </a>
            </li>
            <li>
              <a href="tel:+2348100291639" className="hover:underline">
                +2348100291639
              </a>
            </li>
            <li>
              <a
                href="mailto:londontailor07@gmail.com"
                className="hover:underline"
              >
                prominencetelecoms@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
          <h3 className="font-bold mb-3 text-base">London Tailor</h3>
          <ul className="space-y-1">
            <li>
              <a href="/academy" className="hover:underline">
                Academy
              </a>
            </li>
            <li>
              <a href="/about-us/#mission" className="hover:underline">
                Our Mission
              </a>
            </li>
            <li>
              <a href="/about-us/#vision" className="hover:underline">
                Our Vision
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div> */}
        <div>
          <h3 className="font-bold mb-3 text-base">Services</h3>
          <ul className="space-y-1">
            <li>
              <a href="/product-category/selecta" className="hover:underline">
                Phones
              </a>
            </li>
            <li>
              <a href="/product-category/playboy" className="hover:underline">
                Laptops
              </a>
            </li>
            <li>
              <a href="/product-category/machala" className="hover:underline">
                Phone accessories
              </a>
            </li>
            <li>
              <a href="/product-category/30bg" className="hover:underline">
                Repair services
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
          <h3 className="font-bold mb-3 text-base">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/shop" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="/size-chart" className="hover:underline">
                Size Charts
              </a>
            </li>
            <li>Delivery</li>
            <li>Exchange & Cancellation</li>
            <li>Terms & Conditions</li>
          </ul>
        </div> */}
      </div>
      <div className="mt-10 text-center text-gray-400 text-xs">
        © 2025 Prominence Telecoms. All Rights Reserved
      </div>
    </footer>
  );
}
