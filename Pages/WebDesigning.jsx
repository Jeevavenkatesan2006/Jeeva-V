import React from "react";
import { Link } from "react-router-dom";
import webdesign from "../assets/webdesign.jpg";
import web1 from "../assets/web1.jpg";

const WebDesigning = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-6 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Hero Image */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-blue-700">
            Web Designing
          </h1>
          <img
            src={webdesign}
            alt="Modern Web Design illustration"
            className="w-full h-115 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Intro Paragraph */}
        <div className="text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-purple-700">Dev Net Solutions</span>, we
            specialize in building visually stunning, responsive, and user-friendly websites
            tailored to your brand identity. Our web design team ensures your digital presence
            speaks volumes to your audience, delivering modern UI/UX experiences that work across
            all devices.
          </p>
        </div>

        {/* Design Process Section */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">
            Our Web Design Process
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            From concept to deployment, we follow a structured design approach to create impactful
            websites. We begin by understanding your business goals, followed by wireframing,
            prototyping, and full-fledged design development with continuous feedback loops.
          </p>

          <img
            src={web1}
            alt="Web design process flow"
            className="w-100 object-contain rounded-lg shadow-md mb-6"
          />

          <ul className="space-y-3 text-gray-700 text-base">
            <li>✔️ Requirement Gathering</li>
            <li>✔️ Wireframing & Information Architecture</li>
            <li>✔️ Visual Design & Prototyping</li>
            <li>✔️ Responsive Development</li>
            <li>✔️ Usability Testing</li>
            <li>✔️ Deployment & Optimization</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-600 mt-10 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            With Dev Net Solutions, you're not just getting a website — you're getting a digital
            experience that delivers real results. Heres what we offer:
          </p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>✅ Visually Appealing Designs</li>
            <li>✅ SEO-Friendly Structure</li>
            <li>✅ Mobile-First Development</li>
            <li>✅ Lightning Fast Loading Times</li>
            <li>✅ Full Customization & Scalability</li>
            <li>✅ Post-Launch Maintenance & Support</li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link to="/services">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-500">
              ← Back to Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDesigning;
