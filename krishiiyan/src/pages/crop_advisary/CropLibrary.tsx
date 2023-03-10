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

  const [general, setGeneral] = useState(true);
  const [varietyTab, setVarietyTab] = useState(false);
  const [requirement, setRequirement] = useState(false);
  const [natrient, setNatrient] = useState(false);
  const [cropProtection, setCropProtection] = useState(false);
  const [irrigation, SetIrrigation] = useState(false);
  const [plantationType, setPlantationType] = useState("");

  const onClickGeneral = () => {
    setGeneral(true);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(false);
  };
  const onClickvarietyTab = () => {
    setGeneral(false);
    setVarietyTab(true);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(false);
  };
  const onClickrequirement = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(true);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(false);
  };
  const onClicknitrient = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(true);
    setCropProtection(false);
    SetIrrigation(false);
  };
  const onClicCropProtection = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(true);
    SetIrrigation(false);
  };
  const onClickIrrigation = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(false);
    setNatrient(false);
    setCropProtection(false);
    SetIrrigation(true);
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

  return (
    <div>
      <Header title="Crop Advisary" subtitle="Crop Library" />
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
              submit
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
                    onClick={onClickGeneral}
                    className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
                  >
                    General
                  </button>
                  <button
                    onClick={onClickvarietyTab}
                    className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
                  >
                    Variety
                  </button>
                  <button
                    onClick={onClickrequirement}
                    className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
                  >
                    Pre Sowing practius
                  </button>
                  <button
                    onClick={onClicknitrient}
                    className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
                  >
                    Natrient Management
                  </button>
                  <button
                    onClick={onClicCropProtection}
                    className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
                  >
                    crop protection
                  </button>
                  <button
                    onClick={onClickIrrigation}
                    className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
                  >
                    Irrigation
                  </button>
                  <button
                    onClick={onClickIrrigation}
                    className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
                  >
                    Harvest
                  </button>
                  <button
                    onClick={onClickrequirement}
                    className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
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
                        {/* {obj.Images?.map((url: any) => ( */}
                        {/* <> */}
                        <img
                          src={obj?.image}
                          alt="maize"
                          style={{ width: "20%", height: "20%" }}
                        />
                        {/* </> */}
                        {/* ))} */}

                        <img
                          src="Images/Maize01.png"
                          alt="maize"
                          style={{ width: "20%", height: "20%" }}
                        />
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
                        {/* {obj.Images?.map((url: any) => (
                          <>
                          <img
                          src={url}
                          alt="maize"
                          style={{ width: "20%", height: "20%" }}
                        /> 
                           </>
                        ))} */}

                        <img
                          src={"Images/Maize01.png"}
                          alt="maize"
                          style={{ width: "20%", height: "20%" }}
                        />

                        <img
                          src="Images/Maize01.png"
                          alt="maize"
                          style={{ width: "20%", height: "20%" }}
                        />
                      </div>

                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <table
                          className="table-auto border border-black border-collapse"
                          style={{ width: "50%" }}
                        >
                          <tr className="text-[#13490A] font-normal text-sm w-auto">
                            <td
                              className="border border-black w-[28%]"
                              style={{ padding: "15px" }}
                            >
                              <span
                                className="text-[#13490A] font-bold text-sm"
                                style={{ fontSize: "20px" }}
                              >
                                Parameter
                              </span>
                              {/* {obj?.localName}{" "} */}
                            </td>
                            <td className="border border-black w-[28%]">
                              <span
                                className="text-[#13490A] font-bold text-sm"
                                style={{ fontSize: "20px" }}
                              >
                                Speafication
                              </span>{" "}
                              {/* {obj.climate.map((i: any) => (
                              <>{i} , </>
                            ))} */}
                            </td>
                            {/* <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              Soil:
                            </span>{" "}
                            {obj?.soil}
                          </td> */}
                          </tr>
                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm">
                                Season
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
                              <span className="text-[#13490A] font-bold text-sm">
                                Temperature
                              </span>
                            </td>
                            <td className="border border-black" colSpan={Col}>
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.temperature} </p>

                              {/* {obj.varieties.map((i: any) => (
                              <>{i} , </>
                            ))} */}
                            </td>
                          </tr>

                          <tr className="text-[#13490A] font-normal text-sm border-collapse h-10">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm">
                                Rainfall requirement
                              </span>
                            </td>
                            <td className="border border-black" colSpan={Col}>
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.rainfall} </p>

                              {/* {obj.varieties.map((i: any) => (
                              <>{i} , </>
                            ))} */}
                            </td>
                          </tr>
                          <tr className="text-[#13490A] font-normal text-sm">
                            <td
                              className="border border-black w-[28%]"
                              style={{ textAlign: "start" }}
                            >
                              <span className="text-[#13490A] font-bold text-sm">
                                Recommend soil
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
                              <span className="text-[#13490A] font-bold text-sm">
                                ph of the soil
                              </span>
                            </td>
                            <td className="border border-black">
                              <span className="text-[#13490A] font-bold text-sm"></span>
                              <p>{obj.ph}</p>
                            </td>
                          </tr>

                          {/* <tr className="h-10 border border-black">
                          <th
                            className="border border-black text-left"
                            colSpan={Col2}
                          >
                            Key Market Details
                          </th>
                        </tr> */}
                        </table>
                      </div>

                      {/* <table className="border-collapse">
                        <td className="text-sm  border border- p-4">
                          {obj?.description}
                        </td>
                      </table> */}
                    </>
                  ) : (
                    <></>
                  )}

                  {varietyTab ? (
                    <>
                      <ProductionVarContent />
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
                      <NatrientTable />
                    </>
                  ) : (
                    <></>
                  )}
                  {cropProtection ? (
                    <>
                      <CropProtectionSec />
                    </>
                  ) : (
                    <></>
                  )}
                  {irrigation ? (
                    <>
                      <IrrigationTable />
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
