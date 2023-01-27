import React from 'react'
import Input from '../../Components/themes/Input'

const CreditPayContent = () => {
    let row: any = '5'
    let col: any = '20'
    return (
        <section className='box-border'>
            <Input/>
            {/* <div className='ml-[16rem] my-3'>
                <button type='submit' className='bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-16 py-1 px-3 rounded mx-5 text-sm font-thin'>Status</button>
                <button type='submit' className='bg-[#526D4E] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-16 py-1 px-3 rounded mx-5 text-sm font-thin'>New</button>
                <button type='submit' className='bg-[#526D4E] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-16 py-1 px-3 rounded mx-5 text-sm font-thin'>Pay</button>
            </div> */}
            <div className='flex flex-row'>
                <form className='w-[60%] pr-24 pl-10'>
                    <div className='flex text-center items-center my-4'>
                        <label className='text-[#13490A] flex-[2] font-roboto font-extrabold text-sm mx-5'>Credit Number</label>
                        <input type='text' className='bg-[#F3FFF1] flex-[3] h-8 w-72 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md' />
                    </div>
                    <div className='flex text-center items-center my-4'>
                        <label className='text-[#13490A] flex-[2] font-roboto font-extrabold text-sm mx-5'>Detail</label>
                        <textarea cols={col} rows={row} className='bg-[#F3FFF1] flex-[3] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md' />
                    </div>
                    <div className='flex text-center items-center my-4'>
                        <label className='text-[#13490A] flex-[2] font-roboto font-extrabold text-sm mx-5'>Amount Payable</label>
                        <input type='text' className='bg-[#F3FFF1] flex-[3] h-8 w-72 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md' />
                    </div>
                    <div className='flex text-center relative items-center my-4'>
                        <label className='text-[#13490A] flex-[2] font-roboto font-extrabold text-sm mx-5'>Payment Method</label>
                        <input type='text' className='bg-[#F3FFF1] flex-[3] h-8 w-72 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md' />
                        <img src='Images/Dropdown.png' className='absolute left-[32rem] ml-2 text-center rounded-full' />
                    </div>
                    <button className='bg-[#05AB2A] text-[#F3FFF1] ml-[22rem] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-16 py-1 px-3 rounded text-sm font-thin'>Pay</button>
                </form>
            </div>
        </section>
    )
}

export default CreditPayContent