import React from "react";
import digitalmarket from "../assets/digitalmarket.jpg";
import webdesign from "../assets/webdesign.jpg";

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
            At <span className="font-semibold text-blue-700">Web Makers</span>, we offer comprehensive
            digital marketing solutions in Pondicherry designed to help your business grow and
            succeed online. Our expert team combines creativity and technical expertise to deliver
            tailored strategies that enhance your business’s digital presence. Whether you’re a local
            business or a large enterprise, we ensure that your online marketing efforts deliver
            scalable results.
          </p>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Simple Steps to Process
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            At Web Makers, we follow a simple, effective process to ensure your digital marketing
            strategy succeeds. We begin with a thorough investigation based on your specific goals,
            target audience, and current digital presence. Through in-depth analysis of your
            strengths, we craft a personalized plan to guide your success. That’s how Web Makers can
            help build a sustainable ecosystem that supports your business’s growth.
          </p>

          <img
            src={webdesign}
            alt="Digital Marketing process steps"
            className="w-full object-contain rounded-lg shadow-md mb-6"
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
      </div>
    </section>
  );
};

export default DigitalMarketing;
