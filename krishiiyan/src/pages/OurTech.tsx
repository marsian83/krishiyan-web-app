import React from "react";
import TechCard from "../Components/TechCard";
import Navbar from "../Components/Navbar";
import TechCard1 from "../Components/TechCard1";
import TechBanner from "../Components/TechBanner";
import TechCard2 from "../Components/TechCard2";
import TechCard3 from "../Components/TechCard3";
import Footer from "../Components/Footer";
import Preloader from "../Components/Preloader";

const OurTech = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <TechBanner />

      <TechCard2 />
      <TechCard3 />
      <TechCard1 />
      <TechCard />
      <Footer />
    </>
  );
};

export default OurTech;
