import React from "react";
import HeroImg from "../../assets/koshry.png";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
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
  };

  return (
    <div id="home" className="pt-20 relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Discover Egyptian Flavor
            <span className="block text-primary mt-2">With Every Bite</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Enjoy the most delicious traditional Egyptian cuisine prepared with love and passion. From fresh Koshary to flavorful Fatta.
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button
              onClick={() => scrollToSection("menu")}
              className="primary-btn hover:scale-105 duration-200"
            >
              Food Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="secondary-btn text-black hover:scale-105 duration-200"
            >
              Our Table
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="flex flex-col justify-center">
          <img
            src={HeroImg}
            alt="كشري مصري"
            className="animate-spin-slow img-shadow w-[400px] mx-auto"
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-[-20] left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("menu")}
          className="text-primary hover:text-primary/80 transition-colors duration-400"
          aria-label="Scroll to menu"
        >
          <IoIosArrowDown className="text-5xl" />
        </button>
      </div>
    </div>
  );
};

export default Hero;