import React from "react";

const Input = () => {
  return (
    <div className='grid grid-cols-[70%_30%] items-center box-border w-full'>
      <form className='grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full'>
        <label className='text-[#13490A] font-roboto font-extrabold text-sm flex justify-center'>Mobile Number/Farmer Id</label>
        <input type='text' className='bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md' />
        <button type='submit' className='bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin'>ENTER</button>
        <img src='Images/plus.png' className='w-6 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]' />
      </form>
      <div className='mt-6 leading-4'>
        <p className='text-[#000000]'>Name: <span className='text-[#FB0404]'>XXXXXX</span></p>
        <p className='text-[#000000]'>Area : <span className='text-[#FB0404]'>Pune</span></p>
      </div>
    </div>
  );
};

export default Input;
