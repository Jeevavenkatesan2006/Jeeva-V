import React, { useState, useEffect, useRef } from "react";
import shopItems from "../Data/ShopData";
import { FaLock, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const transitionVariants = [
  { x: -150, y: -100, opacity: 0 },
  { x: 150, y: -100, opacity: 0 },
  { x: -150, y: 100, opacity: 0 },
  { x: 150, y: 100, opacity: 0 },
  { scale: 0.5, opacity: 0 },
  { x: 0, y: -200, opacity: 0 },
  { x: 0, y: 200, opacity: 0 },
  { x: -200, y: 0, opacity: 0 },
  { x: 200, y: 0, opacity: 0 },
];

const bgVariants = [
  "bg-gradient-to-br from-[#DD0C0CFF] to-[#1B6CF0FF]",
  "bg-gradient-to-br from-[#F1BB0AFF] to-[#3E41E6FF]",
  "bg-gradient-to-br from-[#043584FF] to-[#23F5F5FF]",
  "bg-gradient-to-br from-[#89B81BFF] to-[#0FE52BFF]",
  "bg-gradient-to-br from-[#B41587FF] to-[#1A6EFFFF]",
  "bg-gradient-to-br from-[#84fab0] to-[#0CA5F1FF]",
  "bg-gradient-to-br from-[#F38908FF] to-[#752C88FF]",
  "bg-gradient-to-br from-[#7913D7FF] to-[#8ec5fc]",
  "bg-gradient-to-br from-[#DAA1E1FF] to-[#f5576c]",
];

const ShopSection = () => {
  const cardsRef = useRef([]);
  const [cartItems, setCartItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      if (!el) return;
      const fromVars = transitionVariants[index % transitionVariants.length];
      gsap.fromTo(
        el,
        { ...fromVars },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setDrawerOpen(true);
  };

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <section className="relative py-24 px-6 min-h-screen text-black bg-gradient-to-br from-[#ffffff] via-[#fdfbff] to-[#fdf9fa] overflow-hidden">
      {/* Glowing circles background */}
      <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse" />

      <h2 className="text-center text-4xl font-bold mb-16 relative z-10">
        Our Shop Packages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
        {shopItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`
              relative overflow-hidden group cursor-pointer rounded-2xl shadow-xl border border-white/30 backdrop-blur-md 
              transition-transform duration-300 transform hover:scale-[1.05] hover:shadow-2xl p-5 
              text-black ${bgVariants[index % bgVariants.length]}
            `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4 transition duration-300 group-hover:scale-105"
            />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <div className="text-sm text-white/90 mb-3">
              <span className="line-through mr-2">{item.originalPrice}</span>
              <span className="text-yellow-200 font-semibold">
                {item.discountedPrice}
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-100 transition-all"
            >
              <FaLock className="text-sm" />
              ADD TO CART
            </button>
          </div>
        ))}
      </div>

      {/* Slide-in Drawer Cart */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[999]"
          onClick={closeDrawer}
        >
          <div
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-[1000] p-6 overflow-y-auto transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={closeDrawer}>
                <FaTimes className="text-fuchsia-900" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex gap-3 items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-pink-600">
                        {item.discountedPrice}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopSection;
