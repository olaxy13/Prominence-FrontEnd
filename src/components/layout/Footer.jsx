import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-black text-white border-t border-gray-800 text-xs py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
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
                href="mailto:prominencetelecoms@gmail.com"
                className="hover:underline"
              >
                prominencetelecoms@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 text-base">Office Address</h3>
          <ul className="space-y-1">
            <li>Surulere camp, FUNAAB rd, Abeokuta</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 text-base">Services</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/phones" className="hover:underline">
                Phones
              </Link>
            </li>
            <li>
              <Link to="/laptops" className="hover:underline">
                Laptops
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="hover:underline">
                Laptop accessories
              </Link>
            </li>
            <li>
              <Link to="/phone-accessories" className="hover:underline">
                Phone accessories
              </Link>
            </li>
            <li>
              <Link to="/repairs" className="hover:underline">
                Repair services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 text-base">Socials</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.instagram.com/prominencetelecoms/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaInstagram className="w-4 h-4 text-pink-500" />
                prominencetelecoms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-400 text-xs">
        © 2025 Prominence Telecoms. All Rights Reserved
      </div>
    </footer>
  );
}
