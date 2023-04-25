import React, { useState } from "react";

const Hervest = (props: any) => {
  const [data, setData] = useState(props.crop.newHarvest);
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[95%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>
            <th className="border-r border-black py-[1.2%]">
              Physiological Maturity Key symptoms
            </th>
            <th className="border-r border-black py-[1.2%]">
              Harvest Index (kg/kg)
            </th>
            <th className="border-r border-black py-[1.2%]">Average yield</th>
            <th className="border-r border-black py-[1.2%]">
              Conditions during harvest
            </th>
            <th className="border-r border-black py-[1.2%]">
              Post Harvest Losses Csuses by
            </th>
            <th className="border-r border-black py-[1.2%]">How to prevent?</th>
            <th className="border-r border-black py-[1.2%] pl-2 pr-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {/* Stage1 */}
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">
              {data.Physiological}
            </td>
            <td className="border-r border-black font-thin">{data.index}</td>
            <td className="border-r border-black font-thin">{data.Average}</td>
            <td className="border-r border-black font-thin">
              {data.Conditions_during}
            </td>
            <td className="border-r border-black font-thin">
              {data.Post_Harvest}
            </td>
            <td className="border-r border-black font-thin">{data.prevent}</td>
            <td className="border-r border-black font-thin">
              <img src={data.images.image1} />
              <img src={data.images.image2} style={{ marginTop: "20px" }} />
              <img src={data.images.image3} style={{ marginTop: "20px" }} />
              <img src={data.images.image4} style={{ marginTop: "20px" }} />
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </>
  );
};

export default Hervest;
