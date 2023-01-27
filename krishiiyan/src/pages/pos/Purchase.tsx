import React from 'react'
import Header from '../../Components/layouts/Header'

const Purchase = () => {
  return (
    <>
      <Header title="Pos" subtitle="Purchase" />
      <section className='box-border '>
        <div className='my-[5%]'>
          <div className='text-[#13490A] font-bold text-base grid grid-cols-[25%_30%] my-[2%]'>
            <label className='text-center'>Product Id</label>
            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center' />
          </div>
          <div className='text-[#13490A] font-bold text-base grid grid-cols-[25%_30%] my-[2%]'>
            <label className='text-center'>Product Name</label>
            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center' />
          </div>
          <div className='text-[#13490A] font-bold text-base grid grid-cols-[25%_30%] my-[2%]'>
            <label className='text-center'>Available quantity</label>
            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center' />
          </div>
          <div className='text-[#13490A] font-bold text-base grid grid-cols-[25%_30%] my-[2%]'>
            <label className='text-center'>New Supply</label>
            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center' />
          </div>
          <div className='text-[#13490A] font-bold text-base grid grid-cols-[25%_30%] my-[2%]'>
            <label className='text-center'>Distributor</label>
            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center' />
          </div>
          <div className='text-[#13490A] font-bold text-base flex-wrap grid grid-cols-[25%_30%_20%_25%] lg:grid-cols-[25%_30%_22%_22%] xl:grid-cols-[25%_30%_20%_24%] grid-rows-[1.8rem] my-[2%] items-center'>
            <label className='text-center'>Unit Procurement Price</label>
            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center' />
            <label className='text-center'>Total Procurement Price</label>
            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center' />
          </div>
          <div className='flex justify-end w-[55%] lg:gap-x-6 xl:gap-x-11 my-[6%] text-sm font-thin'>
            <button className='bg-[#05AB2A] text-[#F3FFF1] flex justify-center items-center font-thin h-[6vh] xl:h-[5vh] w-[5rem] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'>Pay</button>
            <button className='bg-[#05AB2A] text-[#F3FFF1] flex justify-center items-center font-thin h-fit xl:h-[5vh] w-[5rem] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-0.5'>
              <span className='flex justify-center items-center leading-none'>Purchase slip</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Purchase
{/* <div className='grid grid-cols-[8%_10%] justify-center gap-x-[4%]  '>
    <button className='bg-[#05AB2A] text-[#F3FFF1] font-light h-[5vh] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'>Pay</button>
    <button className='bg-[#05AB2A] text-[#F3FFF1] font-light h-[5vh] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'>Purchase Slip</button>
  </div> */}