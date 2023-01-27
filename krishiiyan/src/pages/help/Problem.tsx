import React from 'react'
import Header from '../../Components/layouts/Header'

const Problem = () => {
    return (
        <>
            <Header title="Help" subtitle="Problem" />
            <section className='p-[1%] py-[2%]'>
                <div className='flex justify-end gap-[5%] w-[45%] text-center '>
                    <button className='bg-[#526D4E] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-extralight rounded-md h-8 w-[5vw]'>Status</button>
                    <button className='bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-extralight rounded-md h-8 w-[5vw]'>New</button>
                </div>
                <div className='w-full'>
                    <div className='grid grid-cols-[28%_30%_5%] content-center my-[2%]'>
                        <label className='text-[#13490A] font-extrabold text-center'>Ticket Number</label>
                        <input type='text' className='bg-[#F3FFF1] text-[#13490A] font-extrabold shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8' />
                        <button className='bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-extralight rounded-md mx-[2vw] h-8 w-[5vw]'>ENTER</button>
                    </div>
                    <div className='grid grid-cols-[28%_30%] my-[2%]'>
                        <label className='text-[#13490A] font-extrabold text-center'>Registered Date</label>
                        <input type='text' className='bg-[#F3FFF1] text-[#13490A] font-extrabold shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8' />
                    </div>
                    <div className='grid grid-cols-[28%_30%] my-[2%]'>
                        <label className='text-[#13490A] font-extrabold text-center'>Category</label>
                        <input type='text' className='bg-[#F3FFF1] text-[#13490A] font-extrabold shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8' />
                    </div>
                    <div className='grid grid-cols-[28%_30%] my-[2%]'>
                        <label className='text-[#13490A] font-extrabold text-center'>Reason</label>
                        <input type='text' className='bg-[#F3FFF1] text-[#13490A] font-extrabold shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8' />
                    </div>
                    <div className='grid grid-cols-[28%_30%] my-[2%]'>
                        <label className='text-[#13490A] font-extrabold text-center'>Status</label>
                        <input type='text' className='bg-[#F3FFF1] text-[#13490A] font-extrabold shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8' />
                    </div>
                    <div className='flex justify-center my-[5%]'>
                        <button className='bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-extralight rounded-md 
                  mx-[2vw] px-[1%] h-8 w-[fit-content]'>Download Report</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Problem