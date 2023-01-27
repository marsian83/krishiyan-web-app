import React from 'react'
import Header from '../../Components/layouts/Header'
import Bargraph from '../../Components/themes/BarChart'

const Accounting = () => {
  return (
    <>
      <Header title='Pos' subtitle='Accounting' />
      <section className='grid grid-rows-[30%_70%] h-[88vh] p-3 gap-y-[2%]'>
        <div className='w-full flex flex-1 flex-wrap gap-x-[5%] px-[4%]'>
          <div className='flex flex-col flex-1 gap-y-1'>
            <h2 className='flex-[1.2] font-bold text-sm bg-[#C6EDC0] flex justify-center items-center'>Total Sales</h2>
            <div className='flex-[5] bg-[#C6EDC080] text-[#13490A] flex justify-center items-center font-bold'>₹1,65,900.00</div>
          </div>
          <div className='flex flex-col flex-1 gap-y-1'>
            <h2 className='flex justify-center items-center flex-[1.2] font-bold text-sm bg-[#C6EDC0]'>Total Transaction</h2>
            <div className='flex justify-center items-center flex-[5] bg-[#C6EDC080] text-[#13490A] font-bold'>96</div>
          </div>
          <div className='flex flex-col flex-1 gap-y-1'>
            <h2 className='flex justify-center items-center flex-[1.2] font-bold text-sm bg-[#C6EDC0]'>Tax</h2>
            <div className='flex flex-col justify-center items-center bg-[#C6EDC080] flex-[5]'>
              <p>Tax Percentage</p>
              <p className='text-[#13490A] font-bold'>5%</p>
              <p>Actual</p>
              <p className='text-[#13490A] font-bold'>₹8295.00</p>
            </div>
          </div>
          <div className='flex flex-col flex-1 gap-y-1'>
            <h2 className='flex justify-center items-center flex-[1.2] font-bold text-sm bg-[#C6EDC0]'>Profit</h2>
            <div className='flex flex-col justify-center items-center bg-[#C6EDC080] flex-[5]'>
              <p>Profit Percentage</p>
              <p className='text-[#13490A] font-bold'>8.5%</p>
              <p>Actual</p>
              <p className='text-[#13490A] font-bold'>₹13,396.00</p>
            </div>
          </div>
        </div>
        <div className='w-full flex px-[4%]'>
          <div className='flex-[3]'>
            <Bargraph />
          </div>
          <div className='flex flex-col justify-center items-end gap-y-[5%] flex-[4]'>
            <button className='bg-[#AEF2AD] text-[#127E0F] font-bold text-sm shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] h-[10vh] w-[15vw]'>
              Pay Tax</button>
            <button className='bg-[#AEF2AD] text-[#127E0F] font-bold text-sm shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] h-[10vh] w-[15vw]'>Sales Statement</button>
            <button className='bg-[#AEF2AD] text-[#127E0F] font-bold text-sm shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] h-[10vh] w-[15vw]'>Balance Sheet</button>
            <button className='bg-[#AEF2AD] text-[#127E0F] font-bold text-sm shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] h-[10vh] w-[15vw]'>Financial Statement</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Accounting