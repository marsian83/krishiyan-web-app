import React, { useState } from "react";
import CSVReader from "../../CSVUpload/CSVUpload";

const PestManagementAdmin = () => {
  const [crop, setCrop] = useState<any>();
  return (
    <section className="p-2">
      <div className="w-full max-w-sm mt-10 mb-5 ml-80">
        {/* <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              // for="inline-password"
            >
              Farmer
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              id="countries"
              className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25) border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={onChangeFarmerName}
            >
              <option selected>Select Farmer </option>
              {allFarmer?.map((crop: any) => (
                <option value={farmer}>{crop.name}</option>
              ))}
            </select>
          </div>
        </div> */}
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
              onChange={(e) => setCrop(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              name of pest
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name of pest"
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Scientific Name
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="scientific Name"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Image Link
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Image Link"
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Characterstics of pest
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Characterstics of pest"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Notable Symptoms
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="Notable Symptoms"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Solution
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
              //   onChange={onChangeArea}
              id="inline-password"
              maxLength={50}
              placeholder="Solution"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
        >
          Submit
        </button>
        OR
        <CSVReader />
      </div>
    </section>
  );
};

export default PestManagementAdmin;
