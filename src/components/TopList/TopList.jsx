import React from "react";
import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";

const FoodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$2",
    name: "Crispy Falafel",
    desc: "Golden, crispy on the outside and perfectly tender inside , served with tahini sauce.",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$1.99",
    name: "Fresh Egyptian Salad",
    desc: "A vibrant mix of tomatoes, cucumbers, and crisp lettuce with our signature lemon-olive oil dressing.",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$2.99",
    name: "Um Ali Dessert",
    desc: "Traditional Egyptian bread pudding with warm milk. A sweet ending to your meal.",
  },
];

const TopList = () => {
  return (
    <div id="menu" className="container py-14 ">
      {/* header section */}
      <div className="text-center mb-16 mt-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">
          Our <span className="text-primary">Signature Dishes</span>
        </h1>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            <div className="relative mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-60 sm:w-40 lg:w-[240px] mx-auto object-cover rounded-full img-shadow group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                {item.price}
              </div>
            </div>
            <div className="space-y-3 text-center">
              <p className="text-2xl">{item.rating}</p>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
              <button className="w-full mt-4 bg-primary text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;