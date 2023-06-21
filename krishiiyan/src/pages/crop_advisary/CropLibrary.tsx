import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import ProductionVarContent from "./ProductionVarContent";
import ProductionReqContent from "./PreSowing/PreSowingPracties";
import Stepper from "../../Components/themes/Stepper";
import { Autocomplete, TextField } from "@mui/material";
import NatrientTable from "./NatrientTable";
import CropProtectionSec from "./cropProtection/CropProtectionSec";
import IrrigationTable from "./IrrigationTable";
import "./ProductReq.css";
import Hervest from "./cropProtection/Hervest";
import Faq from "./cropProtection/Faq";

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

const CropLibrary = () => {
  let Col: any = 2;
  let Col2: any = 5;
  let Row: any = 6;
  const [crops, setCrops] = useState<any>();
  const [localsName, setLocalsName] = useState<any>();
  const [scientficCrop, setScientificCrop] = useState<any>();
  const [cropDetails, setCropDetails] = useState<any>();
  const [loading, setLoading] = useState(false);
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

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition() {
  //     // setLat(position.coords.latitude);
  //     // setLong(position.coords.longitude);
  //   });

  console.log("");
  return (
    <div>
      <Header title="Crop Advisory" subtitle="Crop Library" />
      <section className="p-5 grid grid-cols-[30%_30%_30%_10%] ">
        <div className="font-extrabold grid grid-cols-[50%_50%_50%] items-cente  ">
          {/* <label className="text-[#13490A] text-center">Type</label>
          <input
            placeholder="Cereal"
            // defaultValue={type}
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
          /> */}
        </div>
        {/* <div className=" grid-cols-[50%_70%] items-center" */}
        <div className="grid grid-cols-[35%_45%_15%_5%] mt-5 flex-row items-center w-full">
          {/* <div> */}
          {/* <label className="text-[#13490A] text-center" >
            Select your Scientific name
          </label>

          <Autocomplete
            onChange={onChangeScientificName}
            id="plantation-select"
            sx={{ width: "100%" }}
            options={crops}
            autoHighlight
            getOptionLabel={(crops) => crops?.scientificName}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose plantation type"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          /> */}
          {/* <label className="text-[#13490A] text-center">Select your Crop</label> */}
          <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
            Select your Crop
          </label>

          <Autocomplete
            onChange={onChangePlantationType}
            id="plantation-select"
            sx={{ width: "100%" }}
            options={crops}
            autoHighlight
            getOptionLabel={(crops) => crops?.localName}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Crop Name"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
          {loading ? (
            <button
              style={{ marginTop: "10px", marginLeft: "20px" }}
              type="submit"
              disabled={loading}
              className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-full rounded text-sm font-thin"
            >
              {/* <Loader /> */}
              Fetching Info...
            </button>
          ) : (
            <button
              style={{ marginTop: "8px", marginLeft: "5px", padding: "10px" }}
              type="submit"
              onClick={onSubmit}
              className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
            >
              Submit
            </button>
          )}
        </div>
        <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
          {/* <label className="text-[#13490A] text-center">Variety</label>
          <input
            placeholder="Variety"
            // defaultValue={variety}
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
          /> */}
        </div>
      </section>
      {cropDetails?.length > 0 &&
        cropDetails
          // ?.filter((val: any) => {
          //   if (crop === "") {
          //     return;
          //   } else if (
          //     val?.localName?.toLowerCase().includes(crop.toLowerCase())
          //   ) {
          //     return val;
          //   }
          // })
          ?.map((obj: any) => (
            <>
              <section className="pl-3 pt-3">
                <h2 className="mx-[30%] text-[#13490A] font-extrabold mb-3">
                  {obj?.localName}
                </h2>
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
                  <button
                    onClick={() => {
                      onClicCropProtection();
                      setOpenTab("crop protection");
                    }}
                    className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
                      openTab === "crop protection"
                        ? "bg-[#05AB2A]"
                        : "bg-[#526D4E]"
                    }`}
                  >
                    Crop Protection
                  </button>
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          flexWrap: "wrap",
                          marginBottom: "20px",
                          marginRight: "20px",
                        }}
                      >
                        <figure>
                          <img
                            src="Images/Maize_Germination.jpg"
                            alt="maize"
                            width={210}
                          />
                          <figcaption>Germination</figcaption>
                        </figure>

                        <figure>
                          <img
                            src="https://assets.thehansindia.com/hansindia-bucket/COMMERCIAL-CROPS_5889.jpg"
                            alt="maize"
                            width={210}
                          />
                          <figcaption>Vegetative stage </figcaption>
                        </figure>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          flexWrap: "wrap",
                          marginBottom: "20px",
                          marginRight: "20px",
                        }}
                      >
                        <figure>
                          <img src="Images/Vegetative_stage.jpg" alt="maize" />
                          <figcaption>Vegetative stage </figcaption>
                        </figure>
                        <figure>
                          <img src={"Images/Maize_Flowering.jpg"} alt="maize" />
                          <figcaption>Fowering stage </figcaption>
                        </figure>
                      </div>

                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {/*<table
                          className="table-auto border border-black border-collapse"
                          style={{ width: "50%" }}
                        >
                          <tr className="text-[#13490A] font-normal text-sm w-auto">
                            <td className="border border-black w-[28%] p-[10px]">
                              <span className="text-[#13490A] font-bold text-base">
                                Parameter
                              </span>
                            </td>
                            <td className="border border-black w-[28%]">
                              <span className="text-[#13490A] font-bold text-base p-[10px]">
                                Speafication
                              </span>{" "}
                            </td>
                          </tr>
                          <tr className="text-[#13490A] font-normal text-sm">
                            <td className="border border-black w-[28%] text-start">
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Kharif (Sowing Month)
                              </span>{" "}
                            </td>
                            <td className="border border-black">
                              {obj.season.map((i: any) => (
                                <>{i} , </>
                              ))}
                            </td>
                          </tr>
                          <tr className="text-[#13490A] font-normal text-sm border-collapse h-10">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Rabi (Sowing Month)
                              </span>
                            </td>
                            <td className="border border-black" colSpan={Col}>
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.temperature} </p>
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm border-collapse h-10">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Zaid (Sowing Month)
                              </span>
                            </td>
                            <td className="border border-black" colSpan={Col}>
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.rainfall} </p>
                            </td>
                          </tr>
                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Optimum temperature ( ° C) for growing
                              </span>{" "}
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p> {obj.soil}</p>
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Rainfall requirement (mm)
                              </span>
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.ph}</p>
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Recommended soil
                              </span>
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.ph}</p>
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                ph of the soil
                              </span>
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.ph}</p>
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Spacing (row * plant )(cm *cm)
                              </span>
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.ph}</p>
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Seed rate (kg/ acre)
                              </span>
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.ph}</p>
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm pl-2">
                                Average yield (Quintal /acre)
                              </span>
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.ph}</p>
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[black] font-bold text-sm pl-2">
                                Intercrop details and pattern
                              </span>
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.ph}</p>
                            </td>
                          </tr>
                        </table> */}

                        <table className="table-auto border-collapse border border-black font-bold text-base w-[60%] mx-auto">
                          <thead className="border-b border-black">
                            <tr className="text-center">
                              <th className="border-r border-black py-[1.2%] text-lg">
                                Parameter
                              </th>
                              <th className="border-r border-black py-[1.2%] text-lg">
                                Speafication
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Stage1 */}
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 font-semibold pr-2 ">
                                Kharif (Sowing Month)
                              </td>

                              <td className="border-r border-black font-thin">
                                {/* {farmerDetail?.totalLandArea || "-"} */}
                                {obj.generalInformation.Kharif}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Rabi (Sowing Month)
                              </td>

                              <td className="border-r border-black font-thin">
                                {obj.generalInformation.Rabi}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Zaid (Sowing Month)
                              </td>

                              <td className="border-r border-black font-thin">
                                {obj.generalInformation.Zaid}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Optimum temperature ( ° C) for growing
                              </td>

                              <td className="border-r border-black font-thin">
                                {obj.generalInformation.Optimum_temperature}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Rainfall requirement (mm)
                              </td>

                              <td className="border-r border-black font-thin pr-2">
                                {obj.generalInformation.Rainfall_requirement}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Recommended soil
                              </td>

                              <td className="border-r border-black font-thin pr-2">
                                {obj.generalInformation.Recommended_soil}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                pH of the soil
                              </td>

                              <td className="border-r border-black font-thin">
                                {obj.generalInformation.pH_soil}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Spacing (row * plant )(cm *cm)
                              </td>

                              <td className="border-r border-black font-thin">
                                {obj.generalInformation.Spacing}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Seed rate (kg/ acre)
                              </td>

                              <td className="border-r border-black font-thin">
                                {obj.generalInformation.Seed_rate}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Average yield (Quintal /acre)
                              </td>

                              <td className="border-r border-black font-thin">
                                {obj.generalInformation.Average_yield}
                              </td>
                            </tr>
                            <tr className="h-10 border-b border-black">
                              <td className="border-r border-black text-start pl-2 pr-2">
                                Intercrop details and pattern
                              </td>

                              <td className="border-r border-black font-thin">
                                {obj.generalInformation.Intercrop}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {varietyTab ? (
                    <>
                      <ProductionVarContent crop={obj} />
                    </>
                  ) : (
                    <></>
                  )}

                  {requirement ? (
                    <>
                      <ProductionReqContent crop={obj} />
                    </>
                  ) : (
                    <></>
                  )}
                  {natrient ? (
                    <>
                      <NatrientTable crop={obj} />
                    </>
                  ) : (
                    <></>
                  )}
                  {cropProtection ? (
                    <>
                      <CropProtectionSec crop={obj} />
                    </>
                  ) : (
                    <></>
                  )}
                  {harvest ? <Hervest crop={obj} /> : <></>}
                  {faq ? <Faq crop={obj} /> : <></>}

                  {irrigation ? (
                    <>
                      <IrrigationTable crop={obj} />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </section>
            </>
          ))}
    </div>
  );
};

export default CropLibrary;
