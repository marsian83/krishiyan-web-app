import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import { getCrops, getvariteyByCropId } from "../../Services/Api";
import moment from "moment";
import Weather from "./Weather";

const Purchase = () => {
  const [loading, setLoading] = useState(false);
  const [receivedData, setReceivedData] = useState(false);
  const [farmerID, setFarmerID] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [fetchData, setFetchData] = useState(false);

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

  const onClickEnter = async () => {
    localStorage.setItem("Number", farmerID);
    await getFarmerById();
  };
  useEffect(() => {
    if (fetchData) {
      onClickEnter();
    }
  }, [fetchData]);

  useEffect(() => {
    if (localStorage.Number) {
      setFarmerID((prev: any) => localStorage.Number);
      setFetchData(true);
    }
  }, []);

  return (
    <div>
      <Header title="Farmer Relationship Management" subtitle="Purchase" />
      <section>
        <div className="grid grid-cols-[70%_30%] items-center box-border w-full">
          <div className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
              Farmer Mobile Number
            </label>
            <input
              onChange={onChangeInput}
              type="text"
              className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pr-3 pl-3"
            />
            <button
              type="submit"
              onClick={onClickEnter}
              className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
            >
              ENTER
            </button>
          </div>
          {farmerDetail ? (
            <div className="mt-6 leading-4 ml-16">
              <p className="text-[#000000]  text-start">
                Name:{" "}
                <span className="text-[#FB0404] font-bold">
                  {farmerDetail?.name}
                </span>
              </p>
              <p className="text-[#000000]   text-start">
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

        <section className="mt-10">
          {farmerDetail ? (
            <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto">
              <thead className="border-b border-black">
                <tr className="text-center">
                  <th className="border-r border-black py-[1.2%]">S.No</th>
                  <th className="border-r border-black py-[1.2%]">Date</th>
                  <th className="border-r border-black py-[1.2%]">ID</th>
                  <th className="border-r border-black py-[1.2%]">Product</th>
                  <th className="border-r border-black py-[1.2%]">Amount</th>
                  <th className="border-r border-black py-[1.2%]">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-10 border-b border-black">
                  <td className="border-r border-black font-thin">01</td>
                  <td className="border-r border-black font-thin">22/042022</td>
                  <td className="border-r border-black font-thin">FERT012</td>
                  <td className="border-r border-black font-thin">
                    Fertilizer
                  </td>
                  <td className="border-r border-black font-thin">150</td>
                  <td className="border-r border-black font-thin">Paid</td>
                </tr>
                <tr className="h-10 border-b border-black">
                  <td className="border-r border-black font-thin">02</td>
                  <td className="border-r border-black font-thin">
                    22/04/2022
                  </td>
                  <td className="border-r border-black font-thin">FERT012</td>
                  <td className="border-r border-black font-thin">
                    Fertilizer
                  </td>
                  <td className="border-r border-black font-thin">150</td>
                  <td className="border-r border-black font-thin">Paid</td>
                </tr>
                <tr className="h-10 border-b border-black">
                  <td className="border-r border-black font-thin">03</td>
                  <td className="border-r border-black font-thin">
                    22/04/2022
                  </td>
                  <td className="border-r border-black font-thin">FERT012</td>
                  <td className="border-r border-black font-thin">
                    Fertilizer
                  </td>
                  <td className="border-r border-black font-thin">150</td>
                  <td className="border-r border-black font-thin">Paid</td>
                </tr>
                <tr className="h-10 border-b border-black">
                  <td className="border-r border-black font-thin">04</td>
                  <td className="border-r border-black font-thin">
                    22/04/2022
                  </td>
                  <td className="border-r border-black font-thin">FERT012</td>
                  <td className="border-r border-black font-thin">
                    Fertilizer
                  </td>
                  <td className="border-r border-black font-thin">150</td>
                  <td className="border-r border-black font-thin">Paid</td>
                </tr>
                <tr className="h-10 border-b border-black">
                  <td className="border-r border-black font-thin">05</td>
                  <td className="border-r border-black font-thin">
                    22/04/2022
                  </td>
                  <td className="border-r border-black font-thin">FERT012</td>
                  <td className="border-r border-black font-thin">
                    Fertilizer
                  </td>
                  <td className="border-r border-black font-thin">150</td>
                  <td className="border-r border-black font-thin">Paid</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <></>
          )}
        </section>
      </section>
    </div>
  );
};

export default Purchase;
