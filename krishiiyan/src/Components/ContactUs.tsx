import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { name, email, phoneNumber, message } = formData;
    const mailtoLink = `mailto:wetacre0@gmail.com?subject=Contact from ${name}&body=${message} - From: ${email}, Phone: ${phoneNumber}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="flex items-center justify-between p-10 space-x-12">
        {/* ... Contact Information ... */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">Contact Information</h1>

          <div className="flex items-center space-x-4">
            <FiMail className="text-2xl" />
            <a
              href="mailto:wetacre0@gmail.com"
              className="hover:underline font-bold"
            >
              wetacre0@gmail.com
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <FiPhone className="text-2xl" />
              <a
                href="tel:+91 7066744494"
                className="hover:underline mb-4 font-bold"
              >
                Call : +91 7066744494
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-2xl" />
              <a
                href="tel:+91 8903085981"
                className="hover:underline font-bold"
              >
                Call : +91 8903085981
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FiMapPin className="text-2xl mt-1" />
            <address>
              WetAcre Sustainable Solutions LLP CrAdLE, Entrepreneurship
              Development Institute of India, Village Bhat, via Airport Indira
              Bridge, Gandhinagar, Gujarat, 382428- India
            </address>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">Write to Us</h1>
          <h2 className="text-xl font-medium">We'd love to hear from you!</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded p-2 w-full h-32"
          ></textarea>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Send Massage
          </button>
        </div>
      </section>
      <div className="w-full h-[600px] ml-3">
        <iframe
          title="Google Map"
          width="90%"
          height="90%"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28247.726883461957!2d72.628989!3d23.114339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfffee43459262ff%3A0x3b639b2cb36a5284!2sWetAcre%20Sustainable%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1694600354942!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
