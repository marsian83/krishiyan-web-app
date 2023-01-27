import React from 'react'
import { Icon } from '@iconify/react';

const Sale02 = () => {
    return (
        <section className='flex border border-[#13490A] border-collapse font-roboto h-[88vh]'>
            <div className="flex flex-col flex-[4]">
                <div className="flex-[2] flex items-center gap-x-[30%]  border border-black text-sm text-[#13490A] font-bold">
                    <div>
                        <p>Name : M.Sarni</p>
                        <p>Phone : 944XXXXX09</p>
                        <p>E-mail : SamKrishiyanfarmer@gmail.com</p>
                        <p>Area : Pune(South 03)</p>
                        <p>Dealer : Pune-01</p>
                    </div>
                    <div>
                        <p>Type : Largescale Farmer</p>
                        <p>Available Credit : <span className='text-[#FB0404]'>₹25,000</span></p>
                        <p>Member Since : 02/03/2016 - <span className='text-[#E3BB2D]'>Gold</span></p>
                        <p>Number of Purchase : 47</p>
                        <p>Due : ₹0.00</p>
                    </div>
                </div>
                <div className='flex-[10] flex '>
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
                            <tr className=' justify-around items-center grid grid-cols-[1fr_1fr_2fr_1fr]'>
                                <td className='text-[#13490A] text-center'>01</td>
                                <td><img src='Images/FMC.png' className='h-16 w-16' /></td>
                                <td className='text-[#13490A]'>Furadan 3G</td>
                                <td><img src='Images/plus.png' className='h-5 w-5' /></td>
                            </tr>
                            <tr className='justify-end items-center grid grid-cols-[1fr_1fr_2fr_1fr]'>
                                <td className='text-[#13490A] text-center'>02</td>
                                <td><img src='Images/FMC.png' className='h-16 w-16' /></td>
                                <td className='text-[#13490A] '>Furadan 3G</td>
                                <td><img src='Images/plus.png' className='h-5 w-5' /></td>
                            </tr>
                            <tr className='justify-end items-center grid grid-cols-[1fr_1fr_2fr_1fr]'>
                                <td className='text-[#13490A] text-center'>03</td>
                                <td><img src='Images/FMC.png' className='h-16 w-16' /></td>
                                <td className='text-[#13490A] '>Furadan 3G</td>
                                <td><img src='Images/plus.png' className='h-5 w-5' /></td>
                            </tr>
                        </table>
                    </div>
                    <div className='border border-black flex-[1.2]'>
                        <div className='h-10 flex items-center border border-black gap-x-5 pl-1'>
                            <label className='font-bold text-sm text-[#033E02]'>PRODUCT ID</label>
                            <input type='text' className='bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md py-[1%] text-center h-7 border border-[#033E02]' />
                            <button className='bg-[#05AB2A] w-10 h-6 flex items-center justify-center rounded-md'><img src='Images/plus.png' alt='plus' className='h-4 w-4' /></button>
                        </div>
                        <table className='table-auto border-collapse border border-[#13490A] w-full text-[#13490A] text-sm'>
                            <tr className='border border-[#13490A] border-collapse'>
                                <th className='border border-[#033E02]'>S.No</th>
                                <th className='border border-[#033E02]'>Name/Id</th>
                                <th className='border border-[#033E02]'>Price/Unit</th>
                                <th className='border border-[#033E02]'>Quantity</th>
                                <th className='border border-[#033E02]'>Total</th>
                                <th></th>
                            </tr>
                            <tr className='border border-[#13490A] text-center'>
                                <td className='border border-[#033E02]'>01</td>
                                <td className='border border-[#033E02]'>Fertilizer</td>
                                <td className='border border-[#033E02]'>125.00</td>
                                <td className='flex items-center justify-center'>
                                    03 <Icon icon="material-symbols:add-circle-outline-rounded" /><Icon icon="mingcute:minus-circle-line" />
                                </td>
                                <td className='border border-[#033E02]'>375.00</td>
                                <td className='flex justify-around'><img src='Images/pencil.png' alt="vector" /><i className="fa-solid fa-trash"></i></td>
                            </tr>
                            <tr className='text-center'>
                                <td className='border border-[#033E02]'>02</td>
                                <td className='border border-[#033E02]'>Promoter</td>
                                <td className='border border-[#033E02]'>167.00</td>
                                <td className='flex items-center justify-center'>
                                    06 <Icon icon="material-symbols:add-circle-outline-rounded" /><Icon icon="mingcute:minus-circle-line" />
                                </td>
                                <td className='border border-[#033E02]'>1002.00</td>
                                <td className='flex justify-around'><img src='Images/pencil.png' alt="vector" /><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="flex-[4] border border-[#13490A] justify-around border-collapse  font-bold text-sm text-[#13490A] flex flex-col">
                    <div className="flex justify-center gap-x-[6%]">
                        <p>Crop: Maize, Onion, Tomato</p>
                        <p>Available Qty: 500kg</p>
                        <p>Price/Kg: 350.00</p>
                    </div>
                    <div className='flex justify-center'>
                        <p>Epson salt</p>
                    </div>
                    <div className="paragraph">
                        <p className='text-sm'>Helps seeds germinate makes plant grow bushier , produces more flowers, increases chlorophll production and deeters pests such as slugs and voles. It also provides vital nutrients to suppliment your regular fertilizer</p>
                    </div>
                    <div className="flex justify-center border-collapse gap-x-[5%]">
                        <button className='text-[#F3FFF1] bg-[#05AB2A] h-8 px-[1%] rounded-md font-normal'>Symptoms</button>
                        <button className='text-[#F3FFF1] bg-[#05AB2A] h-8 px-[1%] rounded-md font-normal'>Calculate</button>
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
                    <p>Discount</p>
                    <p className='text-[#526D4E] font-normal'>$00.00</p>
                </div>
                <div className="discount flex justify-between py-4 border border-[#13490A] px-1">
                    <p>Tax</p>
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
                <div className="button-group p-2 flex justify-between">
                    <button className='h-8 bg-[#05AB2A] w-20 text-[#F3FFF1] font-light rounded-md'>Split</button>
                    <button className='h-8 bg-[#05AB2A] w-fit px-1 text-[#F3FFF1] font-light rounded-md'>Pay By Credit</button>
                </div>
                <div className="payment-methord">
                    <p>Payment Method</p>
                </div>
                <div className="images flex w-full">
                    <img src="Images/UPI.png" alt="rectangle50" className='w-10 flex-1' />
                    <img src="Images/Moneybundle.png" alt="rectangle49" className='w-10 flex-1' />
                    <img src="Images/CreditCard.png" alt="rectangle48" className='w-10 flex-1' />
                </div>
                <div className="lastimage py-8 flex justify-center items-center">
                    <button className='bg-[#05AB2A] text-[#F3FFF1] rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-2'>Generate Bill</button>
                </div>
            </div>
        </section>
    )
}

export default Sale02