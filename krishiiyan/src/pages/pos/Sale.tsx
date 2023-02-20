import React from 'react'
import Header from '../../Components/layouts/Header'
const Sale = () => {
  return (
    <div>
      <Header title="Pos" subtitle="Sale" />
      <section className='flex border border-[#13490A] border-collapse font-roboto h-[88vh]'>
            <div className="flex flex-col flex-[4]">
                <div className="flex-[2] flex items-center gap-x-[3%] border border-black text-sm text-[#13490A] font-bold  ">
                    
                </div>
                <div className='flex-[10] flex'>
                    <div className='flex flex-col flex-1'>
                        <div className='flex justify-around border border-[#526D4E1A] border-collapse h-10'>
                            <button className='border border-collapse border-black flex-1 text-sm font-bold'>Top</button>
                            <button className='border border-collapse border-black flex-1 text-sm font-bold'>Fertilizer</button>
                            <button className='border border-collapse border-black flex-1 text-sm font-bold'>Pesticide</button>
                            <button className='border border-collapse border-black flex-1 text-sm font-bold'>Fungicide</button>
                            <button className='border border-collapse border-black flex-1 text-sm font-bold'>Herbicide</button>
                        </div>
                        <div className='shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
                            <div className='flex border border-[#526D4E] px-[1%] rounded-lg w-[70%] h-6 mx-1 my-1 items-center'>
                                <input type='text' className='text-[#13490A] !outline-none bg-transparent w-full font-normal text-center' />
                                <img src='Images/Search.png' alt='searchbar' className='h-4 w-4' />
                            </div>
                        </div>
                        <table className='flex flex-col gap-y-2 my-2 text-sm font-bold'>
                           
                        </table>
                    </div>
                    <div className='border border-black flex-[1.2]'>
                        <div className='h-10 flex items-center border border-black gap-x-5 pl-1'>
                            <label className='font-bold text-sm text-[#033E02]'>PRODUCT ID</label>
                            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center h-7 border border-[#033E02]' />
                            <button className='bg-[#05AB2A] w-10 h-6 flex items-center justify-center rounded-md'><img src='Images/plus.png' alt='plus' className='h-4 w-4' /></button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="flex-[4] border border-[#13490A] border-collapse font-bold text-sm text-[#13490A] flex flex-col justify-around">
                    <div className="flex justify-center place-items-start gap-x-[6%]">
                        <p>Recommentations</p>
                    </div>
                  
                </div>
            </div>
            <div className="right border border-[#13490A] text-sm text-[#13490A] font-bold flex-[1.2]">
                <div className="item flex justify-between py-4 border border-[#13490A] px-1">
                    <p>Date</p>
                    <p className='text-[#526D4E] font-normal'>09/09/2022 10:10 PM</p>
                </div>
                <div className="item flex justify-between py-4 border border-[#13490A] px-1">
                    <p>Subtotal</p>
                    <p className='text-[#526D4E] font-normal'>00.00</p>
                </div>
                <div className="discount flex  justify-between py-4  border border-[#13490A] px-1">
                    <p>Discount <span className='ml-4'>10%</span></p>
                    <p className='text-[#526D4E] font-normal'>$00.00</p>
                </div>
                <div className="discount flex justify-between py-4 border border-[#13490A] px-1">
                    <p className=''>Tax <span className='ml-8'>5%</span></p>
                    <p className='text-[#526D4E] font-normal'>$00.00</p>
                </div>
                <div className="discount flex justify-between py-4  border border-[#13490A] px-1">
                    <p>Shipping</p>
                    <p className='text-[#526D4E] font-normal'>$00.00</p>
                </div>
                <div className="total flex justify-between py-4 border border-[#13490A] px-1">
                    <p>Total</p>
                    <p className='text-[#526D4E] font-normal'>$00.00</p>
                </div>
               
            </div>
        </section>
    </div>

  )
}

export default Sale