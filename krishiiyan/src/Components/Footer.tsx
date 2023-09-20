import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f3f1fe] text-[#333333] p-4 sm:p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and tagline */}
        <div>
          <img
            src="Images/logoname.png"
            alt="Company Logo"
            className="w-[150px] sm:w-[200px] h-[62px] sm:h-[82px] mb-4"
          />
          <p className="mb-4">WetAcre Sustainable Solutions</p>
          <a
            href="#"
            className="text-green-500 font-bold hover:text-blue-500 text-lg"
          >
            Read More
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-8 ">Quick Links</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/who" className="hover:underline">
                Who are we?
              </Link>
            </li>
            <li>
              <Link to="/what" className="hover:underline">
                What we do?
              </Link>
            </li>
            <li>
              <Link to="/tech" className="hover:underline">
                Our technology
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-8">Get in Touch</h2>

          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-4 h-8 w-8 text-green-500" />
            <p className="font-bold">
              WetAcre Sustainable Solutions LLP, CrAdLE, Village Bhat,
              Gandhinagar, Gujarat, 382428- India
            </p>
          </div>

          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-4 h-6 w-6 text-green-500" />
            <a
              href="mailto:info@krishiyan.com"
              className="hover:underline font-bold"
            >
              info@krishiyan.com
            </a>
          </div>
          <div className="flex items-center ">
            <FaPhone className="mr-4 h-6 w-6 text-green-500" />
            <a
              href="tel:+91 8055850995"
              className="hover:underline mb-4 font-bold"
            >
              Call : +91 80558 50995
            </a>
          </div>
          <div className="flex items-center ">
            <FaPhone className="mr-4 h-6 w-6 text-green-500" />
            <a href="tel:+91 7066744494" className="hover:underline font-bold">
              Call : +91 70667 44494
            </a>
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Location</h2>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28247.726883461957!2d72.628989!3d23.114339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfffee43459262ff%3A0x3b639b2cb36a5284!2sWetAcre%20Sustainable%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1694681667907!5m2!1sen!2sin"></iframe>
        </div>
      </div>

      {/* Copyright */}
      <hr className="my-8" />
      <div className="text-center">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
