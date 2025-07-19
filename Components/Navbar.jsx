import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/dlogo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Pricing", path: "/pricing" },
  { label: "Shop", path: "/shop" },
  { label: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[90%] h-[13%] bg-black rounded-full shadow-lg">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-white font-bold text-xl">Dev Net Solutions</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium text-sm">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className="relative hover:text-pink-500 transition duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-pink-500 before:to-yellow-400 hover:before:w-full before:transition-all before:duration-500"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block ml-4 bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:shadow-xl hover:bg-gray-100 transition"
        >
          Contact us ↗
        </Link>

        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-black rounded-b-2xl shadow-lg z-40 transition-all duration-300">
          <ul className="flex flex-col items-center py-6 space-y-4 text-white font-medium text-sm">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className="relative hover:text-pink-500 transition duration-300 before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-pink-500 before:to-yellow-400 hover:before:w-full before:transition-all before:duration-500"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-4 bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:shadow-xl hover:bg-gray-100 transition"
              >
                Contact us ↗
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
