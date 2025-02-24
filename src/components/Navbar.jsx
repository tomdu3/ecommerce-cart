import { useCart } from '../context/CartContext';
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; // Import the Link component

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const bodyRef = useRef(null);

  const { cartItems } = useCart();
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      bodyRef.current.style.overflow = "hidden";
    } else {
      bodyRef.current.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div ref={bodyRef}>
      <nav className="bg-black text-white px-5 md:px-[10%] lg:px-[5%] py-4 flex justify-between lg:justify-around items-center shadow-md text-base md:text-2xl relative">
        {/* Logo */}
        <img
          src="/images/logo2.png"
          alt="logo"
          className="w-20 h-10 md:w-40 md:h-12 object-cover lg:w-45 lg:h-15 lg:object-cover"
        />

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-1 md:gap-5 items-center">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="text-gray-500 cursor-not-allowed pointer-events-none">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 cursor-not-allowed pointer-events-none">
              Contact
            </a>
          </li>
        </ul>

        {/* Cart and Hamburger Section */}
        <div className="flex items-center gap-5">
          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative flex items-center">
            <FontAwesomeIcon
              icon={faCartPlus}
              className="text-white text-xl md:text-2xl hover:text-gray-300 transition"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
          {/* Total Price */}
          <span className="text-white font-medium">${calculateTotalPrice()}</span>
          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-white text-xl transition-all duration-300"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-15 right-0 h-auto w-auto bg-black/90 backdrop-blur-2xl shadow-lg transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          style={{ zIndex: 1000 }}
        >
          <div className="p-5 space-y-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 block py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 cursor-not-allowed pointer-events-none block py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 cursor-not-allowed pointer-events-none block py-2"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-white hover:text-gray-300 block py-2"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
