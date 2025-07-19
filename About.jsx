import React, { useLayoutEffect, useRef,useEffect, useState} from "react";
import { gsap } from "gsap";
import girlw from "../assets/girlw.png";
import penpotw from "../assets/penpotw.png";

const About = () => {
  const sectionRef = useRef();
  const badgeRef = useRef();
  const girlwRef = useRef();
  const penpotwRef = useRef();
  const textRef = useRef();
  const countRef = useRef();
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, { opacity: 0, y: 50, duration: 1 });
      gsap.from(badgeRef.current, { opacity: 0, scale: 0, delay: 0.5, duration: 1 });
      gsap.from(girlwRef.current, { x: -200, opacity: 0, delay: 0.6, duration: 1 });
      gsap.from(penpotwRef.current, { x: 200, opacity: 0, delay: 0.7, duration: 1 });
      gsap.from(textRef.current, { opacity: 0, y: 50, delay: 0.8, duration: 1 });
    });
    return () => ctx.revert(); // cleanup on unmount
  }, []);
   useEffect(() => {
    const counter = { value: 0 };
    gsap.to(counter, {
      value: 900,
      duration: 2,
      delay: 0.9,
      ease: "power1.out",
      onUpdate: () => {
        setCount(Math.floor(counter.value));
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-12 bg-amber-50 relative overflow-hidden"
    >
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div
          ref={badgeRef}
          className="absolute top-4 left-33 bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg text-white font-bold text-lg shadow-lg"
        >
          <span className="text-4xl">10</span>
          <br /> Years of <br /> Experiences
        </div>

        <img
          ref={girlwRef}
          src={girlw}
          alt="Girl"
          className="rounded-3xl w-72 md:w-[400px] z-10 relative"
        />
        <img
          ref={penpotwRef}
          src={penpotw}
          alt="Penpot"
          className="absolute bottom-4 right-4 w-28 md:w-120 z-20"
        />
         <div className="absolute bottom-[-20px] left-65 bg-cyan-400 text-black px-4 py-2 rounded-lg shadow-lg z-30 text-center">
          <p ref={countRef} className="font-bold text-2xl">👩‍💻{count}+</p>
          <p className="text-sm">Satisfied Clients</p>
        </div>
      </div>
      {/* Right Section */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 flex flex-col gap-4 md:pl-12 text-center md:text-left"
      >
        <h5 className="text-pink-600 font-semibold text-xl">Who We Are</h5>
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Building Brands,
          <br /> Growing Together
        </h1>
        <p className="text-gray-700 text-base">
          At Dev Nest solutions, we offer more than just website design and development. 
          We enhance your business, online presence, and brand identity through expert web design and digital marketing strategies.
           Our team in Pondicherry creates custom websites that uphold the professional image you’ve built while driving traffic and engagement through targeted digital marketing. 
           As a leading provider of web design, development, and digital marketing solutions, we are committed to delivering exceptional results that help your brand through online.

        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-4 ">
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full md:w-1/2  hover:bg-cyan-300 transition">
            <h2 className="font-bold mb-2">Our Mission🎯 </h2>
            <p className="text-sm">
              Empowering businesses with innovative web design and marketing solutions.
            </p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full md:w-1/2  hover:bg-cyan-300 transition">
            <h2 className="font-bold mb-2">How We Work⚙️</h2>
            <p className="text-sm">Custom websites that deliver results and drive growth.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-6 items-center">
          <button className="bg-purple-500 hover:bg-purple-800 transition text-white font-semibold px-6 py-3 rounded-full">
            Consulting Now↗️
          </button>
          <div className="text-left">
            <p className="font-semibold text-gray-800">Call 24/7*</p>
            <p className="text-pink-600 font-bold text-xl">+91 9715921394</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
