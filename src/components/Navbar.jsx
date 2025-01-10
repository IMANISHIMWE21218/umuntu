// Navbar.jsx
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = ({ handleOpenModel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleDonateClick = () => {
    setIsMenuOpen(false);
    handleOpenModel();
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "home", isRoute: false },
    { label: "About", to: "about", isRoute: false },
    { label: "What We Do", to: "whatwedo", isRoute: false },
    { label: "Contact", to: "/contact", isRoute: true }
  ];

  const handleNavClick = (item) => {
    if (item.isRoute) {
      navigate(item.to);
    } else if (location.pathname !== '/') {
      navigate('/');
      // Small delay to ensure navigation completes
      setTimeout(() => {
        const element = document.getElementById(item.to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const renderNavLink = (item) => {
    if (item.isRoute) {
      return (
        <RouterLink
          to={item.to}
          className="text-base text-gray-900 hover:text-brandPrimary font-medium cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </RouterLink>
      );
    }

    if (location.pathname === '/') {
      return (
        <ScrollLink
          to={item.to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-base text-gray-900 hover:text-brandPrimary font-medium cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </ScrollLink>
      );
    }

    return (
      <button
        onClick={() => handleNavClick(item)}
        className="text-base text-gray-900 hover:text-brandPrimary font-medium cursor-pointer"
      >
        {item.label}
      </button>
    );
  };

  return (
    <header className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
      isSticky ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <nav className="py-4 lg:px-14">
        <div className="flex items-center justify-between px-3 md:px-8">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="md:w-22 md:h-5 w-18 h-4 px-2"
            />
          </RouterLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                {renderNavLink(item)}
              </li>
            ))}
          </ul>

          {/* Donate Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleOpenModel}
              className="bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300"
            >
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutralDGrey focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed top-0 left-0 right-0 bg-brandPrimary z-50 transition-all duration-300 ${
          isMenuOpen ? "block py-10 px-8 mt-16" : "hidden"
        }`}>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index} className="text-white">
                {renderNavLink(item)}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button
              onClick={handleDonateClick}
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-neutralDGrey transition-all duration-300 w-full"
            >
              Donate
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  handleOpenModel: PropTypes.func.isRequired
};

export default Navbar;