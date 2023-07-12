import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CSVReader from "../CSVUpload/CSVUpload";

const ProductionVarContentAdmin = () => {
    const [crop, setCrop] = useState<any>();
  const [scientificName, setScientificName] = useState<any>();
  const [stage1Name, setStage1Name] = useState<any>();
  const [stage1Image, setStage1Image] = useState<any>();
  const [stage2Name, setStage2Name] = useState<any>();
  const [stage2Image, setStage2Image] = useState<any>();
  const [stage3Name, setStage3Name] = useState<any>();
  const [stage3Image, setStage3Image] = useState<any>();
  const [stage4Name, setStage4Name] = useState<any>();
  const [stage4Image, setStage4Image] = useState<any>();
  const [kharif, setKharif] = useState<any>();
  const [rabi, setRabi] = useState<any>();
  const [zaid, setZaid] = useState<any>();
  const [optimumTemp, setOptimumTemp] = useState<any>();
  const [rainfall, setRainFall] = useState<any>();
  const [soilType, setSoilType] = useState<any>();
  const [soilPH, setSoilPH] = useState<any>();
  const [seedRate, setSeedRate] = useState<any>();
  const [spacing, setSpacing] = useState<number>(0);
  const [yeild, setYeild] = useState<any>();
  const [interCrop, setInterCrop] = useState<any>();
  const [loading, setLoading] = useState<any>(false);

  const handleAddGeneral = async () => {
    setLoading(true);
    const body = {
      localName: crop,
      scientificName,
      generalInformation: {
        Kharif: kharif,
        Rabi: rabi,
        Zaid: zaid,
        Optimum_temperature: optimumTemp,
        Rainfall_requirement: rainfall,
        Recommended_soil: soilType,
        pH_soil: soilPH,
        Spacing: spacing,
        Seed_rate: seedRate,
        Average_yield: yeild,
        Intercrop: interCrop,
      },
    };
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "crop/role-admin/general/add",
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
      if (data.status) {
        toast.success("Crop added successfully", {
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
        Scientific Name
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Scientific name"
        onChange={(e) => setScientificName(e.target.value)}
      ></textarea>
    </div>
  </div>{" "}
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Kharif(Sowing Month)
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Kharif(Sowing Month)"
        onChange={(e) => setKharif(e.target.value)}
      ></textarea>
    </div>
  </div>{" "}
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Rabi(Sowing Month)
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Rabi (Sowing Month)"
        onChange={(e) => setRabi(e.target.value)}
      ></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Zaid (sowing Month)
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Zaid (sowing Month)"
        onChange={(e) => setZaid(e.target.value)}
      ></textarea>
    </div>
  </div>{" "}
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Optimum temperature(degree C) for growing
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Optimum temperature(degree C) for growing"
        onChange={(e) => setOptimumTemp(e.target.value)}
      ></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        RainFall Requirement(in mm)
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="RainFall Requirement(in mm)"
        onChange={(e) => setRainFall(e.target.value)}
      ></textarea>
    </div>
  </div>{" "}
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Recommended Soil
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=" Recommended Soil"
        onChange={(e) => setSoilType(e.target.value)}
      ></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        PH of Soil
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="PH of Soil"
        onChange={(e) => setSoilPH(e.target.value)}
      ></textarea>
    </div>
  </div>{" "}
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Spacing (row*plant)(cm*cm)
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Spacing (row*plant)(cm*cm)"
        onChange={(event) => {
          const newSpacing = parseInt(event.target.value);
          setSpacing(newSpacing);
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
        Seed rate(Kg/acre)
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Seed rate(Kg/acre)"
        onChange={(e) => setSeedRate(e.target.value)}
      ></textarea>
    </div>
  </div>{" "}
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Average yiled(Quintal/acre)
      </label>
    </div>
    <div className="md:w-2/3 ">
      <textarea
        className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Average yiled(Quintal/acre)"
        onChange={(e) => setYeild(e.target.value)}
      ></textarea>
    </div>
  </div>{" "}
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Solution
      </label>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label
        className="text-[#13490A] font-extrabold text-sm mx-5"
        // for="inline-password"
      >
        Intercrop details and pattern
      </label>
    </div>
    <div className="md:w-2/3">
      <textarea
        className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
        //   onChange={onChangeArea}
        id="inline-password"
        maxLength={50}
        placeholder="Intercrop details and patterns"
        onChange={(e) => setInterCrop(e.target.value)}
      />
    </div>
  </div>
  <button
    type="submit"
    className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
    onClick={handleAddGeneral}
  >
    {loading ? "Loading...." : "Submit"}
  </button>
  OR
  <CSVReader data="addDetails" />
</div>
  );
};

export default ProductionVarContentAdmin;
