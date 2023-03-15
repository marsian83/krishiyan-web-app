import React from "react";
import Header from "../../Components/layouts/Header";
import Linegraph from "../../Components/themes/LineChart";
import Piegraph from "../../Components/themes/PieChart";

const Report = () => {
  return (
    <div>
      <Header title="Pos" subtitle="Report" />
      <section className="grid grid-rows-[10%_28%_60%] h-[88vh]">
        <div className="w-full flex items-center gap-x-[2%] pl-[24%]">
          <button className="text-[#F3FFF1] bg-[#526D4E] rounded-md px-[2%] h-[5vh] ">
            Day
          </button>
          <button className="text-[#F3FFF1] bg-[#05AB2A] rounded-md px-[2%] h-[5vh] ">
            Week
          </button>
          <button className="text-[#F3FFF1] bg-[rgb(5,171,42)] rounded-md px-[2%] h-[5vh] ">
            Month
          </button>
          <button className="text-[#F3FFF1] bg-[#05AB2A] rounded-md px-[2%] h-[5vh] ">
            Year
          </button>
        </div>
        <div className="w-full flex flex-wrap gap-x-[5%] px-[4%]">
          <div className="flex flex-col flex-1 gap-y-1">
            <h2 className="flex-[1.2] font-bold text-sm bg-[#C6EDC0] flex justify-center items-center">
              Total Sales
            </h2>
            <div className="flex-[5] bg-[#C6EDC080] text-[#13490A] flex justify-center items-center font-bold">
              ₹1,65,900.00
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-y-1">
            <h2 className="flex justify-center items-center flex-[1.2] font-bold text-sm bg-[#C6EDC0]">
              Total Transaction
            </h2>
            <div className="flex justify-center items-center flex-[5] bg-[#C6EDC080] text-[#13490A] font-bold">
              96
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-y-1">
            <h2 className="flex justify-center items-center flex-[1.2] font-bold text-sm bg-[#C6EDC0]">
              Tax
            </h2>
            <div className="flex flex-col justify-center items-center bg-[#C6EDC080] flex-[5]">
              <p>Tax Percentage</p>
              <p className="text-[#13490A] font-bold">5%</p>
              <p>Actual</p>
              <p className="text-[#13490A] font-bold">₹8295.00</p>
            </div>
          </div>
          {/* <div className='flex flex-col flex-1 gap-y-1'>
            <h2 className='flex justify-center items-center flex-[1.2] font-bold text-sm bg-[#C6EDC0]'>Profit</h2>
            <div className='flex flex-col justify-center items-center bg-[#C6EDC080] flex-[5]'>
              <p>Profit Percentage</p>
              <p className='text-[#13490A] font-bold'>8.5%</p>
              <p>Actual</p>
              <p className='text-[#13490A] font-bold'>₹13,396.00</p>
            </div>
          </div> */}
        </div>
        <div className="w-full flex justify-around my-[2%]">
          <div className="grid gap-y-5">
            <p>Daily Sales</p>
            <Linegraph />
          </div>
          <div className="grid gap-y-5">
            <p>Product Wise</p>
            <Piegraph />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Report;
