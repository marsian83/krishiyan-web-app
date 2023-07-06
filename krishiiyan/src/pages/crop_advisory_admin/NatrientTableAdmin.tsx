import React, { useState } from "react";
import { toast } from "react-toastify";
import CSVReader from "../CSVUpload/CSVUpload";

const NatrientTableAdmin = () => {
  const [name, setName] = useState("");
  const [nutrientName, setNutiName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [dosage, setDosages] = useState("");
  const [age, setAge] = useState("");
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitNutrients = async () => {
    try {
      setLoading(true);
      const body = {
        localName: name,
        scientificName: name,
        nutrient: {
          name: nutrientName,
          role: "",
          description: "",
          Dosage: dosage,
          age: age,
          Method_application: method,
        },
      };
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "crop/nutrient/role-admin/add",
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
      if (data.crop) {
        toast.success("Nutrient Added", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(data.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.msg, {
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
            onChange={(e) => setName(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="text-[#13490A] font-extrabold text-sm mx-5"
            // for="inline-password"
          >
            Nutrient
          </label>
        </div>
        <div className="md:w-2/3 ">
          <textarea
            className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nutrient"
            onChange={(e) => setNutiName(e.target.value)}
          ></textarea>
        </div>
      </div>{" "}
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="text-[#13490A] font-extrabold text-sm mx-5"
            // for="inline-password"
          >
            Dosage(Kg/acre)
          </label>
        </div>
        <div className="md:w-2/3 ">
          <textarea
            className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dosage(Kg/acre)"
            onChange={(e) => setDosages(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="text-[#13490A] font-extrabold text-sm mx-5"
            // for="inline-password"
          >
            Age of the crop
          </label>
        </div>
        <div className="md:w-2/3 ">
          <textarea
            className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Age of the crop"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></textarea>
        </div>
      </div>{" "}
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="text-[#13490A] font-extrabold text-sm mx-5"
            // for="inline-password"
          >
            Method of application
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
            //   onChange={onChangeArea}
            id="inline-password"
            maxLength={50}
            placeholder="
            Method of application"
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
        onClick={handleSubmitNutrients}
      >
        {loading ? `Loading....` : `Submit`}
      </button>
      OR
      <CSVReader />
      <a download="NutrientManagement.csv" href="../../CSVFiles/NutrientManagement.csv">
                  <button className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin">
                    Download CSV
                  </button>
                </a>
    </div>
  );
};

export default NatrientTableAdmin;
