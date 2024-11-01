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
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/whatwedo" element={<WhatWeDo />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
    );
};

export default Navbar;
