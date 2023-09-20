// FormPage.tsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    quantity: "",
    moisture: "",
    foreignMatter: "",
    fibre: "",
    debris: "",
    protein: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Send a POST request to your API to save the data
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/create-popup`,
        formData
      );
      if (response.data.success) {
        toast.success("Popup Created Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Try again", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error: any) {
      toast.error(error.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Handle the error
    }
  };

  return (
    <div>
      <div className="w-full max-w-sm mt-10 mb-5 ml-80">
        <div className="md:flex md:items-center mb-6">
          <form className="items-center">
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Title:
              </label>
              <input
                type="text"
                name="title"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Price:
              </label>
              <input
                type="text"
                name="price"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Quantity:
              </label>
              <input
                type="text"
                name="quantity"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Moisture:
              </label>
              <input
                type="text"
                name="moisture"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.moisture}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Foreign Matter:
              </label>
              <input
                type="text"
                name="foreignMatter"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.foreignMatter}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Fibre:
              </label>
              <input
                type="text"
                name="fibre"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.fibre}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Debris:
              </label>
              <input
                type="text"
                name="debris"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.debris}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Protein:
              </label>
              <input
                type="text"
                name="protein"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.protein}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Description:
              </label>
              <textarea
                name="description"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
