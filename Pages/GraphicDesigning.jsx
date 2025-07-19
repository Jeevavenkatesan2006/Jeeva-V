import React from "react";
import graphicdesigner from "../assets/graphic designer.jpg"; // Replace with your image
import graphic1 from "../assets/graphic1.jpg"; // Replace with your image
import { useNavigate } from "react-router-dom";

const GraphicDesigning = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen py-16 px-6 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Hero Image */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-pink-600">Graphic Designing</h1>
          <img
            src={graphic1 }
            alt="Creative graphic design team"
            className="w-full h-84 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Introduction */}
        <div className="text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-pink-700">Dev Net Solutions</span>, our graphic
            design services help you communicate your brand visually with stunning creativity. From
            logos to brochures, we bring your message to life with impactful designs tailored to
            your audience.
          </p>
        </div>

        {/* Design Process */}
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Graphic Design Workflow</h2>
          <p className="text-lg leading-relaxed mb-6">
            We follow a collaborative and iterative process to ensure every visual element aligns
            with your goals, brand identity, and customer expectations.
          </p>
          <img
            src={graphicdesigner}
            alt="Graphic design process illustration"
            className="w-100 object-contain rounded-lg shadow-md mb-6"
          />
          <ul className="space-y-3 text-gray-700 text-base">
            <li>🧠 Concept Research & Moodboards</li>
            <li>🖌️ Logo and Brand Element Creation</li>
            <li>📄 Flyers, Posters, and Brochure Design</li>
            <li>📱 Social Media Visuals & Templates</li>
            <li>🎯 Revisions Based on Feedback</li>
            <li>📦 Final Delivery in Multiple Formats</li>
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mt-10 mb-4">Why Choose Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            We’re passionate about blending creativity with strategy. Here what sets us apart:
          </p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>✅ Eye-Catching Visuals That Convert</li>
            <li>✅ Branding Consistency Across Platforms</li>
            <li>✅ Tailored Designs for Your Target Market</li>
            <li>✅ Creative Direction from Industry Experts</li>
            <li>✅ Fast Turnaround & Unlimited Revisions</li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/services")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            ← Back to Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesigning;
