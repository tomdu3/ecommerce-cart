import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="px-5 py-2 flex justify-between items-center bg-white shadow-md text-base md:text-2xl">
      {/* Logo */}
      <img
        src="/images/logo.png"
        alt="logo"
        className="w-20 h-10 md:w-40 md:h-12 object-cover lg:object-contain"
      />

      {/* Navigation Links */}
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

      {/* Cart Section */}
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
      </div>
    </nav>
  );
};

export default Navbar;
