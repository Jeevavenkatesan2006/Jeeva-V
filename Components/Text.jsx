import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import googleLogo from "../assets/google.png";
import paper from "../assets/paper.png";
import tree from "../assets/tree.png";
import penpot from "../assets/penpot.png";
import colorpen from "../assets/colorpen.png";
import blacktab from "../assets/blacktab.png";
import notepadyellow from "../assets/notepadyellow.png";

const rotatingSections = [
  {
    badge: "Google Partner",
    logo: googleLogo,
    title: " 🖥️Web Design",
    subheading1: "WEB DESIGNING",
    paragraph1: "E-Commerce Development🛒",
    subheading2: "🌐GOOGLE MY BUSINESS🔎",
    paragraph2: "SOCIAL MEDIA MANAGEMENT",
    description: "✨We’ll build a website that tells your story 🚀.",
    subtext: "What you-Are? What you-Do?",
    bgColor: "bg-[#76BC1C]",
    showSection2: true,
  },
  {
    badge: "Google Partner",
    logo: googleLogo,
    title: [" 📱Digital Marketing",],
    subheading1: "SOCIAL MEDIA ADS",
    paragraph1: "LEAD GENERATION SERVICE",
    subheading2: "🌐GOOGLE ADS",
    paragraph2: "FACEBOOK / INSTAGRAM ADS",
    description: "🚀Grow your brand and 🌐online presence easily.",
    subtext: "Boost reach. Get leads. Grow sales.",
    bgColor: "bg-blue-500",
    showSection2: false,
  },
  {
    badge: "Google Partner",
    logo: googleLogo,
    title: [" 🛍️E-Commerce Development",],
    subheading1: "SHOPIFY DEVELOPMENT",
    paragraph1: "🔗PAYMENT INTEGRATION💳",
    subheading2: "🖌️UI/UX STORE DESIGN📱",
    paragraph2: "BRAND GROWTH STRATEGY",
    description: "🚀Start your 🛒online store with ease.",
    subtext: "Design. Develop. Deliver Success.",
    bgColor: "bg-blue-500",
    showSection2: true,
  },
];

const HeroSection = () => {
  const sectionRef = useRef();
  const paperRef = useRef();
  const logoRef = useRef();
  const treeRef = useRef();
  const penpotRef = useRef();
  const colorpenRef = useRef();
  const blacktabRef = useRef();
  const notepadyellowRef = useRef();
  const titleRef1 = useRef();
  const titleRef2 = useRef();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = rotatingSections[index];

    if (current.bgColor === "bg-[#76BC1C]") {
      gsap.fromTo(titleRef1.current,
        { rotationY: -90, opacity: 0 },
        { rotationY: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }

    if (current.bgColor === "bg-blue-500") {
      gsap.fromTo([titleRef1.current, titleRef2.current],
        { rotationY: -90, opacity: 0 },
        { rotationY: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
      );
    }

    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    if (current.bgColor === "bg-blue-500") {
      logoRef.current && gsap.fromTo(logoRef.current, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.2 });
      treeRef.current && gsap.fromTo(treeRef.current, { x: "100%", y: "-100%", rotate: -180, opacity: 0 }, { x: "0%", y: "0%", rotate: 0, opacity: 1, duration: 1.8 });
      colorpenRef.current && gsap.fromTo(colorpenRef.current, { x: "-100%", y: "-100%", rotate: -180, opacity: 0 }, { x: "0%", y: "0%", rotate: 0, opacity: 1, duration: 1.8 });
      notepadyellowRef.current && gsap.fromTo(notepadyellowRef.current, { x: "100%", y: "100%", rotate: -180, opacity: 0 }, { x: "0%", y: "0%", rotate: 0, opacity: 1, duration: 1.8 });
    }

    if (current.bgColor === "bg-[#76BC1C]") {
      paperRef.current && gsap.fromTo(paperRef.current, { x: "-100%", y: "100%", rotate: -180, opacity: 0 }, { x: "0%", y: "0%", rotate: 0, opacity: 1, duration: 1.5 });
      logoRef.current && gsap.fromTo(logoRef.current, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.2 });
      penpotRef.current && gsap.fromTo(penpotRef.current, { x: "100%", y: "-100%", rotate: -180, opacity: 0 }, { x: "0%", y: "0%", rotate: 0, opacity: 1, duration: 1.8 });
      blacktabRef.current && gsap.fromTo(blacktabRef.current, { x: "100%", y: "100%", rotate: -180, opacity: 0 }, { x: "0%", y: "0%", rotate: 0, opacity: 1, duration: 1.8 });
    }

    const interval = setInterval(() => {
      if (current.bgColor === "bg-blue-500") {
        gsap.to([titleRef1.current, titleRef2.current],
          { rotationY: 90, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.in" }
        );
        setTimeout(() => setIndex((prev) => (prev + 1) % rotatingSections.length), 1200);
      } else {
        setIndex((prev) => (prev + 1) % rotatingSections.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const current = rotatingSections[index];

  return (
    <section className={`relative min-h-screen ${current.bgColor} flex flex-col items-center justify-center text-center overflow-hidden text-white px-4 transition-all duration-700`}>

      {current.bgColor === "bg-[#76BC1C]" && (
        <>
          <img ref={paperRef} src={paper} alt="Paper" className="w-40 h-40 md:w-110 md:h-110 absolute bottom-0 left-0 z-20" />
          <img ref={penpotRef} src={penpot} alt="Penpot" className="w-24 h-24 md:w-74 md:h-74 absolute top-0 right-0 z-20" />
          <img ref={blacktabRef} src={blacktab} alt="Blacktab" className="w-40 h-40 md:w-110 md:h-110 absolute bottom-0 right-0 z-20" />
        </>
      )}

      {current.bgColor === "bg-blue-500" && (
        <>
          <img ref={treeRef} src={tree} alt="Tree" className="w-44 h-36 md:w-80 md:h-60 absolute top-0 right-0 z-20" />
          <img ref={colorpenRef} src={colorpen} alt="Colorpen" className="w-52 h-52 md:w-92 md:h-89 absolute top-0 left-0 z-20" />
          <img ref={notepadyellowRef} src={notepadyellow} alt="notepadyellow" className="w-45 h-50 md:w-80 md:h-115 absolute bottom-0 right-0 z-20" />
        </>
      )}

      <div ref={sectionRef} className="flex flex-col items-center justify-center z-30">
        <img ref={logoRef} src={current.logo} alt="Logo" className="w-36 h-36 md:w-60 md:h-60 mb-3" />
        <h3 className="text-xl font-light mb-2">{current.badge}</h3>

        {current.bgColor === "bg-blue-500" ? (
          <>
            <h1 ref={titleRef1} className="text-4xl md:text-6xl font-extrabold mb-2 text-black">{current.title[0]}</h1>
            <h1 ref={titleRef2} className="text-4xl md:text-6xl font-extrabold mb-4 text-black">{current.title[1]}</h1>
          </>
        ) : (
          <h1 ref={titleRef1} className="text-4xl md:text-6xl font-extrabold mb-4 text-black">{current.title}</h1>
        )}

        {current.showSection2 && (
          <div className="flex flex-col gap-4 text-center">
            <div>
              <h2 className="text-amber-100 font-bold text-xl md:text-2xl">{current.subheading1}</h2>
              <p className="text-white text-sm md:text-base">{current.paragraph1}</p>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl md:text-2xl">{current.subheading2}</h2>
              <p className="text-white text-sm md:text-base">{current.paragraph2}</p>
            </div>
          </div>
        )}

        <p className="mt-6 text-lg">{current.description}</p>
        <p className="text-sm text-black">{current.subtext}</p>

        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-rose-900 animate__animated animate__bounce transition">
  CONTINUE
</button>

      </div>

      <div className="mt-10 animate-bounce z-30">
        <div className="w-6 h-6 border-2 border-black rounded-full"></div>
      </div>

      <div className="fixed top-1/3 right-4 flex flex-col gap-3 z-30">
        <a href="#" className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-full text-sm hover:bg-red-700">Be</a>
        <a href="#" className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-full text-sm hover:bg-pink-700">in</a>
        <a href="#" className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-full text-sm hover:bg-fuchsia-800">f</a>
      </div>
    </section>
  );
};

export default HeroSection;