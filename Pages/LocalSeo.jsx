import React from "react";
import LocalSEO from "../assets/Local SEO.jpg"; // Replace with your actual image
import local1 from "../assets/local1.jpg"; // Replace with your actual image
import { useNavigate } from "react-router-dom";

const LocalSeo = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen py-16 px-6 lg:px-24 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Hero Image */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-green-600">Local SEO Services</h1>
          <img
            src={ LocalSEO}
            alt="Local SEO Team"
            className="w-full h-115 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Introduction */}
        <div className="text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-green-700">Dev Net Solutions</span>, our Local SEO services
            are designed to get your business found by the right people in your local area.
            Be visible where it matters—on search engines and maps.
          </p>
        </div>

        {/* Services We Offer */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Local SEO Services</h2>
          <p className="text-lg leading-relaxed mb-6">
            We help local businesses attract nearby customers through search engines by optimizing every digital touchpoint.
          </p>
          <img
            src={local1}
            alt="Local SEO Strategy"
            className="w-100 object-contain rounded-lg shadow-md mb-6"
          />
          <ul className="space-y-3 text-gray-700 text-base">
            <li>🔍 Keyword Research for Local Intent</li>
            <li>📍 Local Citations and Directory Listings</li>
            <li>🗺️ Google Maps Optimization</li>
            <li>🏠 Landing Pages for Geo-Targeted Services</li>
            <li>📊 Monthly Reporting & Performance Metrics</li>
            <li>📱 Mobile SEO for On-the-Go Searches</li>
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4">Why Choose Us for Local SEO?</h2>
          <p className="text-lg leading-relaxed mb-4">
            We understand how search engines work locally and build strategies that deliver:
          </p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>✅ Higher Local Search Visibility</li>
            <li>✅ Better Engagement with Nearby Customers</li>
            <li>✅ Consistent NAP (Name, Address, Phone) Accuracy</li>
            <li>✅ Hyperlocal Targeting Strategy</li>
            <li>✅ Result-Oriented, Affordable Packages</li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/services")}
            className="bg-gradient-to-r from-cyan-500 to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-green-700 hover:to-green-500 transition duration-300"
          >
            ← Back to Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocalSeo;
