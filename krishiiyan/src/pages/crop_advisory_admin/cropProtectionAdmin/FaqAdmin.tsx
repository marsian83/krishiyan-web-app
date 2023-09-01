import React, { useState } from "react";
import CSVReader from "../../CSVUpload/CSVUpload";
import { toast } from "react-toastify";

const FaqAdmin = () => {
  const [crop, setCrop] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFaqSubmit = async () => {
    try {
      setLoading(true);
      console.log("hi");
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/crop/role-admin/faq/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
          body: JSON.stringify({
            localName: crop,
            scientificName: crop,
            faq: [
              {
                question,
                answer,
              },
            ],
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.crop) {
        toast.success("FAQ added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("FAQ not added", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-sm mt-10 mb-5 ml-80">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="text-[#13490A] font-extrabold text-sm mx-5">
            Crop
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            placeholder="Crop"
            className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setCrop(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="text-[#13490A] font-extrabold text-sm mx-5"
            // for="inline-password"
          >
            FAQ on cultivation index
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
            //   onChange={onChangeArea}
            id="inline-password"
            maxLength={50}
            placeholder="FAQ on cultivation index"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="text-[#13490A] font-extrabold text-sm mx-5"
            // for="inline-password"
          >
            Answers
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
            //   onChange={onChangeArea}
            id="inline-password"
            maxLength={50}
            placeholder="Answers"
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
        onClick={handleFaqSubmit}
      >
        {loading ? `Loading...` : `Submit`}
      </button>
      OR
      <CSVReader data="faq" />
      <a
        href="https://docs.google.com/spreadsheets/d/1AcUWeZiHGH1tulkIYXJJDPjcqAgnExfZ6CitBhmGElE/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px 4px 3px rgba(0, 0, 0, 0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin">
          Open Google Sheets
        </button>
              
      </a>
    </div>
  );
};

export default FaqAdmin;
