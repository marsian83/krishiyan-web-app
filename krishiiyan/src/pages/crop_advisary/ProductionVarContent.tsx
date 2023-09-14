import React, { useEffect, useState } from "react";
import "./styles/ProductionVarContent.css";

const ProductionVarContent = (props: any) => {
  const [data, setData] = useState<any>([]);
  console.log(props.crop.localName);
  useEffect(() => {
    const getVarieties = async (name: String) => {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/crop/variety/" + name,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data.varieties);
      setData(data.varieties);
    };
    getVarieties(props.crop.localName);
  }, []);
  console.log(data, "it is data");
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[90%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              S.No
            </th>
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Name of the variety/hybrid
            </th>
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Product Condition
            </th>

            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Area of adoption
            </th>
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Crop cycle
            </th>
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Speciality
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index} className="h-10 border-b border-black">
              <td className="border-r border-black font-thin">{index + 1}</td>
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.nameOfvariety}
              </td>
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.productCondition}
              </td>

              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.areaOfadadoption}
              </td>
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.cropCycle}
              </td>
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.salientFeatures}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductionVarContent;
