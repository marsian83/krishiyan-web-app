import React from 'react'

const Dashboard6 = () => {
  return (
    <div className="flex">
        <form className="mt-7 ml-12 w-[70%] flex flex-row items-center">
          <label className="text-[#13490A] font-roboto font-extrabold text-sm mx-5">Mobile Number/Farmer Id</label>
          <input type="text" className="bg-[#F3FFF1] h-8 w-72 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md" />
          <button type="submit"
            className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-3 rounded mx-5 text-sm font-thin">
            ENTER
          </button>
          <img src="Images/plus.png" className="w-6 rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        </form>
      </div>
  )
}

export default Dashboard6