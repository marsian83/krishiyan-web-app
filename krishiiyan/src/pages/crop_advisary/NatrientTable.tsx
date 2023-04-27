import React, { useState } from "react";

const NatrientTable = (props: any) => {
  console.log(props, "it is natrient");
  const [data, setData] = useState(props.crop.nutrientManagement);
  console.log(data, "it is data natrient");
  return (
    <section className="p-2">
      <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%]">Nutrients</th>
            <th className="border-r border-black py-[1.2%]">
              Dosage (kg/acre)
            </th>
            <th className="border-r border-black py-[1.2%]">
              Age of the crop (Day and Stage)
            </th>
            <th className="border-r border-black py-[1.2%]">
              Method of application
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Stage1 */}
          {/* {oldCultivation?.map((cultivation: any, index: any) => ( */}
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">
              {/* {index + 1} */}
              {data.value.value1.Nutient}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value1.Dosage}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value1.age}
            </td>
            <td className="border-r border-black font-thin ">
              {data.value.value1.Method_application}
            </td>
          </tr>

          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">
              {/* {index + 1} */}
              {data.value.value2.Nutient}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value2.Dosage}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value2.age}
            </td>
            {/* <td className="border-r border-black font-thin">
              {data.value.value2.Method_application}
            </td> */}
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">
              {/* {index + 1} */}
              {data.value.value3.Nutient}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value3.Dosage}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value3.age}
            </td>
            {/* <td className="border-r border-black font-thin">
              {data.value.value3.Method_application}
            </td> */}
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">
              {/* {index + 1} */}
              {data.value.value4.Nutient}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value4.Dosage}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value4.age}
            </td>
            {/* <td className="border-r border-black font-thin">
              {data.value.value4.Method_application}
            </td> */}
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </section>
  );
};

export default NatrientTable;
