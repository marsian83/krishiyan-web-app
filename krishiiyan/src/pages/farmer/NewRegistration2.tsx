import React from 'react'
import Header from '../../Components/layouts/Header'

const Registration2Content = () => {
    let row: any = '6'
    let col: any = '12'
    return (
        <>
            <Header title="Farmer" subtitle="New Registration" />
            <section>
                <div className='grid grid-cols-[25%_34%] items-center mt-6 mb-5'>
                    <label className='text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5'>Name</label>
                    <input type='text' className='bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'></input>
                </div>

                <div className=' grid grid-cols-[25%_34%] items-center'>
                    <label className='text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5'>Mobile Number</label>
                    <input type='text' className='bg-[#F3FFF1] h-8 w-80 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md'></input>
                </div>

                <img src='Images/Line18.png' className='my-5' alt='line' />
                <div className='grid grid-cols-[25%_27%]'>
                    <label className='text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5'>Address</label>
                    <textarea cols={col} rows={row} className='bg-[#F3FFF1] w-80 border border-black' ></textarea>
                </div>
                <img src='Images/Line18.png' className='my-5' alt='line' />
                <div className='grid grid-cols-[25%_27%]'>
                    <label className='text-[#13490A] font-roboto text-center font-extrabold text-sm mx-5'>Cultivation</label>
                    <table className='table-auto border border-black font-bold text-base w-80'>
                        <thead className='border-b border-black'>
                            <tr>
                                <th className='border-r border-black text-center'>S.No</th>
                                <th className='border-r border-black text-center'>Area Code</th>
                                <th className='border-r border-black text-center'>Area</th>
                                <th className='border-r border-black text-center'>Type</th>
                                <th className='text-center'>Major Crops</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-r border-black text-center'>01</td>
                                <td className='border-r border-black text-center'>Pun01</td>
                                <td className='border-r border-black text-center'>2Acre</td>
                                <td className='border-r border-black text-center'>Garden</td>
                                <td className='text-center'>Maize</td>
                            </tr>
                            <tr>
                                <td className='border-r border-black text-center'>01</td>
                                <td className='border-r border-black text-center'>Pun01</td>
                                <td className='border-r border-black text-center'>2Acre</td>
                                <td className='border-r border-black text-center'>Garden</td>
                                <td className='text-center'>Maize</td>
                            </tr>
                            <tr>
                                <td className='border-r border-black text-center'>01</td>
                                <td className='border-r border-black text-center'>Pun01</td>
                                <td className='border-r border-black text-center'>2Acre</td>
                                <td className='border-r border-black text-center'>Garden</td>
                                <td className='text-center'>Maize</td>
                            </tr>
                            <tr className='border-b border-black'>
                                <td className='border-r border-black text-center'>01</td>
                                <td className='border-r border-black text-center'>Pun01</td>
                                <td className='border-r border-black text-center'>2Acre</td>
                                <td className='border-r border-black text-center'>Garden</td>
                                <td className='text-center'>Maize</td>
                            </tr>
                            <tr>
                                <td className='border-r border-black text-center'></td>
                                <td className='border-r border-black text-center'>Total</td>
                                <td className='border-r border-black text-center col-span-2'>8Acre</td>
                                <td className='border-r border-black text-center'></td>
                                <td className='text-center'></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type='submit' className='bg-[#05AB2A] text-[#F3FFF1] ml-[35%] mt-5 shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-3 rounded mx-5 text-sm font-thin'>Submitttttt</button>
            </section>
        </>
    )
}

export default Registration2Content