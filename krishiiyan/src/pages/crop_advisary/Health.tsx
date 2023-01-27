import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import TableData from "./Tabledata";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
const Health = () => {
  const [crops, setCrops] = useState<any>();
  const [type, setType] = useState("");
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");

  const getCrops = async () => {
    const [err, res] = await Api.getCrops();

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      setCrops(res?.data);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getCrops();
    };
    init();
  }, []);

  return (
    <>
      <Header title="Crop Advisary" subtitle="Health" />
      <section className="p-[1%] grid gap-y-2">
        <div className="grid grid-cols-[30%_30%_30%_10%] ">
          <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
            <label className="text-[#13490A] text-center">Type</label>
            <input
              placeholder="Cereal"
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            />
            
          </div>
          <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
            <label className="text-[#13490A] text-center">Crop</label>
            <input
              placeholder="Crop"
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
              onChange={(e: any) => setCrop(e.target.value)}
            />
           
          </div>
          <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
            <label className="text-[#13490A] text-center">Variety</label>
            <input
              placeholder="Variety"
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            />
           
          </div>
        </div>

        {crops
          ?.filter((val: any) => {
            if (crop === "") {
              return;
            } else if (
              val?.localName?.toLowerCase().includes(crop.toLowerCase())
            ) {
              return val;
            }
          })
          .map((obj: any) => (
            <>
            <table className="table-fixed border-collapse border border-black font-bold text-base mx-auto">
            <thead className="border-b border-black">
            <tr className="text-center">
              <th className="border-r border-black py-[1.2%]">Name</th>
              <th className="border-r border-black py-[1.2%]">Image</th>
              <th className="border-r border-black py-[1.2%]">Description</th>
              <th className="border-r border-black py-[1.2%]">Solution</th>
            </tr>
          </thead>
          <tbody>
          {
              obj?.pestMgmt?.map((curr:any) => {
                return (
                  <tr className="border-b border-black text-center">
                    <td className="border-r border-black">{curr.name}</td>
                    <td className="border-r border-black">
                      <div className="grid grid-cols-[50%_50%]">
                        <img src={curr?.image} alt="Image" className="h-full" />
                        {/* <img src={curr?.image} alt="image" className="h-full" /> */}
                      </div>
                    </td>
                    <td className="border-r border-black w-[35%]">{curr.description}</td>
                    <td className="border-r border-black flex flex-col justify-center items-center">
                      {/* {obj?.pestMgmt?.solution?.map((o:any) =>(
                        <>
                        <h6>{o?.name}</h6>
                        <h6>Fipronill</h6>
                        </>
                      ))} */}
                       <h6>Fipronill</h6>
                    </td>
                  </tr>
                );
              })}
          </tbody>
            </table>
            </>
          ))}
      </section>
    </>
  );
};

export default Health;
