import React from 'react'

const ProductionReqContent = (props:any) => {
    let Col:any = 2
    return (
        <section>
            <table className='table-auto border border-black border-collapse my-5 mx-[0.8%]'>
                <tr className='h-[6vh] text-center bg-[#C6EDC0]'>
                    <th className='text-[#13490A] font-extrabold text-base w-full' colSpan={Col}>Soil</th>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base w-[50%] px-[0.5%]'><span className='font-extrabold mr-[4%]'>Texture:</span> Maize can be grown successfully in variety of soils ranging from loamy sand to clay loam.   </td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Nitrogen Level:</span>{props?.crop?.nitrogen} </td>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Structure:</span> Fine porous.</td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Phosporus Level:</span>{props?.crop?.phosporous}%</td>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Water holding Capacity:</span> Good water holding Characteristics(150-200mm)</td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Pottasium Level:</span>{props?.crop?.potash}%</td>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Soil Moisture:</span> {props?.crop?.zinc}%</td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Essential Nutrients:</span>  </td>
                </tr>
                <tr className='h-[6vh] bg-[#C6EDC0]'>
                    <th className='text-[#13490A] font-extrabold text-base' colSpan={Col}>Climate</th>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Type:</span>
                    {props?.crop?.cropTypes.map((i: any) => (
                              <>{i} , </>
                            ))}
                     </td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'></td>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'><span className='font-extrabold mr-[4%]'>Temperature:</span> {props?.crop?.temperature}C.</td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'></td>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'></td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'></td>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'></td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'></td>
                </tr>
                <tr className='h-[6vh]'>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'></td>
                    <td className='border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]'></td>
                </tr>
            </table>
        </section>
    )
}

export default ProductionReqContent