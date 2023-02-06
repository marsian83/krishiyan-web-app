import React, { useState, useEffect } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import moment from "moment";
import { toast } from "react-toastify";
import Loader from "../../Components/themes/Loader";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [farmerID, setFarmerID] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [currentCultivation, setCurrentCultivation] = useState<any>();

  const onChangeInput = (e: any) => {
    setFarmerID(e.target.value);
  };
  const getFarmerById = async () => {
    if (farmerID) {
      setLoading(true);
      const [err, res] = await Api.getFarmer(farmerID);
      if (err) {
        console.log(err);
        toast.error(err.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (res) {
        console.log(res);
        if (res?.data === null) {
          toast.error("Farmer not found!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        setFarmerDetail(res?.data);
      }

      setLoading(false);
    }
  };

  const onClickEnter = async () => {
    await getFarmerById();
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
      }
    };
    init();
  }, [farmerID, farmerDetail]);

  return (
    <>
      <Header title="Farmer" subtitle="Dashboard" />
      <section>
        <div className="grid grid-cols-[70%_30%] items-center box-border w-full">
          <div className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
             Farmer Mobile Number
            </label>
            <input
              onChange={onChangeInput}
              // value={farmerID}
              type="text"
              className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pr-3 pl-3"
            />
            {loading ? (
              <button
                type="submit"
                disabled={loading}
                className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-full rounded text-sm font-thin"
              >
                {/* <Loader /> */}
                Fetching Info...
              </button>
            ) : (
              <button
                type="submit"
                onClick={onClickEnter}
                className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
              >
                ENTER
              </button>
            )}
          </div>

          {/* Farmer Info */}
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
                  {farmerDetail?.address?.street}
                </span>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* Content */}
        {loading ? (
          <>
            <div className="flex justify-center item-center mt-10 ">
              <p className="text-[#00FF00] font-bold text-md">
                {" "}
                Loading farmer details...
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center mx-[5%] gap-y-8 mt-5">
              <div className="flex lg:gap-x-[5%] xl:gap-x-[5%] w-full">
                {/* General Information */}
                {farmerDetail ? (
                  <div className="flex flex-col flex-1 lg:w-1/2 bg-pink-200">
                    <h2 className="text-[#13490A] bg-[#C6EDC0] h-8 flex items-center justify-center font-bold text-base">
                      <p className="">General</p>
                    </h2>
                    <div className="text-[#13490A] bg-[#DEDEDE] h-8 font-semibold text-sm flex items-center pl-4">
                      <p className="flex flex-1 justify-around">
                        Member Since :{" "}
                        <span className="flex-1">
                          {moment(farmerDetail?.createdAt).format(
                            "MM/DD/YYYY"
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center pl-4">
                      <p className="flex flex-1 justify-around">
                        Total Farm Area(Acre) :{" "}
                        <span className="flex-1">{farmerDetail?.totalLandArea}</span>
                      </p>
                    </div>
                    <div className="text-[#13490A] bg-[#DEDEDE] h-8 font-semibold text-sm flex items-center pl-4">
                      <p className="flex flex-1 justify-around">
                        Soil test date :
                        <span className="flex-1">
                          {" "}
                          {moment(farmerDetail?.updatedAt).format(
                            "MM/DD/YYYY"
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center pl-4">
                      <p className="flex flex-1 justify-around">
                        Credit score :
                        <span className="flex-1">
                          {" "}
                          ₹{farmerDetail?.creditLimit?.toString()}
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {/* Current Cultivation */}
                {currentCultivation ? (
                  <table className="flex flex-col flex-1 bg-[#6E776D]">
                    <tr className="text-[#13490A] bg-[#C6EDC0] h-8  flex items-center justify-center font-bold text-base">
                      <th>Current Cultivation</th>
                    </tr>
                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center">
                      <td className="flex-1">S.No</td>
                      <td className="flex-[3]">Crop</td>
                      <td className="flex-[2]">Area(Acre)</td>
                      <td className="flex-[4]">Age(Date of sowing)</td>
                      <td className="flex-[4]">Harvested</td>
                    </tr>

                    <tr className="bg-[#DEDEDE] h-8 flex justify-between text-[#13490A] text-sm font-semibold">
                      <td className="flex-1 w-10 border-r-4 border-[#6E776D]">
                        {/* {currentCultivation?.slotNumber} */}1
                      </td>
                      <td className="flex-[3] w-28 border-r-4 border-[#6E776D]">
                        {currentCultivation?.crop}
                      </td>
                      <td className="flex-[2] w-20 border-r-4 border-[#6E776D]">
                        {currentCultivation?.area}
                      </td>
                      <td className="flex-[4] w-40 border-r-4 border-[#6E776D]">
                        {moment(currentCultivation?.dateOfSowing).format(
                            "MM/DD/YYYY"
                          )}
                      </td>
                      <td className="flex-[4] w-40">
                       Yes
                      </td>
                    </tr>
                  </table>
                ) : (
                  <></>
                )}
              </div>

              <div className="flex lg:gap-x-[5%] xl:gap-x-[5%] w-full">
                {/* History Of Purchase */}
                {farmerDetail ? (
                  <table className="flex flex-col flex-1 h-fit bg-[#6E776D]">
                    <tr className="text-[#13490A] bg-[#C6EDC0] h-8  flex items-center justify-center font-bold text-base">
                      <th>History of Purchase</th>
                    </tr>
                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                      <td className="flex-1">S.No</td>
                      <td className="flex-[2]">Date</td>
                      <td className="flex-[4]">Products</td>
                      <td className="flex-[2]">Price</td>
                      <td className="flex-[2]"></td>
                    </tr>
                    <tr className="bg-[#DEDEDE] h-8 flex  text-[#13490A] text-sm font-semibold justify-center">
                      <td className="flex-1 border-r-4 border-[#6E776D]">01</td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        12/03/22
                      </td>
                      <td className="flex-[4] border-r-4 border-[#6E776D]">
                        Urea, Complex B
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        ₹803.00
                      </td>
                      <td className="flex-[2] flex justify-center items-center">
                        <img
                          src="Images/arrowr.png"
                          alt="arrow"
                          width="20rem"
                        />
                      </td>
                    </tr>
                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                      <td className="flex-1">02</td>
                      <td className="flex-[2]">12/03/22</td>
                      <td className="flex-[4]">Urea, Complex B</td>
                      <td className="flex-[2]">₹803.00</td>
                      <td className="flex-[2] flex justify-center">
                        <img
                          src="Images/arrowr.png"
                          alt="arrow"
                          width="20rem"
                        />
                      </td>
                    </tr>
                    <tr className="bg-[#DEDEDE] h-8 flex text-[#13490A] text-sm font-semibold justify-center">
                      <td className="flex-1 border-r-4 border-[#6E776D]">03</td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        12/03/22
                      </td>
                      <td className="flex-[4] border-r-4 border-[#6E776D]">
                        Urea, Complex B
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        ₹803.00
                      </td>
                      <td className="flex-[2] flex justify-center items-center">
                        <img
                          src="Images/arrowr.png"
                          alt="arrow"
                          width="20rem"
                        />
                      </td>
                    </tr>
                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                      <td className="flex-1">04</td>
                      <td className="flex-[2]">12/03/22</td>
                      <td className="flex-[4]">Urea, Complex B</td>
                      <td className="flex-[2]">₹803.00</td>
                      <td className="flex-[2] flex justify-center items-center">
                        <img
                          src="Images/arrowr.png"
                          alt="arrow"
                          width="20rem"
                        />
                      </td>
                    </tr>
                  </table>
                ) : (
                  <></>
                )}

                {/* Issues Resolved */}
                {farmerDetail ? (
                  <div className="flex flex-col flex-1 h-fit text-center">
                     {farmerDetail ? (
                  <table className="flex flex-col flex-1 h-fit bg-[#6E776D]">
                    <tr className="text-[#13490A] bg-[#C6EDC0] h-8  flex items-center justify-center font-bold text-base">
                      <th>Issues resolved</th>
                    </tr>
                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                      <td className="flex-1">S.No</td>
                      <td className="flex-[2]">Date</td>
                      <td className="flex-[4]">Crop</td>
                      <td className="flex-[2]">Issue Status</td>
                      <td className="flex-[2]">Suggestion</td>
                    </tr>
                    <tr className="bg-[#DEDEDE] h-8 flex  text-[#13490A] text-sm font-semibold justify-center">
                      <td className="flex-1 border-r-4 border-[#6E776D]">01</td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        12/03/22
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                       maize
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                       Resolved
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        test...
                      </td>
                    </tr>


                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                      <td className="flex-1">02</td>
                      <td className="flex-[2]">12/03/22</td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                       paddy
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        Pending
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        test...
                      </td>
                    </tr>

                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                      <td className="flex-1">03</td>
                      <td className="flex-[2]">12/03/22</td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                       paddy
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        Pending
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        test...
                      </td>
                    </tr>

                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                      <td className="flex-1">04</td>
                      <td className="flex-[2]">12/03/22</td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                       paddy
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        Pending
                      </td>
                      <td className="flex-[2] border-r-4 border-[#6E776D]">
                        test...
                      </td>
                    </tr>
                  </table>
                ) : (
                  <></>
                )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Dashboard;
