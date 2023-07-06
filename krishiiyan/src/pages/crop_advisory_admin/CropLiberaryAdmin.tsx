import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import ProductionVarContentAdmin from "./ProductionVarContentAdmin";
import ProductionReqContent from "./PreSowingPractiesAdmin/PreSowingPractiesAdmin";
import Stepper from "../../Components/themes/Stepper";
import { Autocomplete, TextField } from "@mui/material";
import NatrientTable from "./NatrientTableAdmin";
import CropProtectionSec from "./cropProtectionAdmin/CropProtectionSecAdmin";
import IrrigationTable from "./IrrigationTableAdmin";
import "./ProductReq.css";
import Hervest from "./cropProtectionAdmin/HervestAdmin";
import Faq from "./cropProtectionAdmin/FaqAdmin";
import { Toast } from "react-toastify/dist/components";
import CSVReader from "../CSVUpload/CSVUpload";
// import Variety from "../../CSVFiles/variety.csv";

const PlantationOptions = [
  {
    value: "Creals",
  },
  {
    value: "Pulses",
  },
  {
    value: "Maize",
  },
];

const CropLibraryAdmin = () => {
  let Col: any = 2;
  let Col2: any = 5;
  let Row: any = 6;
  const [crops, setCrops] = useState<any>();
  const [localsName, setLocalsName] = useState<any>();
  const [scientficCrop, setScientificCrop] = useState<any>();
  const [cropDetails, setCropDetails] = useState<any>();
  const [openTab, setOpenTab] = useState("Genral");
  const [general, setGeneral] = useState(true);
  const [varietyTab, setVarietyTab] = useState(false);
  const [requirement, setRequirement] = useState(false);
  const [natrient, setNatrient] = useState(false);
  const [cropProtection, setCropProtection] = useState(false);
  const [irrigation, SetIrrigation] = useState(false);
  const [plantationType, setPlantationType] = useState("");
  const [harvest, setHarvest] = useState(false);
  const [faq, setFaq] = useState(false);

  const onClickGeneral = () => {
    setGeneral(true);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(false);
    setHarvest(false);
    setFaq(false);
  };
  const onClickvarietyTab = () => {
    setGeneral(false);
    setVarietyTab(true);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(false);
    setHarvest(false);
    setFaq(false);
  };
  const onClickrequirement = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(true);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(false);
    setHarvest(false);
    setFaq(false);
  };
  const onClicknitrient = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(true);
    setCropProtection(false);
    SetIrrigation(false);
    setHarvest(false);
    setFaq(false);
  };
  const onClicCropProtection = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(true);
    SetIrrigation(false);
    setHarvest(false);
    setFaq(false);
  };

  const onClickIrrigation = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(true);
    setHarvest(false);
    setFaq(false);
  };
  const onClickHervest = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(false);
    setHarvest(true);
    setFaq(false);
  };
  const onClickFaq = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(false);
    setHarvest(false);
    setFaq(true);
  };

  /************Handling admin form********** */
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
        stage1Name,
        stage1Image,
        stage2Name,
        stage2Image,
        stage3Name,
        stage3Image,
        stage4Name,
        stage4Image,
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

  /*****Handle fetching crops********* */
  const getCrops = async () => {
    const [err, res] = await Api.getCrops();

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      setCrops(res?.data);
    }
    // console.log(res?.data?.data,"crops....");
  };

  const getcropName = async (localName: any, scientficCrop: any) => {
    if (localName || scientficCrop) {
      setLoading(true);
      const [err, res] = await Api.getCropsbyName(localName, scientficCrop);
      if (err) {
        console.log(err);
        toast.error(err.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (res) {
        console.log(res);
        if (res?.data === null) {
          toast.error("crop not found!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log(res, "Res");
        setCropDetails(res?.data);
      }

      setLoading(false);
    }
  };

  const onChangePlantationType = async (e: any, value: any) => {
    console.log(value, "value");
    setLocalsName(value.localName);
  };
  const onChangeScientificName = async (e: any, value: any) => {
    console.log(value, "value");
    setScientificCrop(value.scientificName);
  };

  const onSubmit = async () => {
    const res = await getcropName(localsName, scientficCrop);
    // await getcropName();
  };

  useEffect(() => {
    const init = async () => {
      await getCrops();
    };
    init();
  }, []);

  return (
    <div>
      <Header title="Crop Advisory" subtitle="Crop Library" />

      <section className="pl-3 pt-3">
        <h2 className="mx-[30%] text-[#13490A] font-extrabold mb-3">{"me"}</h2>
        <div className="flex rounded-md mb-1 gap-2 btn">
          <button
            onClick={() => {
              onClickGeneral();
              setOpenTab("Genral");
            }}
            className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[10vw] py-1 px-3 rounded text-sm font-thin ${
              openTab === "Genral" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
            }`}
          >
            General
          </button>
          <button
            onClick={() => {
              onClickvarietyTab();
              setOpenTab("Variety");
            }}
            className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[10vw] py-1 px-3 rounded text-sm font-thin ${
              openTab === "Variety" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
            }`}
          >
            Variety
          </button>
          <button
            onClick={() => {
              onClickrequirement();
              setOpenTab("Pre Sowing practius");
            }}
            className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[10vw] py-1  rounded text-sm font-thin ${
              openTab === "Pre Sowing practius"
                ? "bg-[#05AB2A]"
                : "bg-[#526D4E]"
            }`}
          >
            Pre Sowing Practius
          </button>
          <button
            onClick={() => {
              onClicknitrient();
              setOpenTab("Natrient Management");
            }}
            className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
              openTab === "Natrient Management"
                ? "bg-[#05AB2A]"
                : "bg-[#526D4E]"
            }`}
          >
            Natrient Management
          </button>
          {/* <button
            onClick={() => {
              onClicCropProtection();
              setOpenTab("crop protection");
            }}
            className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
              openTab === "crop protection" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
            }`}
          >
            Crop Protection
          </button> */}
          <button
            onClick={() => {
              onClickIrrigation();
              setOpenTab("Irrigation");
            }}
            className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
              openTab === "Irrigation" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
            }`}
          >
            Irrigation
          </button>
          <button
            onClick={() => {
              onClickHervest();
              setOpenTab("Harvest");
            }}
            className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
              openTab === "Harvest" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
            }`}
          >
            Harvest
          </button>
          <button
            onClick={() => {
              onClickFaq();
              setOpenTab("FAQ");
            }}
            className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
              openTab === "FAQ" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
            }`}
          >
            FAQ
          </button>
        </div>
        <div className="p-4">
          {general ? (
            <>
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
                      Stage 1 Name
                    </label>
                  </div>
                  <div className="md:w-2/3 ">
                    <textarea
                      className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Stage 1 name"
                      onChange={(e) => setStage1Name(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="text-[#13490A] font-extrabold text-sm mx-5"
                      // for="inline-password"
                    >
                      Image Link Stage 1
                    </label>
                  </div>
                  <div className="md:w-2/3 ">
                    <textarea
                      className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Image Link stage 1"
                      onChange={(e) => setStage1Image(e.target.value)}
                    ></textarea>
                  </div>
                </div>{" "}
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="text-[#13490A] font-extrabold text-sm mx-5"
                      // for="inline-password"
                    >
                      Stage 2 Name
                    </label>
                  </div>
                  <div className="md:w-2/3 ">
                    <textarea
                      className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Stage 2 name"
                      onChange={(e) => setStage2Name(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="text-[#13490A] font-extrabold text-sm mx-5"
                      // for="inline-password"
                    >
                      Image Link Stage 2
                    </label>
                  </div>
                  <div className="md:w-2/3 ">
                    <textarea
                      className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Image Link stage 2"
                      onChange={(e) => setStage2Image(e.target.value)}
                    ></textarea>
                  </div>
                </div>{" "}
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="text-[#13490A] font-extrabold text-sm mx-5"
                      // for="inline-password"
                    >
                      Stage 3 Name
                    </label>
                  </div>
                  <div className="md:w-2/3 ">
                    <textarea
                      className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Stage 3 name"
                      onChange={(e) => setStage3Name(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="text-[#13490A] font-extrabold text-sm mx-5"
                      // for="inline-password"
                    >
                      Image Link Stage 3
                    </label>
                  </div>
                  <div className="md:w-2/3 ">
                    <textarea
                      className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Image Link stage 3"
                      onChange={(e) => setStage3Image(e.target.value)}
                    ></textarea>
                  </div>
                </div>{" "}
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="text-[#13490A] font-extrabold text-sm mx-5"
                      // for="inline-password"
                    >
                      Stage 4 Name
                    </label>
                  </div>
                  <div className="md:w-2/3 ">
                    <textarea
                      className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Stage 4 name"
                      onChange={(e) => setStage4Name(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="text-[#13490A] font-extrabold text-sm mx-5"
                      // for="inline-password"
                    >
                      Image Link Stage 4
                    </label>
                  </div>
                  <div className="md:w-2/3 ">
                    <textarea
                      className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Image Link stage 4"
                      onChange={(e) => setStage4Image(e.target.value)}
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
                <CSVReader />
              </div>
            </>
          ) : (
            <></>
          )}

          {varietyTab ? (
            <>
              <ProductionVarContentAdmin />
            </>
          ) : (
            <></>
          )}

          {requirement ? (
            <>
              <ProductionReqContent />
            </>
          ) : (
            <></>
          )}
          {natrient ? (
            <>
              <NatrientTable />
            </>
          ) : (
            <></>
          )}
          {/* {cropProtection ? (
            <>
              <CropProtectionSec />
            </>
          ) : (
            <></>
          )} */}
          {harvest ? <Hervest /> : <></>}
          {faq ? <Faq /> : <></>}

          {irrigation ? (
            <>
              <IrrigationTable />
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default CropLibraryAdmin;
