import React, { useState, useEffect } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import moment from "moment";
import Loader from "../../Components/themes/Loader";
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [farmerID, setFarmerID] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();

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

  return (
    <>
      <Header title="Farmer" subtitle="Dashboard" />
      <section>
        <div className="grid grid-cols-[70%_30%] items-center box-border w-full">
          <form className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
              Mobile Number/Farmer Id
            </label>
            <input
              onChange={onChangeInput}
              // value={farmerID}
              type="text"
              className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pr-3 pl-3"
            />
            {/* <button
              type="submit"
              className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
            >
              ENTER
            </button>
            <img
              src="Images/plus.png"
              className="w-6 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            /> */}
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
        {/* Content */}
        {loading ? (
          <>
            <div className="flex justify-center item-center mt-10">
              <Loader />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center mx-[5%] gap-y-8 mt-5">
              <div className="flex lg:gap-x-[5%] xl:gap-x-[5%] w-full">
                {farmerDetail ? (
                  <div className="flex flex-col flex-1 lg:w-1/2 bg-pink-200">
                    <h2 className="text-[#13490A] bg-[#C6EDC0] h-8 flex items-center justify-center font-bold text-base">
                      <p className="">General</p>
                    </h2>
                    <div className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center pl-4">
                      <p className="flex flex-1 justify-around">
                        Member Since :{" "}
                        <span className="flex-1">
                          {moment(farmerDetail?.data?.data?.createdAt).format(
                            "MM/DD/YYYY"
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="bg-[#DEDEDE] h-8"></div>
                    <div className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center pl-4">
                      <p className="flex flex-1 justify-around">
                        Last Visited Date :
                        <span className="flex-1">
                          {" "}
                          {moment(farmerDetail?.data?.data?.updatedAt).format(
                            "MM/DD/YYYY"
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="bg-[#DEDEDE] h-8"></div>
                    <div className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center pl-4">
                      <p className="flex flex-1 justify-around">
                        Total Farm Area :{" "}
                        <span className="flex-1">12(Acer)</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {farmerDetail ? (
                  <table className="flex flex-col flex-1 bg-[#6E776D]">
                    <tr className="text-[#13490A] bg-[#C6EDC0] h-8  flex items-center justify-center font-bold text-base">
                      <th>Current Cultivation</th>
                    </tr>
                    <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center">
                      <td className="flex-1">S.No</td>
                      <td className="flex-[3]">Crop Name</td>
                      <td className="flex-[2]">Area</td>
                      <td className="flex-[4]">Location</td>
                    </tr>

                    {farmerDetail?.data?.data?.cultivationData.map(
                      (farmer: any, i: any) => (
                        <>
                          <tr className="bg-[#DEDEDE] h-8 flex justify-between text-[#13490A] text-sm font-semibold">
                            <td className="flex-1 w-10 border-r-4 border-[#6E776D]">
                              {farmer?.serialNo}
                            </td>
                            <td className="flex-[3] w-28 border-r-4 border-[#6E776D]">
                              {farmer?.majorCrops}
                            </td>
                            <td className="flex-[2] w-20 border-r-4 border-[#6E776D]">
                              {farmer?.area} Acer
                            </td>
                            <td className="flex-[4] w-40">
                              {farmer?.areaCode} ,
                              {farmerDetail?.data?.data?.address?.state}
                            </td>
                          </tr>
                        </>
                      )
                    )}
                  </table>
                ) : (
                  <></>
                )}
                {/*  */}
              </div>
              <div className="flex lg:gap-x-[5%] xl:gap-x-[5%] w-full">
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
                      <img src="Images/arrowr.png" alt="arrow" width="20rem" />
                    </td>
                  </tr>
                  <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                    <td className="flex-1">02</td>
                    <td className="flex-[2]">12/03/22</td>
                    <td className="flex-[4]">Urea, Complex B</td>
                    <td className="flex-[2]">₹803.00</td>
                    <td className="flex-[2] flex justify-center">
                      <img src="Images/arrowr.png" alt="arrow" width="20rem" />
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
                      <img src="Images/arrowr.png" alt="arrow" width="20rem" />
                    </td>
                  </tr>
                  <tr className="text-[#13490A] bg-[#6E776D] h-8 font-semibold text-sm flex items-center justify-center">
                    <td className="flex-1">04</td>
                    <td className="flex-[2]">12/03/22</td>
                    <td className="flex-[4]">Urea, Complex B</td>
                    <td className="flex-[2]">₹803.00</td>
                    <td className="flex-[2] flex justify-center items-center">
                      <img src="Images/arrowr.png" alt="arrow" width="20rem" />
                    </td>
                  </tr>
                </table>
                <div className="flex flex-col flex-1 h-fit text-center">
                  <h2 className="text-[#13490A] bg-[#C6EDC0] h-10 flex items-center justify-center font-bold text-base">
                    Other Information
                  </h2>
                  <div className="text-[#13490A] bg-[#6E776D] h-10 font-semibold text-sm flex justify-around items-center ">
                    <p className="flex flex-1 justify-around pl-4">
                      Total Purchases :{" "}
                      <span className="flex-1">₹1,73,800.00</span>
                    </p>
                  </div>
                  <div className="bg-[#DEDEDE] text-[#13490A] h-10 font-semibold text-sm flex items-center ">
                    <p className="flex flex-1 justify-around pl-4">
                      Credit Limit : <span className="flex-1">₹20,000</span>
                    </p>
                  </div>
                  <div className="text-[#13490A] bg-[#6E776D] h-10 font-semibold text-sm flex items-center ">
                    <p className="flex flex-1 justify-around pl-4">
                      Soil Tested :<span className="flex-1">1/03/22</span>
                    </p>
                  </div>
                  <div className="bg-[#DEDEDE] h-10 flex justify-center items-center ">
                    <img
                      src="Images/whatsapp.png"
                      alt="whatsapp"
                      width="30rem"
                    />
                    <span className="ml-10 font-semibold text-sm">
                      Send Whatsapp Message
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Dashboard;
