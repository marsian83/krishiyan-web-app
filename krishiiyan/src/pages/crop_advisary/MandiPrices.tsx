import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";

import * as Api from "../../Services/Api";
import { toast } from "react-toastify";

const MandiPrices = () => {
  const [prices, setPrices] = useState<any>();

  const getMandiprice = async () => {
    const [err, res] = await Api.getMandiPrices();

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      setPrices(res?.data);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getMandiprice();
    };
    init();
  }, []);

  // console.log(prices?.records[0], "it is mandi prices");
  return (
    <div>
      <Header title="Crop Advisary" subtitle="Market" />
      <section className="p-5 grid grid-cols-[30%_30%_30%_10%]">
        <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
          <label className="text-[#13490A] text-center">Type</label>
          <input
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
          />
          <img src="Images/Dropdown.png" className="px-4" />
        </div>
        <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
          <label className="text-[#13490A] text-center">Crop</label>
          <input
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
          />
          <img src="Images/Dropdown.png" className="px-4" />
        </div>
        <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
          <label className="text-[#13490A] text-center">Variety</label>
          <input
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
          />
          <img src="Images/Dropdown.png" className="px-4" />
        </div>
        <button className="bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8">
          Go
        </button>
      </section>
    </div>
  );
};

export default MandiPrices;
