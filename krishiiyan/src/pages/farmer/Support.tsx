import React, { useState } from 'react'
import Header from '../../Components/layouts/Header'
import Input from '../../Components/themes/Input'

const Support = () => {
  const [openTab, setOpenTab] = useState('Soil Testing')
  let col: any = 12;
  let row: any = 5
  return (
    <div>
      <Header title="Farmer" subtitle="Support" />
      <section>
        <div className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
          <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
            Farmer Mobile Number
          </label>
          <input
            // onChange={onChangeInput}
            type="text"
            className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pr-3 pl-3"
          />
          <button
            type="submit"
            // onClick={onClickEnter}
            className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
          >
            ENTER
          </button>
        </div>
        <div className='my-10 flex justify-between w-[55%] ml-[6%]'>
          <button type='submit' className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[10vw] py-1 px-3 rounded text-sm font-thin ${openTab === 'Crop Health' ? 'bg-[#05AB2A]' : 'bg-[#526D4E]'}`} onClick={() => { setOpenTab('Crop Health') }}>Crop Health</button>
          <button type='submit' className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[10vw] py-1 px-3 rounded text-sm font-thin ${openTab === 'Soil Testing' ? 'bg-[#05AB2A]' : 'bg-[#526D4E]'}`} onClick={() => { setOpenTab('Soil Testing') }}>Soil Testing</button>
          <button type='submit' className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[10vw] py-1 px-3 rounded text-sm font-thin ${openTab === 'Credit' ? 'bg-[#05AB2A]' : 'bg-[#526D4E]'}`} onClick={() => { setOpenTab('Credit') }}>Credit</button>
          <button type='submit' className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[10vw] py-1 px-3 rounded text-sm font-thin ${openTab === 'Query' ? 'bg-[#05AB2A]' : 'bg-[#526D4E]'}`} onClick={() => { setOpenTab('Query') }}>Query</button>
        </div>
        <div className={openTab === 'Crop Health' ? 'block' : 'hidden'}>Crop Health Content</div>
        <form className={openTab === 'Soil Testing' ? 'block' : 'hidden'}>
          <div className="grid grid-cols-[25%_28%] text-center items-center">
            <label className="text-[#13490A] font-extrabold text-sm mx-5">Date of Sample Taken</label>
            <input type="text" className="bg-[#F3FFF1]  h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md" />
          </div>
          <div className="grid grid-cols-[53%_47%] mt-4">
            <div className='grid grid-cols-[47%_53%] text-center my-6'>
              <label className='text-[#13490A]  font-roboto font-extrabold text-sm mx-5'>List of Parameters</label>
              <textarea cols={col} rows={row} className='bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md' />
            </div>
            <div className='flex flex-col items-center mt-6'>
              <div>
                <label className='text-[#13490A] flex-[1] text-center font-roboto font-extrabold text-sm mx-5'>Laboratory</label>
                <input type='text' className='bg-[#F3FFF1] flex-[2] h-8 w-35 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md' />
              </div>
              <div>
                <button type='submit' className='bg-[#526D4E] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] ml-28 mt-10 w-[12vw] 
                 h-16 rounded text-sm font-thin'>Download Report
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[25%_28%] text-center items-center">
            <label className="text-[#13490A] font-extrabold text-sm mx-5">Amount Paid</label>
            <input type="text" className="bg-[#F3FFF1]  h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md" />
          </div>
          <div className="grid grid-cols-[25%_28%] text-center items-center mt-10">
            <label className="text-[#13490A] font-extrabold text-sm mx-5">Expected Date of Report</label>
            <input type="text" className="bg-[#F3FFF1]  h-8 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md" />
          </div>
        </form>
        <div className={openTab === 'Credit' ? 'block' : 'hidden'}>Credit Content</div>
        <div className={openTab === 'Query' ? 'block' : 'hidden'}>Query Content</div>
      </section>
    </div>
  )
}

export default Support