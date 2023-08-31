import React, { useState } from "react";
import SeedTable from "./SeedTableAdmin";
import "../ProductReq.css";
import { toast } from "react-toastify";
import CSVReader from "../../CSVUpload/CSVUpload";
const ProductionReqContent = () => {
  const [crop, setCrop] = useState("");
  const [Land_Preparation, setLand_Preparation] = useState("");
  const [Seed_treatment, setSeed_treatment] = useState("");
  const [seed_doasage, setSeed_doasage] = useState("");
  const [Soil_conditions, setSoil_conditions] = useState("");
  const [Pre_Sowing_Operations, setPre_Sowing_Operations] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePreSowingSubmit = async () => {
    try {
      setLoading(true);
      if (
        !crop ||
        !Land_Preparation ||
        !Seed_treatment ||
        !seed_doasage ||
        !Soil_conditions ||
        !Pre_Sowing_Operations
      ) {
        toast.error("Please fill all the fields", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      console.log(Pre_Sowing_Operations);
      const body = {
        localName: crop,
        scientificName: crop,
        presowingPractices: {
          Land_Preparation: Land_Preparation,
          Seed_treatment: {
            nameOfChemical: Seed_treatment,
            Dosage: seed_doasage,
          },
          Intercultural_operations: Pre_Sowing_Operations,
          Soil_Conditions: Soil_conditions,
        },
      };
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "crop/role-admin/preSowing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.status == 200) {
        toast.success("Pre-Sowing Practices added!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(data.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
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
              Land preparation
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Land preparation"
              onChange={(e) => setLand_Preparation(e.target.value)}
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Seed treatment method Name
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Seed treatment method Name"
              onChange={(e) => setSeed_treatment(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Seed treatment method Dosage
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Seed treatment method Dosage"
              onChange={(e) => setSeed_doasage(e.target.value)}
            ></textarea>
          </div>
        </div>{" "}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Soil conditions
            </label>
          </div>
          <div className="md:w-2/3 ">
            <textarea
              className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Soil conditions"
              onChange={(e) => setSoil_conditions(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="text-[#13490A] font-extrabold text-sm mx-5"
              // for="inline-password"
            >
              Pre Sowing Operations
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
              placeholder="Pre Sowing Operations"
              onChange={(e) => setPre_Sowing_Operations(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
          onClick={handlePreSowingSubmit}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        <CSVReader data="presowing" />
        <a
          href="https://docs.google.com/spreadsheets/d/1UwZBmh85jXxgz2rO3AWrMgEh6q15WkJD16rNVI6wvow/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px 4px 3px rgba(0, 0, 0, 0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin">
            Open Google Sheets
          </button>
                
        </a>
      </div>
    </section>
  );
};

export default ProductionReqContent;
