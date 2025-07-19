import React from "react";
import { Link } from "react-router-dom";

// ✅ Import images
import digitalmarket from "../assets/digitalmarket.jpg";
import webdesign from "../assets/webdesign.jpg";
import graphicdesigner from "../assets/graphic designer.jpg";
import videoad from "../assets/video ad.jpg";
import googlebusiness from "../assets/googlebusiness.jpg";
import LocalSEO from "../assets/Local SEO.jpg";

// ✅ Service Data
const services = [
  {
    title: "Digital Marketing",
    image: digitalmarket,
    icon: "📢",
    link: "/services/digital-marketing"
  },
  {
    title: "Web Designing",
    image: webdesign,
    icon: "💻",
    link: "/services/web-designing"
  },
  {
    title: "Graphic Designing",
    image: graphicdesigner,
    icon: "🧑‍🎨",
    link: "/services/graphic-designing"
  },
  {
    title: "Video Ad’s",
    image: videoad,
    icon: "🎥",
    link: "/services/video-ads"
  },
  {
    title: "Google My Business",
    image: googlebusiness,
    icon: "📍",
    link: "/services/google-my-business"
  },
  {
    title: "Local SEO",
    image: LocalSEO,
    icon: "📈",
    link: "/services/local-seo"
  },
];

const OurServices = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 px-4 py-16 text-black scroll-smooth">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-800">
          Our Services
          <br />
          <span className="block text-blue-600 mt-4">
            Provide Amazing Web Design Solutions
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link to={service.link} key={index}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2">
              
              {/* Image Section */}
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />

                {/* Icon Animation - Starts from Left to Center */}
                <div className="absolute top-0 left-[-10px] text-4xl p-3 bg-white/80 backdrop-blur-md rounded-full shadow-md transition-all duration-700 ease-in-out transform group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
                  {service.icon}
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6 text-center flex flex-col items-center">
                <h3 className="font-semibold text-xl text-gray-800 mb-3">
                  {service.title}
                </h3>
                <span className="text-3xl text-blue-700 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
