import React from "react";

const InputCal = () => {
  return (
    <section className="p-5">
      <div className="font-extrabold grid grid-cols-[15%_30%_5%_15%] gap-[2%] mx-[20%] mb-[3%] items-center">
        <label className="text-center">Area</label>
        <input
          type="text"
          className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
        />
        {/* <img src="Images/Dropdown.png" alt="Dropdown" className="" /> */}
        <button className="bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8">
          Calculate
        </button>
      </div>
    </section>
  );
};

export default InputCal;
