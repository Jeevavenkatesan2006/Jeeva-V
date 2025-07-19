import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ContactUs = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  const formRef = useRef();
  const mapRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    message: "",
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation
      gsap.from(sectionRef.current, { opacity: 0, y: 50, duration: 1 });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 0.4,
      });

      // Form animation
      gsap.from(formRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.8,
      });

      // Map animation
      gsap.from(mapRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;

    if (!name || !phone || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    alert("Submitted Successfully ✅");
    setFormData({ name: "", phone: "", business: "", message: "" });
  };

  const contactDetails = [
    {
      title: "Email Address",
      description: (
        <>
          <p>Devnetsolution@gmail.com</p>
          <p>info@Devnetsolution.in</p>
        </>
      ),
      icon: "📧",
      label: "Contact",
    },
    {
      title: "Phone Number",
      description: (
        <>
          <p>+91 9715921394</p>
          <p>+91 9566382003</p>
        </>
      ),
      icon: "📞",
      label: "Call",
    },
    {
      title: "Location",
      description: (
        <>
          <p>80/2 , Sri Krishna Building, Chinthamanipudur</p>
          <p>Trichy Main Road, Coimbatore - 641402</p>
        </>
      ),
      icon: "📍",
      label: "Address",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100 px-6 md:px-20 py-16 flex flex-col gap-16"
    >
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="p-6 rounded-xl shadow-lg bg-white hover:bg-purple-100 border-2 border-purple-300 hover:border-pink-500 transition space-y-3"
          >
            <span className="bg-pink-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
              {item.label}
            </span>
            <h3 className="font-bold text-xl flex gap-2 items-center text-gray-900">
              <span className="text-2xl">{item.icon}</span> {item.title}
            </h3>
            <div className="text-gray-700 text-sm space-y-1">{item.description}</div>
          </div>
        ))}
      </div>

      {/* Contact Form & Map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Map */}
        <div ref={mapRef} className="md:col-span-1 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Get In Touch!</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            That’s great to know! At Dev Net Coimbatore, our team is ready to assist,
            ensuring seamless website services and quick responses.
          </p>
          <iframe
            title="location-map"
            className="w-full h-64 rounded-xl border-2 border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5511923928554!2d76.96284367410042!3d11.01684419216061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85768e6d60a03%3A0xbef5765181a591fa!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1721288497513"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Form */}
        <div
          ref={formRef}
          className="md:col-span-2 p-6 rounded-xl shadow-lg border-2 border-purple-300 bg-white space-y-4"
        >
          <h3 className="font-bold text-xl mb-2 text-gray-900">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full border rounded-md p-3 focus:outline-none focus:border-pink-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              className="w-full border rounded-md p-3 focus:outline-none focus:border-pink-500"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <input
              className="w-full border rounded-md p-3 focus:outline-none focus:border-pink-500"
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Business Name"
            />
            <textarea
              className="w-full border rounded-md p-3 h-28 focus:outline-none focus:border-pink-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white font-semibold rounded-md p-3 transition-all"
            >
              Send Message ✉️
            </button>
          </form>
        </div>
      </div>

      {/* Payment Section */}
      <div className="w-full flex flex-col items-center gap-4 text-center">
        <h3 className="text-lg font-bold text-purple-700">SCAN & PAY USING ANY UPI APP</h3>
        <img
          src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=upi://pay?pa=logeshharish0-4@okaxis&pn=DEV%20NET%20SOLUTIONS"
          alt="QR Code"
          className="w-40 h-40"
        />
        <p className="text-sm text-gray-700">OR</p>
        <div className="text-sm text-gray-800 space-y-1">
          <p><strong>UPI ID:</strong> <span className="text-pink-600">logeshharish0-4@okaxis</span></p>
          <p><strong>Name:</strong> DEV NET SOLUTIONS</p>
          <p><strong>Account Number:</strong> 1864920000006705</p>
          <p><strong>IFSC:</strong> UTKS0001649</p>
          <p><strong>Bank:</strong> Utkarsh Small Finance Bank</p>
          <p><strong>Branch:</strong> Coimbatore</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
