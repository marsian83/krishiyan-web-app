import React, { useEffect, useState } from "react";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import Header from "../../Components/layouts/Header";
import moment from "moment";
import ProductList from "./Sale/Products/ProductList";
const Sale = () => {
  const [number, SetNumber] = useState<any>(true);
  const [data, setData] = useState(false);
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
          // toast.error("Farmer not found!", {
          //   position: toast.POSITION.TOP_RIGHT,
          // });
        }
        setFarmerDetail(res?.data);
      }

      setLoading(false);
    }
  };

  const onClickEnter = async () => {
    localStorage.setItem("Number", farmerID);
    await getFarmerById();
    SetNumber(false);
    setData(true);
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

  useEffect(() => {
    const init = async () => {
      await getFarmerById();
    };
    init();
  }, [farmerID]);

  useEffect(() => {
    if (
      !localStorage.Number ||
      localStorage.Number === "" ||
      localStorage.Number === undefined
    ) {
      return;
    } else if (localStorage.Number || !localStorage.Number === undefined) {
      setFarmerID(localStorage.Number);
      onClickEnter();
    }
  }, []);
  return (
    <div>
      <Header title="Pos" subtitle="Sale" />
      <section className="flex border border-[#13490A] border-collapse font-roboto h-[88vh]">
        <div className="flex flex-col flex-[4]">
          <div className="flex-[2] flex items-center gap-x-[3%] border border-black text-sm text-[#13490A] font-bold  ">
            {number ? (
              <>
                <label className="font-bold text-sm text-[#033E02] mb-1 text-base ml-2">
                  Mobile Number/Name/ID
                </label>
                <input
                  type="text"
                  className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center h-10 border border-[#033E02]"
                  style={{ width: "320px" }}
                  onChange={onChangeInput}
                />
                <button
                  className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base"
                  onClick={onClickEnter}
                >
                  ENTER
                </button>
                <button className=" w-10 h-6 flex items-center justify-center rounded-md">
                  <img src="Images/plus.png" alt="plus" className="h-6 w-6" />
                </button>{" "}
              </>
            ) : null}
            {data ? (
              <div className="flex space-x-96 w-full">
                <div className="right  font-bold flex-[1.2] text-start">
                  <p>Name : {farmerDetail?.name}</p>
                  <p>Phone : {farmerDetail?.mobile}</p>
                  <p>E-Mail : </p>
                  <p>Area : {farmerDetail?.address?.street}</p>
                  <p>Dealer: </p>
                </div>

                <div className="right  font-bold flex-[1.2] text-start">
                  <p>Type : {farmerDetail?.plantation_type}</p>
                  <div className="flex gap-2">
                    <div>Available Credit :{" "}</div>
                    <div className="text-[#FF0000]">₹ {farmerDetail?.creditLimit}</div>
                  </div>
                  <p>
                    Member Since :{" "}
                    {moment(farmerDetail?.createdAt)?.format("DD-MM-YY")}
                  </p>
                  <p>Number Of Purchases : 0</p>
                  <p>Due: 0</p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex-[10] flex">
            <div className="flex flex-col flex-1">
              <div
                className="flex justify-around  border-collapse h-10 shadow-sm"
                style={{ backgroundColor: "rgb(242 242 242)" }}
              >
                <button className="border border-collapse border-black flex-1 text-sm font-bold">
                  Recommended
                </button>
                <button className="border border-collapse border-black flex-1 text-sm font-bold">
                  Fertilizer
                </button>
                <button className="border border-collapse border-black flex-1 text-sm font-bold">
                  Pesticide
                </button>
                <button className="border border-collapse border-black flex-1 text-sm font-bold">
                  Fungicide
                </button>
                <button className="border border-collapse border-black flex-1 text-sm font-bold">
                  Herbicide
                </button>
              </div>
              <div
                className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                style={{ backgroundColor: "rgb(242 242 242)" }}
              >
                <div className="flex border border-[#526D4E] px-[1%] rounded-lg w-[70%] h-6 mx-1 my-1 items-center">
                  <input
                    type="text"
                    className="text-[#13490A] !outline-none bg-transparent w-full font-normal text-center"
                    placeholder="Type here to search"
                  />
                  <img
                    src="Images/Search.png"
                    alt="searchbar"
                    className="h-4 w-4"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-2 my-2 text-sm font-bold">
                <ProductList />
              </div>
            </div>
            <div className="border border-black flex-[1.2]">
              <div
                className="h-10 flex items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] gap-x-5 pl-1"
                style={{ backgroundColor: "rgb(242 242 242)" }}
              >
                <label className="font-bold text-sm text-[#033E02]">
                  PRODUCT ID
                </label>
                <input
                  type="text"
                  className="bg-[#f2f2f2]  rounded-md py-[1%] text-center h-7 border border-[#033E02]"
                />
                <button className="bg-[#05AB2A] w-10 h-8 flex items-center justify-center rounded-md">
                  <img src="Images/plus.png" alt="plus" className="h-5 w-5" />
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex-[4] border border-[#13490A] border-collapse font-bold text-sm text-[#13490A] flex flex-col justify-around">
            <div className="flex justify-center place-items-start gap-x-[6%]">
              <p>Recommentations</p>
            </div>
          </div>
        </div>
        <div className="right border border-[#13490A] text-sm text-[#13490A] font-bold flex-[1.2]">
          <div className="item flex justify-between py-4 border border-[#13490A] px-1">
            <p>Date</p>
            <p className="text-[#526D4E] font-normal">09/09/2022 10:10 PM</p>
          </div>
          <div className="item flex justify-between py-4 border border-[#13490A] px-1">
            <p>Subtotal</p>
            <p className="text-[#526D4E] font-normal">00.00</p>
          </div>
          <div className="discount flex  justify-between py-4  border border-[#13490A] px-1">
            <p>
              Discount <span className="ml-4">10%</span>
            </p>
            <p className="text-[#526D4E] font-normal">$00.00</p>
          </div>
          <div className="discount flex justify-between py-4 border border-[#13490A] px-1">
            <p className="">
              Tax <span className="ml-8">5%</span>
            </p>
            <p className="text-[#526D4E] font-normal">$00.00</p>
          </div>
          <div className="discount flex justify-between py-4  border border-[#13490A] px-1">
            <p>Shipping</p>
            <p className="text-[#526D4E] font-normal">$00.00</p>
          </div>
          <div className="total flex justify-between py-4 border border-[#13490A] px-1">
            <p>Total</p>
            <p className="text-[#526D4E] font-normal">$00.00</p>
          </div>
          <div className=" flex justify-around mt-10 flex-row">
            <button className="bg-[#05AB2A] text-white font-thin tracking-wide w-20 h-9 flex items-center justify-center rounded-md text-base">
              Spilt
            </button>
            <button className="bg-[#05AB2A] text-white font-thin tracking-wide w-25 p-4 h-9 flex items-center justify-center rounded-md text-base">
              Pay by Credit
            </button>
          </div>

          <p className="flex justify-start mt-5 ml-2">Payment Method</p>
          <div className="flex flex-row w-20 ml-2 mt-5 ">
            <img src="/images/UPI.png" alt="upi" />
            <img src="/images/Moneybundle.png" alt=" cash" />
            <img src="/images/CreditCard.png" alt=" credit card" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sale;
