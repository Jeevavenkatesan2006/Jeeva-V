import React from "react";
import googlebusiness from "../assets/googlebusiness.jpg"; // Replace with your actual image path
import gb1 from "../assets/gb1.jpg"; // Replace with your actual image path
import { useNavigate } from "react-router-dom";

const GoogleMyBusiness = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen py-16 px-6 lg:px-24 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Hero Image */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-green-600">Google My Business Services</h1>
          <img
            src={gb1}
            alt="GMB team"
            className="w-full h-115 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Introduction */}
        <div className="text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-green-700">Dev Net Solutions</span>, we help
            businesses establish and optimize their presence on Google Search & Maps using Google My Business.
            Maximize local visibility, build trust, and attract more foot traffic.
          </p>
        </div>

        {/* GMB Services */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">What We Offer</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our GMB services are designed to enhance your local SEO and customer engagement.
          </p>
          <img
            src={googlebusiness}
            alt="Google My Business process"
            className="w-100 object-contain rounded-lg shadow-md mb-6"
          />
          <ul className="space-y-3 text-gray-700 text-base">
            <li>📍 Google My Business Profile Creation</li>
            <li>📝 Business Info Optimization</li>
            <li>📸 Photo & Video Uploads</li>
            <li>🌟 Review Management & Response</li>
            <li>📊 Performance Monitoring & Insights</li>
            <li>🔍 Local SEO Strategy Integration</li>
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4">Why Choose Us for GMB?</h2>
          <p className="text-lg leading-relaxed mb-4">
            We combine digital expertise with local market knowledge to grow your presence:
          </p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>✅ Improved Local Search Rankings</li>
            <li>✅ Increased Customer Calls and Visits</li>
            <li>✅ Consistent Branding Across Listings</li>
            <li>✅ Weekly Reporting & Analysis</li>
            <li>✅ Affordable Monthly Packages</li>
          </ul>
        </div>

        {/* Back to Services Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/services")}
            className="bg-gradient-to-r from-fuchsia-600 to-cyan-800 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-700 hover:to-green-500 transition duration-300"
          >
            ← Back to Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoogleMyBusiness;
