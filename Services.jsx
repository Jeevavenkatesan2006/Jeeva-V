import React from "react";

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
  },
  {
    title: "Web Designing",
    image: webdesign,
    icon: "💻",
  },
  {
    title: "Graphic Designing",
    image: graphicdesigner,
    icon: "🧑‍🎨",
  },
  {
    title: "Video Ad’s",
    image: videoad,
    icon: "🎥",
  },
  {
    title: "Google My Business",
    image: googlebusiness,
    icon: "📍",
  },
  {
    title: "Local SEO",
    image: LocalSEO,
    icon: "📈",
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
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative w-full h-60">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 text-4xl p-2 bg-white/70 rounded-full shadow-md transition-all transform group-hover:translate-x-[180px] group-hover:translate-y-[180px] duration-700 ease-in-out">
                {service.icon}
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                {service.title}
              </h3>
              <span className="text-2xl inline-block transition-transform duration-200 hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
