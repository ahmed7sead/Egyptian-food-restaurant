import React from "react";
import BannerImg from "../../assets/2.png";

const Banner = () => {
  return (
    <>
      <div className="container py-14 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* img section */}
          <div className="flex justify-center items-center">
            <img src={BannerImg} alt="Egyptian Food" className="w-full max-w-md" />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Egyptian Food Is Always
              <span className="text-primary"> Exceptional</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From street food favorites to traditional home-cooked meals, we celebrate the rich flavors and warm hospitality that Egyptian cuisine is famous for worldwide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;