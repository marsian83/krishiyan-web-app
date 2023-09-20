import React from "react";
import ContactBanner from "../Components/ContactBanner";
import Preloader from "../Components/Preloader";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs";

const Contact = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <ContactBanner />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
