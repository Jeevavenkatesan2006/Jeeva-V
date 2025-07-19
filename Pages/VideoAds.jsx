import React from "react";
import videoad from "../assets/video ad.jpg"; // Replace with your actual image path
import ad1 from "../assets/ad1.jpg"; // Replace with your actual image path
import { useNavigate } from "react-router-dom";

const VideoAds = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen py-16 px-6 lg:px-24 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title and Hero Image */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-indigo-600">Video Advertisement Services</h1>
          <img
            src={videoad}
            alt="Creative video advertising team"
            className="w-full h-100 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Introduction */}
        <div className="text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-indigo-700">Dev Net Solutions</span>, we
            specialize in creating engaging video advertisements that boost your brand visibility
            and drive results. From product promos to corporate videos, we bring ideas to life with
            cinematic impact.
          </p>
        </div>

        {/* Video Ads Process */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Video Ad Production Flow</h2>
          <p className="text-lg leading-relaxed mb-6">
            We provide end-to-end video production solutions tailored to your marketing objectives.
          </p>
          <img
            src={ad1}
            alt="Video ad production process"
            className="w-100 object-contain rounded-lg shadow-md mb-6"
          />
          <ul className="space-y-3 text-gray-700 text-base">
            <li>🎬 Concept Development & Script Writing</li>
            <li>📽️ On-Site or Studio Filming</li>
            <li>✂️ Professional Video Editing</li>
            <li>🎧 Sound Design & Voiceovers</li>
            <li>🔁 Multiple Feedback Iterations</li>
            <li>📱 Export Optimized for All Platforms</li>
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mt-10 mb-4">Why Brands Choose Our Video Ads</h2>
          <p className="text-lg leading-relaxed mb-4">
            We combine storytelling with visual excellence to deliver compelling video campaigns:
          </p>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>✅ High Engagement & Conversion Rates</li>
            <li>✅ Storytelling That Resonates</li>
            <li>✅ Expertise in Multiple Video Formats</li>
            <li>✅ ROI-Driven Marketing Strategy</li>
            <li>✅ Quick Delivery & High Quality Output</li>
          </ul>
        </div>

        {/* Back to Services Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/services")}
            className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-blue-600 hover:to-indigo-500 transition duration-300"
          >
            ← Back to Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoAds;
