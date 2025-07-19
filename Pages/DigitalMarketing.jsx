import React from "react";
import { Link } from "react-router-dom";
import digitalmarket from "../assets/digitalmarket.jpg";
import dig1 from "../assets/dig1.jpg";

const DigitalMarketing = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-6 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Hero Image */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-purple-700">
            Digital Marketing
          </h1>
          <img
            src={digitalmarket}
            alt="Digital marketing strategy with team"
            className="w-full h-64 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Intro Paragraph */}
        <div className="text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-blue-700">Dev Net Solutions</span>, we offer
            comprehensive digital marketing solutions in Pondicherry designed to help your business
            grow and succeed online. Our expert team combines creativity and technical expertise to
            deliver tailored strategies that enhance your business’s digital presence. Whether
            you’re a local business or a large enterprise, we ensure that your online marketing
            efforts deliver scalable results.
          </p>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Simple Steps to Process
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            At Dev Net Solutions, we follow a simple, effective process to ensure your digital
            marketing strategy succeeds. We begin with a thorough investigation based on your
            specific goals, target audience, and current digital presence. Through in-depth
            analysis of your strengths, we craft a personalized plan to guide your success. That’s
            how Web Makers can help build a sustainable ecosystem that supports your business’s
            growth.
          </p>

          <img
            src={dig1}
            alt="Digital Marketing process steps"
            className="w-100 object-contain rounded-lg shadow-md mb-6"
          />

          <ul className="space-y-3 text-gray-700 text-base">
            <li>✔️ Objectives & Business Analysis</li>
            <li>✔️ Target Audience Research</li>
            <li>✔️ Competitive Benchmarking</li>
            <li>✔️ Implementation & Campaign Execution</li>
            <li>✔️ Evaluation</li>
            <li>✔️ Performance Tracking & Optimization</li>
            <li>✔️ Ongoing Support & Reporting</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mt-10 mb-4">
            Customer Benefits
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            At Web Makers, our digital marketing services are designed to provide measurable and
            sustainable results. By leveraging our expertise, you can expect:
          </p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>✅ Increased Brand Visibility</li>
            <li>✅ Targeted Audience Engagement</li>
            <li>✅ Improved Website Traffic</li>
            <li>✅ Higher Conversion Rates</li>
            <li>✅ Marketing Strategy Optimization</li>
            <li>✅ Ongoing Support & Systemization</li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link to="/#services">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-500">
              ← Back to Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
