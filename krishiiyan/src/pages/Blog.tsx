import React from "react";
import BlogSecrtion from "../Components/BlogSecrtion";
import Navbar from "../Components/Navbar";
import BlogSection from "../Components/BlogSection";
import Footer from "../Components/Footer";
import Preloader from "../Components/Preloader";

const Blog = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <BlogSecrtion />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blog;
