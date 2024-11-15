import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-lg py-3 lg:py-4"
        : "bg-white/95 backdrop-blur-sm py-4 lg:py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="cursor-pointer" onClick={() => scrollToSection("home")}>
          <p className="text-3xl lg:text-4xl font-semibold">
            Egypt<span className="text-primary">EAT</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center gap-10">
          <ul className="flex gap-8">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-primary transition-colors duration-300 uppercase font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li
              onClick={() => scrollToSection("menu")}
              className="cursor-pointer hover:text-primary transition-colors duration-300 uppercase font-medium relative group"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li
              onClick={() => scrollToSection("services")}
              className="cursor-pointer hover:text-primary transition-colors duration-300 uppercase font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-primary transition-colors duration-300 uppercase font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="flex gap-3 items-center cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold shadow-md group-hover:shadow-lg transition-shadow">
              A
            </div>
            <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container mx-auto px-4 py-4 bg-white border-t">
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-primary transition-colors duration-300 uppercase font-medium py-2 border-b hover:border-primary"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("menu")}
              className="cursor-pointer hover:text-primary transition-colors duration-300 uppercase font-medium py-2 border-b hover:border-primary"
            >
              Menu
            </li>
            <li
              onClick={() => scrollToSection("services")}
              className="cursor-pointer hover:text-primary transition-colors duration-300 uppercase font-medium py-2 border-b hover:border-primary"
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-primary transition-colors duration-300 uppercase font-medium py-2 border-b hover:border-primary"
            >
              About
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;