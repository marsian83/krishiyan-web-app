import React from 'react'

const ProductAdd3 = () => {
  return (
    <section className='py-[2%]'>
      <div className='flex w-full'>
        <button className='bg-[#05AB2A] text-[#F3FFF1] mr-[8%] font-light h-[5vh] w-[8%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'>Back</button>
        <button className='bg-[#05AB2A] text-[#F3FFF1] mx-[6%] font-light h-[5vh] w-[8%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'>Update</button>
        <button className='bg-[#13490A] text-[#F3FFF1] font-light h-[5vh] w-[8%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'>Return</button>
      </div>
      <div className='grid h-fit mt-[2%]'>
        <div className='grid grid-cols-[35%_30%] my-[1%]'>
          <label className='text-center text-[#13490A] font-bold text-base'>Product Id</label>
          <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
        </div>
        <div className='grid grid-cols-[35%_30%] my-[1%]'>
          <label className='text-center text-[#13490A] font-bold text-base'>Product Name</label>
          <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
        </div>
        <div className='grid grid-cols-[35%_30%] my-[1%]'>
          <label className='text-center text-[#13490A] font-bold text-base'>Available quantity</label>
          <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
        </div>
        <div className='grid grid-cols-[35%_30%] my-[1%]'>
          <label className='text-center text-[#13490A] font-bold text-base'>Return Quantity</label>
          <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
        </div>
        <div className='grid grid-cols-[35%_30%] my-[1%]'>
          <label className='text-center text-[#13490A] font-bold text-base'>Reason</label>
          <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
        </div>
        <div className='grid grid-cols-[35%_30%] my-[1%]'>
          <label className='text-center text-[#13490A] font-bold text-base'>Distributor</label>
          <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
        </div>
        <div className='grid grid-cols-[35%_30%] my-[1%]'>
          <label className='text-center text-[#13490A] font-bold text-base'>Refund Amount</label>
          <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
        </div>
        <div className='grid grid-cols-[35%_30%_8%] items-center'>
          <label className='text-center text-[#13490A] font-bold text-base'>Mode</label>
          <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
          <img src='Images/Dropdown.png' alt='dropdown' className='mx-auto' />
        </div>
      </div>
      <div className='flex justify-center my-[1%]'>
        <button className='bg-[#05AB2A] text-[#F3FFF1] font-light h-[5vh] w-[8%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'>Back</button>
      </div>
    </section>
  )
}

export default ProductAdd3