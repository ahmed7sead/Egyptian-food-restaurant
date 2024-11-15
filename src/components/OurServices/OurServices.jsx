import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="container py-16">
      {/* header section */}
      <div className="text-center mb-10 mt-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">
          Why Choose <span className="text-primary">EgyptEAT</span>
        </h1>
      </div>
      {/* icons section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        <div className="flex flex-col justify-center items-center gap-4 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <FaMobileScreen className="text-4xl text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="text-center">
            <p className="text-xl font-bold mb-2">Easy Booking</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <MdOutlineFastfood className="text-4xl text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="text-center">
            <p className="text-xl font-bold mb-2">Quick Service</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <MdFoodBank className="text-4xl text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="text-center">
            <p className="text-xl font-bold mb-2">Healthy Choices</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <CiDeliveryTruck className="text-4xl text-primary group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="text-center">
            <p className="text-xl font-bold mb-2">Fast Delivery</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 pt-8 border-t-2 border-gray-200">
        <div className="text-center space-y-4">
          {/* Logo */}


          {/* Designed By */}
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <span>Designed with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by</span>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:text-orange-600 transition-colors duration-300 hover:underline"
            >
              Ahmed Abdelwahed
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm pb-6">
            <p>© 2024 EgyptEAT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurServices;