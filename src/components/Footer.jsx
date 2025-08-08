import { NavLink } from "react-router";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
} from "react-icons/fa6";

const menuItems = [
  "About Us",
  "Terms of Service",
  "Privacy Policy",
  "Distance Sales Agreement",
  "KVKK",
];

const Footer = () => {
  return (
    <footer className="bg-emerald-500 text-white px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold">
            AREKA Software and Energy Technologies Inc.
          </h3>
          <p>
            Bilkent Cyberpark, CyberGO Incubation Center, Bilkent Station
            Bilkent, Ankara - TURKEY
          </p>
          <p className="mt-2">info@areka.ai</p>

          <p className="mt-4 font-semibold">Follow us</p>
          <div className="flex gap-4 mt-2 text-2xl">
            <FaLinkedin className="cursor-pointer hover:text-gray-200" />
            <FaXTwitter className="cursor-pointer hover:text-gray-200" />
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
          </div>

          <p className="mt-4">
            Pay with İyzico, Mastercard, VISA, American Express, Troy
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item}>
                <NavLink to="/" className="hover:underline">
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="font-semibold">
            Stay updated on sustainability and emission trends.
          </p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 text-black w-full bg-white focus:outline-none focus:ring-0 focus:border-none"
            />
            <button className="bg-gray-800 text-white px-4">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm">
        © 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
