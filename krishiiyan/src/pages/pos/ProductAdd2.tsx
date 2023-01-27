import React from 'react'

const ProductAdd2 = () => {
    return (
        <section className=' px-[1%] py-[2%] h-[70%]'>
        <div className='flex justify-start'>
          <button className='text-[#F3FFF1] bg-[#05AB2A] rounded-md w-[10%] h-[5vh] py-[0.4%] '>Back</button>
          <button className='text-[#F3FFF1] bg-[#526D4E] rounded-md w-[10%] h-[5vh] py-[0.4%] mx-[4%]'>Update</button>
          <button className='text-[#F3FFF1] bg-[#05AB2A] rounded-md w-[10%] h-[5vh] py-[0.4%] '>Return</button>
        </div>
        <div className='grid grid-cols-[50%_50%] mt-[2%] h-[100%]'>
          <div className='grid  grid-rows-[10%_10%_10%_10%_10%_10%_10%_10%] gap-y-[2%] h-full content-end'>
            <div className='grid grid-cols-[40%_60%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Product Id</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[40%_60%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Product Name</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[40%_60%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Available quantity</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[40%_60%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>New Supply</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[40%_60%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Distributor</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[40%_60%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Unit Procurement Price</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[40%_60%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Unit Sale Price</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[40%_60%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Margin</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
          </div>
          <div className='grid grid-rows-[10%_10%_10%] gap-y-[2%] h-full content-end'>
            <div className='grid grid-cols-[38%_50%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Total Procurement</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[38%_50%]'>
              <label className='text-center text-[#13490A] font-bold text-base'>Total Sale Price</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
            </div>
            <div className='grid grid-cols-[38%_50%_10%] items-center'>
              <label className='text-center text-[#13490A] font-bold text-base'>Type</label>
              <input type='text' className='bg-[#F3FFF1] text-[#13490A] h-[5vh] font-bold shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[0.5%] text-center' />
              <img src='Images/Dropdown.png' alt='dropdown' className='mx-auto'/>
            </div>
          </div>
        </div>
        <button className='text-[#F3FFF1] bg-[#05AB2A] rounded-md my-[1%] w-[10%] h-[5vh] py-[0.4%]'>Save</button>
      </section>
    )
}

export default ProductAdd2