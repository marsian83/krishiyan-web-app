import React, { useState } from "react";

const DeficiencySymtoms = (props: any) => {
  const [table, setTable] = useState(props.data.diseaseManagement);

  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[100%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%]">S.No</th>
            <th className="border-r border-black py-[1.2%]">
              Deficiency Nutient
            </th>
            <th className="border-r border-black py-[1.2%]">
              Notable Symptoms
            </th>
            <th className="border-r border-black py-[1.2%]">Images</th>
            <th className="border-r border-black py-[1.2%]">
              Solution (Product)
            </th>
            <th className="border-r border-black py-[1.2%]">
              Reccomendation description
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">
              {table.value1.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value1.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.description}
            </td>
            </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default DeficiencySymtoms;
