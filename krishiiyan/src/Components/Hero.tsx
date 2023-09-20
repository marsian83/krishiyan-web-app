import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`flex flex-col md:flex-row items-center justify-between p-4 md:p-10 bg-[#3ac13a85] ${
        isVisible ? "fade-in" : ""
      }`}
    >
      <div className="mb-4 md:mb-0 md:w-1/2 text-center">
        <h1 className="text-2xl md:text-[2.5rem] font-bold mb-2">
          <span className="text-[#0b990b]">
            {" "}
            Personalised crop advisory for
          </span>{" "}
          <span className="text-blue-500">25+</span>
        </h1>
        <h1 className="text-2xl md:text-[2.5rem] font-bold mb-2">
          <span className="text-blue-500">crops</span>{" "}
          <span className="text-[#0b990b]">benefitting more than</span>{" "}
          <span className="text-blue-500">4 million</span>
        </h1>
        <h1 className="text-2xl md:text-[2.5rem] font-bold mb-2">
          <span className="text-[#0b990b]">farmers...</span>
        </h1>
      </div>
      <div className="w-full md:w-[47%]">
        <img
          src="Images/home-first.png"
          alt="Your Hero Image Description"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
