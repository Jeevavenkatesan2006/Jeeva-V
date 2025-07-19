import React from "react";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Basic",
      price: "$99",
      features: [
        "1 Page Website",
        "Basic SEO",
        "Responsive Design",
        "Delivery in 3 Days",
      ],
    },
    {
      title: "Standard",
      price: "$199",
      features: [
        "Up to 5 Pages",
        "SEO Optimization",
        "Mobile Friendly",
        "Contact Form",
        "Delivery in 5 Days",
      ],
    },
    {
      title: "Premium",
      price: "$399",
      features: [
        "10+ Pages",
        "Advanced SEO",
        "Custom Animations",
        "Blog & CMS",
        "Delivery in 7 Days",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 py-16 px-4 text-white font-sans">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Our Pricing Plans</h1>
        <p className="text-lg opacity-90">Choose the plan that fits your business</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-white text-sm">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("/#services")}
          className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
        >
          ⬅ Back to Services
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
