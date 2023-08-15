import React, { useState } from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const WeedManagementT = (props: any) => {
  const [table, setTable] = useState(props.data.weedManagement);
  console.log(table)
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>
            <th className="border-r border-black py-[1.2%]">Type of weed</th>
            <th className="border-r border-black py-[1.2%]">
              Weed Name (Local)
            </th>
            <th className="border-r border-black py-[1.2%]">Scientific Name</th>

            <th className="border-r border-black py-[1.2%]">
              Image of the weed
            </th>
            <th className="border-r border-black py-[1.2%]">
              Solution (Product)
            </th>
          </tr>
        </thead>
        <tbody>
        {
            table.map((item: any, index: any) => {
              return (
                <tr className="h-10 border-b border-black">
                <td className="border-r border-black font-thin">{index+1}</td>
                <td className="border-r border-black font-thin">
                  {
                    item.category
                  }
                </td>
                <td className="border-r border-black font-thin">
                  {
                    item.name

                  }
                </td>
                <td className="border-r border-black font-thin">
                  {
                    item.scientificName
                  }
                </td>
                <td className="border-r border-black font-thin">
                        <img src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(item.image)}`} style={{ marginTop: "20px" ,width:"200px", height:"200px", objectFit:"cover" }} />
                </td>
                <td className="border-r border-black font-thin">
                  {
                    item.solutions
                  }
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default WeedManagementT;
