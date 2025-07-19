import React, { useState, useEffect } from "react";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio5 from "../assets/portfolio5.jpg";
import portfolio6 from "../assets/portfolio6.jpg";
import portfolio7 from "../assets/portfolio7.jpeg";
import portfolio8 from "../assets/portfolio8.jpeg";
import portfolio9 from "../assets/portfolio9.jpg";
import portfolio10 from "../assets/portfolio10.jpg";
import portfolio11 from "../assets/portfolio11.png";
import portfolio12 from "../assets/portfolio12.webp";
// Portfolio Data
const portfolioData = [
  {
    title: "Tour & Travel Website",
    category: "Multi Page",
    image: portfolio1,
  },
  {
    title: "Healthcare Website",
    category: "Single Page",
    image: portfolio2,
  },
  {
    title: "Lab Instruments Website",
    category: "Ecommerce",
    image: portfolio3,
  },
  {
    title: "Car Website",
    category: "Multi Page",
    image: portfolio4,
  },
  {
    title: "Tourism Website",
    category: "Single Page",
    image: portfolio5,
  },
  {
    title: "Ticket Booking Website",
    category: "Ecommerce",
    image: portfolio6,
  },
  {
    title: "Nature Website",
    category: "Multi Page",
    image: portfolio7,
  },
  {
    title: "Room Website",
    category: "Single Page",
    image: portfolio8,
  },
  {
    title: " Chocolate Website",
    category: "Ecommerce",
    image: portfolio9,
  },
  {
    title: " Rent Website",
    category: "Multi Page",
    image: portfolio10,
  },
   {
    title: "Furniture Website",
    category: "Single Page",
    image: portfolio11,
  },
  {
    title: " Weather Website",
    category: "Ecommerce",
    image: portfolio12,
  },
];

const tabs = [
  "All Websites",
  "Multi Page Websites",
  "Single Page Websites",
  "Ecommerce Websites",
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All Websites");
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [animateHeadings, setAnimateHeadings] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setAnimateHeadings(true), 100);
  }, []);

  const filteredData =
    activeTab === "All Websites"
      ? portfolioData
      : portfolioData.filter((item) =>
          item.category
            .toLowerCase()
            .includes(activeTab.split(" ")[0].toLowerCase())
        );

  return (
    <section className="bg-white text-black py-16 px-4 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3
          className={`text-sm text-pink-600 font-semibold mb-2 transform transition-all duration-1000 ease-out ${
            animateHeadings ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          Showcasing Our Expertise
        </h3>

        <h2
          className={`text-3xl md:text-5xl font-bold mb-4 transform transition-all duration-1000 ease-out delay-200 ${
            animateHeadings ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          Discover Our Web <br className="hidden md:block" />
          <span className="text-black">Design Creations</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveCardIndex(null); // reset active card
              }}
              className={`text-sm md:text-base px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-all ${
                activeTab === tab
                  ? "bg-pink-600 text-white"
                  : "text-pink-600 hover:bg-pink-100"
              }`}
            >
              <span role="img" aria-label="icon">
                🖼️
              </span>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredData.map((item, index) => {
          const isActive = index === activeCardIndex;
          return (
            <div
              key={index}
              onClick={() => setActiveCardIndex(isActive ? null : index)}
              className="relative group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container */}
              <div
                className={`relative transition-all duration-300 ${
                  isActive ? "blur-sm brightness-50" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay Content */}
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>

              {/* Buttons on click */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 z-10 flex transition-all duration-300">
                  <a
                    href="#"
                    className="w-1/2 text-center py-3 text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site Link
                  </a>
                  <a
                    href="#"
                    className="w-1/2 text-center py-3 text-white font-semibold bg-gradient-to-r from-pink-600 to-red-600 hover:opacity-90 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
