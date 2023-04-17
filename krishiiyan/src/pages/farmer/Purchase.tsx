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
  const [farmerID, setFarmerID] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();

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
    await getFarmerById();
  };
  useEffect(() => {
    if (!localStorage.Number) return;
    setFarmerID(localStorage.Number);
    onClickEnter();
  }, []);

  return (
    <div>
      <Header title="Farmer Relationship Management" subtitle="Purchase" />
      <div className="grid grid-cols-[70%_30%] items-center box-border w-full">
        <div className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full"></div>
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
      </div>
      <section className="mt-10">
        {/* {farmerCredits ? ( */}
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
              <td className="border-r border-black">01</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">02</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">03</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">04</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">05</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
          </tbody>
        </table>
        {/* ) : (
                <></>
              )} */}
      </section>
    </div>
  );
};

export default Purchase;
