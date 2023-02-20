import React from 'react'
import styles from './Inventory.module.css'
import Header from '../../Components/layouts/Header'

const Inventory = () => {
    return (
        <div>
            <Header title="Pos" subtitle="Inventory" />
            <section className=' box-border p-[1.5%] '>
                <div className='grid grid-cols-[25%_30%_auto] font-roboto mb-[1.5%]'>
                    <form className='flex text-[#13490A] font-extrabold justify-around'>
                        <label className='flex items-center'>Category</label>
                        <select className={styles.select}>
                            <option value='fertilizer'>Fertilizer</option>
                            <option value=''>Fertilizer2</option>
                            <option value=''>Fertilizer3</option>
                            <option value=''>Fertilizer4</option>
                            <option value=''>Fertilizer5</option>
                            <option value=''>Fertilizer6</option>
                        </select>
                        <img src='Images/Dropdown.png' alt='dropdown' className='max-w-full h-[70%] my-auto' />
                    </form>
                    <div className='flex border border-[#526D4E] px-[1%] mx-[4%] rounded-lg'>
                        <input type='text' className='text-[#13490A] !outline-none bg-transparent w-full font-normal text-center' />
                        <img src='Images/Search.png' alt='searchbar' />
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-[#05AB2A] text-[#F3FFF1] font-light w-[20%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-lg'>ADD</button>
                    </div>
                </div>
                <p className='text-[#13490A] font-bold'>Product List</p>
                <table className='border border-black border-collapse table-auto w-full h-[70vh]'>
                    <tr className='text-[#13490A] font-bold text-base text-center'>
                        <th className='border border-black border-collapse'>S.No</th>
                        <th className='border border-black border-collapse'>Product Id</th>
                        <th className='border border-black border-collapse'>Product Name</th>
                        <th className='border border-black border-collapse'>Category</th>
                        <th className='border border-black border-collapse'>Distributor</th>
                        <th className='border border-black border-collapse'>Quantity</th>
                        <th className='border border-black border-collapse'>Batch</th>
                        <th className='border border-black border-collapse'>Expiry Time</th>
                        <th className='border border-black border-collapse'></th>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>01</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>02</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>03</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>04</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>05</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>06</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>06</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>07</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>08</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center p-[5%]'>
                        <td className='w-fit border border-black border-collapse'>09</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                    <tr className='text-[#13490A] font-normal text-base text-center'>
                        <td className='w-fit border border-black border-collapse'>10</td>
                        <td className='w-fit border border-black border-collapse'>FERT02UREA2</td>
                        <td className='w-fit border border-black border-collapse'>Ammonium Sulphate</td>
                        <td className='w-fit border border-black border-collapse'>Fertilizer</td>
                        <td className='w-fit border border-black border-collapse'>Roll Agro Service</td>
                        <td className='w-fit border border-black border-collapse'>1335</td>
                        <td className='w-fit border border-black border-collapse'>Aug-2016</td>
                        <td className='w-fit border border-black border-collapse'>Dec-2023</td>
                        <td className='w-fit border border-black border-collapse'>
                            <img src='Images/Pencil.png' alt='Vector' className='mx-auto'/>
                        </td>
                    </tr>
                </table>
            </section>
        </div>
    )
}

export default Inventory