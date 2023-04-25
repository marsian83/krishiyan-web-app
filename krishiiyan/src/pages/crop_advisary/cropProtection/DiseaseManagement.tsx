import React, { useState } from "react";

const DiseaseManagement = (props: any) => {
  const [table, setTable] = useState(props.data.diseaseManagement.value);
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[100%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>
            <th className="border-r border-black py-[1.2%]">
              Name of the disease/Pest
            </th>
            <th className="border-r border-black py-[1.2%]">Causal agent</th>
            <th className="border-r border-black py-[1.2%]">
              Characteristic of the causal organism
            </th>
            <th className="border-r border-black py-[1.2%]">
              Notable symptoms
            </th>
            <th className="border-r border-black py-[1.2%]">
              Image (Disease with symptoms, 1,2)
            </th>
            <th className="border-r border-black py-[1.2%]">
              Solution to the issue
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Stage1 */}
          {/* {oldCultivation?.map((cultivation: any, index: any) => ( */}
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">
              {table.value1.name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.causal}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value1.images.image1} />
              <img src={table.value1.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">2</td>
            <td className="border-r border-black font-thin">
              {table.value2.name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.causal}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value2.images.image1} />
              <img src={table.value2.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">3</td>
            <td className="border-r border-black font-thin">
              {table.value3.name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.causal}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value3.images.image1} />
              <img src={table.value3.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">4</td>
            <td className="border-r border-black font-thin">
              {table.value4.name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.causal}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img
                src={table.value4.images.image1}
                style={{ width: "900px" }}
              />
              <img src={table.value4.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.Solution}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </>
  );
};

export default DiseaseManagement;
