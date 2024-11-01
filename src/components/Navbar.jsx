import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle scroll for sticky effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Correct cleanup
    }, []);

    // Navigation items array
    const navItems = [
        { link: "Home", path: "/home" },
        { link: "About", path: "/about" },
        { link: "What We Do", path: "/whatwedo" },
        { link: "Contact", path: "/contact" },
    ];

    return (
       <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${isSticky ? 'shadow-md' : ''}`}>
            <nav className={`py-4 lg:px-14 ${isSticky ? 'bg-white' : 'bg-transparent'}`}>
                <div className="flex items-center justify-between px-3 md:px-8">
                    <a href="/" className="text-xl font-semibold flex items-center space-x-3">
                        <img src={logo} alt="Logo" className="md:w-22 md:h-5 w-18 h-4 inline-block items-center px-2" />
                    </a>
                    
                    {/* Navigation items for large device */}
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map((item, index) => (
                            <Link to={item.path}
                                spy={true}
                                smooth={true} 
                                offset={-100}
                                key={index}
                                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
                            >
                                {item.link}
                            </Link>
                        ))}
                    </ul>

                    {/* Buttons for large device */}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Donate</button>
                    </div>

                    {/* Hamburger menu only mobile */}
                    <div className="md:hidden">
                        <button className="text-neutralDGrey focus:outline-none focus:text-gray-500" onClick={toggleMenu}>
                            {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Navigation items for mobile */}
                    <div className={`space-y-4 py-10 px-8 mt-16 bg-brandPrimary z-50 ${isMenuOpen ? 'block fixed top-0 left-0 right-0 ' : 'hidden'}`}>
                        {navItems.map((item, index) => (
                            <Link to={item.path}
                                spy={true}
                                smooth={true} 
                                offset={-100}
                                key={index}
                                className="block text-base text-white hover:text-gray-900 first:font-medium"
                            >
                                {item.link}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
