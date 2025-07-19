import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import dlogo from "../assets/dlogo.png";

const Preloader = ({ onFinish }) => {
  const loaderRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power4.inOut",
          onComplete: onFinish,
        });
      },
    });

    tl.from(loaderRef.current, { opacity: 0, scale: 0.8, duration: 0.6 })
      .to(loaderRef.current, { opacity: 1, scale: 1, duration: 1 })
      .to({}, { duration: 1.2 }); // hold for 1.2 seconds
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 z-50 overflow-hidden"
    >
      <img src={dlogo} alt="Logo" className="w-24 h-24 mb-4 animate-bounce" />
      <h1 className="text-white text-2xl font-bold">Dev Net Solutions</h1>
    </div>
  );
};

export default Preloader;
