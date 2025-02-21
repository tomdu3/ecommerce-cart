import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      bodyRef.current.style.overflow = "hidden";
    } else {
      bodyRef.current.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <div ref={bodyRef}>
      {" "}
      {/* Added ref to body */}
      <nav className="px-5 py-2 flex justify-between items-center shadow-md text-base md:text-2xl relative">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-20 h-10 md:w-40 md:h-12 object-cover lg:object-contain"
        />

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-1 md:gap-5 items-center">
          <li>
            <a href="#" className="text-gray-700 hover:text-black transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-black transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-black transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Cart and Hamburger Section */}
        <div className="flex items-center gap-5">
          {/* Cart Icon with Badge */}
          <div className="relative flex items-center">
            <FontAwesomeIcon
              icon={faCartPlus}
              className="text-gray-700 text-xl md:text-2xl"
            />
            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
          {/* Total Price */}
          <span className="text-gray-700 font-medium">$0.00</span>
          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faXmark : faBars}
              className="text-gray-700 text-xl"
            />
          </button>
        </div>

        {/* Mobile Menu - Slides in from Right */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-10 right-0 h-auto w-64 bg-white/75 backdrop-blur-xl shadow-lg border-2 border-gray-200 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          style={{ zIndex: 1000 }}
        >
          <div className="p-5 space-y-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black block py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black block py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black block py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
