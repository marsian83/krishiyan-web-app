import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import Input from "../../Components/themes/Input";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";

const Cultivation = () => {
  const [openTab, setOpenTab] = useState("New");
  const [loading, setLoading] = useState(false);
  const [farmerID, setFarmerID] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [currentCultivation, setCurrentCultivation] = useState<any>();
  const [oldCultivation, setOldCultivation] = useState<any>();

  console.log(currentCultivation?.adoptedSeason);

  const onChangeInput = (e: any) => {
    setFarmerID(e.target.value);
  };
  const getFarmerById = async () => {
    if (farmerID) {
      setLoading(true);
      const [err, res] = await Api.getFarmer(farmerID);
      if (err) {
        console.log(err);
      }
      if (res) {
        console.log(res);

        setFarmerDetail(res?.data);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getFarmerById();
    };
    init();
  }, [farmerID]);

  //Cultivation form data
  const [area, setArea] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [areaType, setAreaType] = useState("");
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");
  const [dateOfSowing, setDateOfSowing] = useState("");
  const [adaptedSeason, setAdaptedSeason] = useState("");
  const [currentStage, setCurrentStage] = useState("");
  const [slotNumber, setSlotNumber] = useState("");

  const onChangeArea = (e: any) => {
    setArea(e.target.value);
  };
  const onChangeAreaCode = (e: any) => {
    setAreaCode(e.target.value);
  };
  const onChangeAreaType = (e: any) => {
    setAreaType(e.target.value);
  };
  const onChangeCrop = (e: any) => {
    setCrop(e.target.value);
  };
  const onChangevariety = (e: any) => {
    setVariety(e.target.value);
  };
  const onChangedateOfSowing = (e: any) => {
    setDateOfSowing(e.target.value);
  };
  const onChangeadaptedSeason = (e: any) => {
    setAdaptedSeason(e.target.value);
  };
  const onChangecurrentStage = (e: any) => {
    setCurrentStage(e.target.value);
  };
  const onChangeCropslotNumber = (e: any) => {
    setSlotNumber(e.target.value);
  };

  const onSubmitHandler = async () => {
    const [err, res] = await Api.createFarmerCultivationData(
      farmerDetail?._id,
      area,
      areaCode,
      areaType,
      crop,
      variety,
      dateOfSowing,
      adaptedSeason,
      currentStage,
      slotNumber
    );
    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      toast.success("New cultivation record created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  //Get Farmer Cultivations
  useEffect(() => {
    const init = async () => {
      const [err, res] = await Api.getFarmerCultivationData(farmerDetail?._id);
      if (res) {
        let current_cultivation =
          res?.data?.farmerCultivationData[
            res?.data?.farmerCultivationData.length - 1
          ];
        setCurrentCultivation(current_cultivation);
        setOldCultivation(res?.data?.farmerCultivationData);
      }
    };
    init();
  }, [farmerID, farmerDetail]);

  return (
    <>
      <Header title="Farmer" subtitle="Cultivation" />
      <section>
        <div className="grid grid-cols-[70%_30%] items-center box-border w-full">
          <form className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
              Mobile Number
            </label>
            <input
              onChange={onChangeInput}
              type="text"
              className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pr-3 pl-3"
            />
          </form>
          {farmerDetail ? (
            <div className="mt-6 leading-4">
              <p className="text-[#000000]">
                Name:{" "}
                <span className="text-[#FB0404] font-bold">
                  {farmerDetail?.name}
                </span>
              </p>
              <p className="text-[#000000]">
                Area :{" "}
                <span className="text-[#FB0404] font-bold">
                  {farmerDetail?.address?.state}
                </span>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>

        {farmerDetail ? (
          <>
            {/* Tabs */}
            <div className="mt-10 flex mx-[6%]">
              <button
                className={`text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] py-1 px-3 rounded mx-5 text-sm font-thin
          ${openTab === "New" ? "bg-[#05AB2A]" : "bg-[#526D4E]"}`}
                onClick={() => {
                  setOpenTab("New");
                }}
              >
                New
              </button>
              <button
                className={`text-[#F3FFF1] flex justify-center shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] py-1 px-3 rounded mx-5 text-sm font-thin ${
                  openTab === "Current" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
                }`}
                onClick={() => {
                  setOpenTab("Current");
                }}
              >
                Current
              </button>
              <button
                className={`text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] py-1 px-3 rounded mx-5 text-sm font-thin 
          ${openTab === "Old" ? "bg-[#05AB2A]" : "bg-[#526D4E]"}`}
                onClick={() => {
                  setOpenTab("Old");
                }}
              >
                Old
              </button>
            </div>

            {/* //New Cultivation */}
            <div className={openTab === "New" ? "block" : "hidden"}>
              <div className="grid grid-cols-[50%_34%] items-center mt-6 mb-5">
                <div className=" grid grid-cols-[50%_34%] items-center">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Area
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangeArea}
                  ></input>
                </div>

                <div className=" grid grid-cols-[50%_34%] items-center">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Area Code
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangeAreaCode}
                  ></input>
                </div>

                <div className=" grid grid-cols-[50%_34%] items-center mt-4">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Area Type
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangeAreaType}
                  ></input>
                </div>

                <div className=" grid grid-cols-[50%_34%] items-center mt-4">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Crop
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangeCrop}
                  ></input>
                </div>

                <div className=" grid grid-cols-[50%_34%] items-center mt-4">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Variety
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangevariety}
                  ></input>
                </div>

                <div className=" grid grid-cols-[50%_34%] items-center mt-4">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Date of sowing
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangedateOfSowing}
                  ></input>
                </div>

                <div className=" grid grid-cols-[50%_34%] items-center mt-4">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Adapted Season
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangeadaptedSeason}
                  ></input>
                </div>

                <div className=" grid grid-cols-[50%_34%] items-center mt-4">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Current Stage
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangecurrentStage}
                  ></input>
                </div>

                <div className=" grid grid-cols-[50%_34%] items-center mt-4">
                  <label className="text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5">
                    Slot Number
                  </label>
                  <input
                    type="text"
                    className="bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md"
                    onChange={onChangeCropslotNumber}
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                onClick={onSubmitHandler}
                className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
              >
                Submit
              </button>
            </div>

            {/* Current Cultivation */}
            <div className={openTab === "Current" ? "block" : "hidden"}>
              {currentCultivation ? (
                <>
                  <table className="table-auto bg-[#6E776D] border-collapse border ml-[9%] w-[54vw] lg:w-[70vw] text-sm font-semibold mt-10">
                    <thead>
                      <tr className="text-[#FFFFFF] h-7 font-medium">
                        <th className="border-r-4 border-[#6E776D]">
                          Slot Number
                        </th>
                        <th className="border-r-4 border-[#6E776D]">Area</th>
                        <th>Area Code</th>
                        <th>Area Type</th>
                        <th>Major crop</th>
                        <th className="border-r-4 border-[#6E776D]">Variety</th>
                        <th className="border-r-4 border-[#6E776D]">
                          Date of Sowing
                        </th>
                        <th className="border-r-4 border-[#6E776D]">
                          Adapted Season
                        </th>
                        <th className="border-r-4 border-[#6E776D]">
                          Current Stage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#DEDEDE] h-10">
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.slotNumber}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.area}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.areaCode}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.areaType}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.crop}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.variety}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.dateOfSowing}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.adoptedSeason}
                        </td>
                        <td className="border-r-4 border-[#6E776D]">
                          {currentCultivation?.currentStage}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* Old cultivation List */}
            <div className={openTab === "Old" ? "block" : "hidden"}>
              {oldCultivation ? (
                <>
                  <table className="table-auto bg-[#6E776D] border-collapse border ml-[9%] w-[54vw] lg:w-[70vw] text-sm font-semibold mt-10">
                    <thead>
                      <tr className="text-[#FFFFFF] h-7 font-medium">
                        <th className="border-r-4 border-[#6E776D]">
                          Slot Number
                        </th>
                        <th className="border-r-4 border-[#6E776D]">Area</th>
                        <th>Area Code</th>
                        <th>Area Type</th>
                        <th>Major crop</th>
                        <th className="border-r-4 border-[#6E776D]">Variety</th>
                        <th className="border-r-4 border-[#6E776D]">
                          Date of Sowing
                        </th>
                        <th className="border-r-4 border-[#6E776D]">
                          Adapted Season
                        </th>
                        <th className="border-r-4 border-[#6E776D]">
                          Current Stage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {oldCultivation?.map((cultivation: any) => (
                        <tr className="bg-[#DEDEDE] h-10">
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.slotNumber}
                          </td>
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.area}
                          </td>
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.areaCode}
                          </td>
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.areaType}
                          </td>
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.crop}
                          </td>
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.variety}
                          </td>
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.dateOfSowing}
                          </td>
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.adoptedSeason}
                          </td>
                          <td className="border-r-4 border-[#6E776D]">
                            {cultivation?.currentStage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Cultivation;
