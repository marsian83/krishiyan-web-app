import React from 'react'
import Header from '../../Components/layouts/Header'
import Input from '../../Components/themes/Input'

const Purchase = () => {
  return (
  <>
  <Header title="Farmer" subtitle="Purchase" />
    <section>
    <div className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
            <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
            Farmer Mobile Number
            </label>
            <input
            //   onChange={onChangeInput}
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
            <table className="bg-[#6E776D] border-collapse border table-auto mx-14 my-16 w-[70vw] h-[50%] text-sm font-semibold">
                <thead>
                    <tr className='text-[#FFFFFF] h-7'>
                        <th>S.No</th>
                        <th>Date</th>   
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Qty</th>
                        <th>Price Unit</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-[#DEDEDE] h-7'>
                        <td className='border-r-4 border-[#6E776D]'>01</td>
                        <td className='border-r-4 border-[#6E776D]'>22/04/22</td>
                        <td className='border-r-4 border-[#6E776D]'>FERT012</td>
                        <td className='border-r-4 border-[#6E776D]'>Urea</td>
                        <td className='border-r-4 border-[#6E776D]'>Fertilizer</td>
                        <td className='border-r-4 border-[#6E776D]'>02</td>
                        <td className='border-r-4 border-[#6E776D]'>150</td>
                        <td className='border-r-4 border-[#6E776D]'>300</td>
                        <td className='border-r-4 border-[#6E776D] text-[#05AB2A]'>Paid</td>
                        <td>Cultivation Id - Fertilizer for maize</td>
                    </tr>
                    <tr className='h-7'>
                        <td>02</td>
                        <td>22/04/22</td>
                        <td>FERT012</td>
                        <td>Urea</td>
                        <td>Fertilizer</td>
                        <td>02</td>
                        <td>150</td>
                        <td>300</td>
                        <td className='text-[#05AB2A]'>Paid</td>
                        <td>Cultivation Id - Fertilizer for maize</td>
                    </tr>
                    <tr className='bg-[#DEDEDE] h-7'>
                        <td className='border-r-4 border-[#6E776D]'>03</td>
                        <td className='border-r-4 border-[#6E776D]'>22/04/22</td>
                        <td className='border-r-4 border-[#6E776D]'>FERT012</td>
                        <td className='border-r-4 border-[#6E776D]'>Urea</td>
                        <td className='border-r-4 border-[#6E776D]'>Fertilizer</td>
                        <td className='border-r-4 border-[#6E776D]'>02</td>
                        <td className='border-r-4 border-[#6E776D]'>150</td>
                        <td className='border-r-4 border-[#6E776D]'>300</td>
                        <td className='border-r-4 border-[#6E776D] text-[#05AB2A]'>Paid</td>
                        <td>Cultivation Id - Fertilizer for maize</td>
                    </tr>
                    <tr className='bg-[#DEDEDE] h-7'>
                        <td className='border-r-4 border-[#6E776D]'>04</td>
                        <td className='border-r-4 border-[#6E776D]'>22/04/22</td>
                        <td className='border-r-4 border-[#6E776D]'>FERT012</td>
                        <td className='border-r-4 border-[#6E776D]'>Urea</td>
                        <td className='border-r-4 border-[#6E776D]'>Fertilizer</td>
                        <td className='border-r-4 border-[#6E776D]'>02</td>
                        <td className='border-r-4 border-[#6E776D]'>150</td>
                        <td className='border-r-4 border-[#6E776D]'>300</td>
                        <td className='border-r-4 border-[#6E776D] text-[#05AB2A]'>Paid</td>
                        <td>Cultivation Id - Fertilizer for maize</td>
                    </tr>
                    <tr className='h-7'>
                        <td>05</td>
                        <td>22/04/22</td>
                        <td>FERT012</td>
                        <td>Urea</td>
                        <td>Fertilizer</td>
                        <td>02</td>
                        <td>150</td>
                        <td>300</td>
                        <td className='text-[#E3BB2D]'>Paid</td>
                        <td>Cultivation Id - Fertilizer for maize</td>
                    </tr>
                    <tr className='bg-[#DEDEDE] h-7'>
                        <td className='border-r-4 border-[#6E776D]'>06</td>
                        <td className='border-r-4 border-[#6E776D]'>22/04/22</td>
                        <td className='border-r-4 border-[#6E776D]'>FERT012</td>
                        <td className='border-r-4 border-[#6E776D]'>Urea</td>
                        <td className='border-r-4 border-[#6E776D]'>Fertilizer</td>
                        <td className='border-r-4 border-[#6E776D]'>02</td>
                        <td className='border-r-4 border-[#6E776D]'>150</td>
                        <td className='border-r-4 border-[#6E776D]'>300</td>
                        <td className='border-r-4 border-[#6E776D] text-[#FB0404]'>Paid</td>
                        <td>Cultivation Id - Fertilizer for maize</td>
                    </tr>
                </tbody>
            </table>
            <div className='mx-10'>
                <p className='text-[#13490A] font-bold text-sm ml-4 mb-10'>Recommended Products</p>
                <div className='flex'>
                    <div className='flex'>
                        <img src='Images/salts.png' alt='salts' className='w-28 h-24 flex-1' />
                        <div className='flex flex-col items-center flex-1'>
                            <p className='text-[#000000] font-semibold text-xs mt-2'>EPSOM SALTS</p>
                            <img src='Images/plus.png' alt='vector' className='w-6 mt-5' />
                        </div>
                    </div>
                    <div className='flex mx-5'>
                        <img src='Images/Q4.png' alt='Q4' className='w-28 h-24 flex-1' />
                        <div className='flex flex-col items-center flex-1'>
                            <p className='text-[#000000] font-semibold text-xs mt-2'>Q4</p>
                            <img src='Images/plus.png' alt='vector' className='w-6 mt-5' />
                        </div>
                    </div>
                    <div className='flex'>
                        <img src='Images/Bio.png' alt='Couscous' className='w-28 h-24 flex-1' />
                        <div className='flex flex-col items-center flex-1'>
                            <p className='text-[#000000] font-semibold text-xs mt-2 ml-4'>COUSCOUS <br /> MOVEN</p>
                            <img src='Images/plus.png' alt='vector' className='w-6 mt-5' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
  )
}

export default Purchase