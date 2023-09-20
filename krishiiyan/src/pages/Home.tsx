import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Hero2 from "../Components/Hero2";
import Hero3 from "../Components/Hero3";
import Navbar from "../Components/Navbar";
import Preloader from "../Components/Preloader";

const Home = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Footer />
    </>
  );
};

export default Home;
