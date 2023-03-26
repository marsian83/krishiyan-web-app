// import React from "react";
// import Header from "../../Components/layouts/Header";
// import Input from "../../Components/themes/Input";

// const Purchase = () => {
//   return (
//     <>
//       <Header title="Farmer Relationship Management" subtitle="Purchase" />
//       <section>
//         <div className="grid items-center box-border w-full">
//           <div className="grid grid-cols-[35%_45%_15%_5%] mt-7 flex-row items-center w-full">
//             <label className="text-[#13490A] font-roboto font-extrabold text-sm flex justify-center">
//               Farmer Mobile Number
//             </label>
//             <input
//               //   onChange={onChangeInput}
//               type="text"
//               className="bg-[#F3FFF1] h-8 lg:w-[86%] xl:w-[90%] lg:ml-2 xl:ml-[1%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md pr-3 pl-3"
//             />
//             <button
//               type="submit"
//               // onClick={onClickEnter}
//               className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
//             >
//               ENTER
//             </button>
//           </div>
//           <div className="flex flex-col items-center mx-[5%] gap-y-8 mt-5">
//             <table className="table-auto border-collapse border border-black font-bold text-base w-[40%] mx-auto ml-3">
//               <thead className="border-b border-black">
//                 <tr className="text-center">
//                   <th className="border-r border-black py-[1.2%]">S.No</th>
//                   <th className="border-r border-black py-[1.2%]">Date</th>
//                   <th className="border-r border-black py-[1.2%]">ID</th>
//                   <th className="border-r border-black py-[1.2%]">Category</th>
//                   {/* <th>Qty</th> */}
//                   <th className="border-r border-black py-[1.2%]">
//                     Price Unit
//                   </th>
//                   <th className="border-r border-black py-[1.2%]">
//                     Total Price
//                   </th>
//                   <th className="border-r border-black py-[1.2%]">Status</th>
//                   {/* <th>Reason</th> */}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="h-10 border-b border-black">
//                   <td className="border-r border-black">01</td>
//                   <td className="border-r border-black">22/04/22</td>
//                   <td className="border-r border-black">FERT012</td>
//                   <td className="border-r border-black">Fertilizer</td>
//                   {/* <td className="border-r border-black">02</td> */}
//                   <td className="border-r border-black">150</td>
//                   <td className="border-r border-black">300</td>
//                   <td className="border-r border-black ">Paid</td>
//                   {/* <td>Cultivation Id - Fertilizer for maize</td> */}
//                 </tr>
//                 <tr className="h-10 border-b border-black">
//                   <td className="border-r border-black">02</td>
//                   <td className="border-r border-black">22/04/22</td>
//                   <td className="border-r border-black">FERT012</td>
//                   <td className="border-r border-black">Fertilizer</td>
//                   {/* <td>02</td> */}
//                   <td className="border-r border-black">150</td>
//                   <td className="border-r border-black">300</td>
//                   <td className="border-r border-black">Paid</td>
//                   {/* <td>Cultivation Id - Fertilizer for maize</td> */}
//                 </tr>
//                 <tr className="h-10 border-b border-black">
//                   <td className="border-r border-black">03</td>
//                   <td className="border-r border-black">22/04/22</td>
//                   <td className="border-r border-black">FERT012</td>
//                   <td className="border-r border-black">Fertilizer</td>
//                   {/* <td className="border-r border-black">02</td> */}
//                   <td className="border-r border-black">150</td>
//                   <td className="border-r border-black">300</td>
//                   <td className="border-r border-black">Paid</td>
//                   {/* <td>Cultivation Id - Fertilizer for maize</td> */}
//                 </tr>
//                 <tr className="h-10 border-b border-black">
//                   <td className="border-r border-black">04</td>
//                   <td className="border-r border-black">22/04/22</td>
//                   <td className="border-r border-black">FERT012</td>
//                   <td className="border-r border-black">Fertilizer</td>
//                   {/* <td className="border-r border-black">02</td> */}
//                   <td className="border-r border-black">150</td>
//                   <td className="border-r border-black">300</td>
//                   <td className="border-r border-black">Paid</td>
//                   {/* <td>Cultivation Id - Fertilizer for maize</td> */}
//                 </tr>
//                 <tr className="h-10 border-b border-black">
//                   <td className="border-r border-black">05</td>
//                   <td className="border-r border-black">22/04/22</td>
//                   <td className="border-r border-black">FERT012</td>
//                   <td className="border-r border-black">Fertilizer</td>
//                   {/* <td>02</td> */}
//                   <td className="border-r border-black">150</td>
//                   <td className="border-r border-black">300</td>
//                   <td className="border-r border-black">Paid</td>
//                   {/* <td>Cultivation Id - Fertilizer for maize</td> */}
//                 </tr>
//                 <tr className="h-10 border-b border-black">
//                   <td className="border-r border-black">06</td>
//                   <td className="border-r border-black">22/04/22</td>
//                   <td className="border-r border-black">FERT012</td>
//                   <td className="border-r border-black">Fertilizer</td>
//                   {/* <td className="border-r border-black">02</td> */}
//                   <td className="border-r border-black">150</td>
//                   <td className="border-r border-black">300</td>
//                   <td className="border-r border-black text">Paid</td>
//                   {/* <td>Cultivation Id - Fertilizer for maize</td> */}
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="mx-10">
//             <p className="text-[#13490A] font-bold text-sm ml-4 mb-10">
//               Recommended Products
//             </p>
//             <div className="flex">
//               <div className="flex">
//                 <img
//                   src="Images/salts.png"
//                   alt="salts"
//                   className="w-28 h-24 flex-1"
//                 />
//                 <div className="flex flex-col items-center flex-1">
//                   <p className="text-[#000000] font-semibold text-xs mt-2">
//                     EPSOM SALTS
//                   </p>
//                   <img
//                     src="Images/plus.png"
//                     alt="vector"
//                     className="w-6 mt-5"
//                   />
//                 </div>
//               </div>
//               <div className="flex mx-5">
//                 <img
//                   src="Images/Q4.png"
//                   alt="Q4"
//                   className="w-28 h-24 flex-1"
//                 />
//                 <div className="flex flex-col items-center flex-1">
//                   <p className="text-[#000000] font-semibold text-xs mt-2">
//                     Q4
//                   </p>
//                   <img
//                     src="Images/plus.png"
//                     alt="vector"
//                     className="w-6 mt-5"
//                   />
//                 </div>
//               </div>
//               <div className="flex">
//                 <img
//                   src="Images/Bio.png"
//                   alt="Couscous"
//                   className="w-28 h-24 flex-1"
//                 />
//                 <div className="flex flex-col items-center flex-1">
//                   <p className="text-[#000000] font-semibold text-xs mt-2 ml-4">
//                     COUSCOUS <br /> MOVEN
//                   </p>
//                   <img
//                     src="Images/plus.png"
//                     alt="vector"
//                     className="w-6 mt-5"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Purchase;

import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import { getCrops, getvariteyByCropId } from "../../Services/Api";
import moment from "moment";
import Weather from "./Weather";

const Purchase = () => {
  const [openTab, setOpenTab] = useState("New");
  const [loading, setLoading] = useState(false);
  const [farmerID, setFarmerID] = useState("");
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [currentCultivation, setCurrentCultivation] = useState<any>();
  const [oldCultivation, setOldCultivation] = useState<any>();

  console.log(currentCultivation?.adoptedSeason);

  const onChangeInput = (e: any) => {
    setFarmerID(e.target.value);
  };
  const getFarmerById = async () => {
    if (farmerID) {
      setLoading(true);
      const [err, res] = await Api.getFarmer(farmerID);
      if (err) {
        console.log(err);
      }
      if (res) {
        console.log(res);

        setFarmerDetail(res?.data);
      }

      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const init = async () => {
  //     await getFarmerById();
  //   };
  //   init();
  // }, [farmerID]);

  const onClickEnter = async () => {
    await getFarmerById();
  };

  //Cultivation form data
  const [area, setArea] = useState("");
  const [problem, setProblem] = useState("");
  const [allPests, setAllPests] = useState<any[]>([]);
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");
  const [dateOfSowing, setDateOfSowing] = useState("");
  const [soilType, setSoilType] = useState("");
  const [irrigationType, setIrrigationType] = useState("");
  const [fertilizer, setFertilizer] = useState("");

  const onChangeArea = (e: any) => {
    setArea(e.target.value);
  };

  const onChangeCrop = (e: any) => {
    setCrop(e.target.value);
  };
  const onChangevariety = (e: any) => {
    setVariety(e.target.value);
  };
  const onChangedateOfSowing = (e: any) => {
    let date = moment(e.target.value).toISOString(); //ISO 8601 format
    setDateOfSowing(date);
  };

  const onChangeSoilType = (e: any, val: any) => {
    setSoilType(val.value);
  };

  const onChangeIrrigationType = (e: any, val: any) => {
    setIrrigationType(val.value);
  };

  const onChangeFertilizer = (e: any, val: any) => {
    setFertilizer(val.value);
  };

  const onSubmitHandler = async () => {
    const [err, res] = await Api.createFarmerCultivationData(
      farmerDetail?._id,
      area,
      crop,
      variety,
      dateOfSowing,
      soilType,
      irrigationType,
      fertilizer
    );
    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      toast.success("New cultivation record created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  //Get Farmer Cultivations
  useEffect(() => {
    const init = async () => {
      const [err, res] = await Api.getFarmerCultivationData(farmerDetail?._id);
      if (res) {
        // let current_cultivation =
        //   res?.data?.farmerCultivationData[
        //     res?.data?.farmerCultivationData.length - 1
        //   ];
        // setCurrentCultivation(current_cultivation);
        setOldCultivation(res?.data?.farmerCultivationData);
      }
    };
    init();
  }, [farmerID, farmerDetail]);

  useEffect(() => {
    const setCrops = async () => {
      const crops: any[] = await getCrops();
      setAllCropes(crops[1].data);
    };
    setCrops();
  }, []);
  useEffect(() => {
    const setPests = async (crop: string) => {
      const pests: any[] = await getvariteyByCropId(crop);
      setAllPests(pests[1].data);
    };
    if (!!crop) setPests(crop);
    else setAllPests([]);
  }, [crop]);

  return (
    <div>
      <Header title="Farmer Relationship Management" subtitle="Cultivation" />
      <div className="grid grid-cols-[90%_30%] items-center box-border w-full">
        <div className="mt-6 leading-4 ml-16">
          <p className="text-[#000000]  text-end">
            Name:{" "}
            <span className="text-[#FB0404] font-bold">
              {/* {farmerDetail?.nam  e} */}
            </span>
          </p>
          <p className="text-[#000000]   text-end">
            Area :{" "}
            <span className="text-[#FB0404] font-bold">
              {/* {farmerDetail?.address?.state} */}
            </span>
          </p>
        </div>
      </div>
      <section className="mt-10">
        {/* {farmerCredits ? ( */}
        <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto">
          <thead className="border-b border-black">
            <tr className="text-center">
              <th className="border-r border-black py-[1.2%]">S.No</th>
              <th className="border-r border-black py-[1.2%]">Date</th>
              <th className="border-r border-black py-[1.2%]">ID</th>
              <th className="border-r border-black py-[1.2%]">Product</th>
              <th className="border-r border-black py-[1.2%]">Amount</th>
              <th className="border-r border-black py-[1.2%]">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">01</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">02</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">03</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">04</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
            <tr className="h-10 border-b border-black">
              <td className="border-r border-black">05</td>
              <td className="border-r border-black">22/04/22</td>
              <td className="border-r border-black">FERT012</td>
              <td className="border-r border-black">Fertilizer</td>
              <td className="border-r border-black">150</td>
              <td className="border-r border-black ">Paid</td>
            </tr>
          </tbody>
        </table>
        {/* ) : (
                <></>
              )} */}
      </section>
    </div>
  );
};

export default Purchase;
