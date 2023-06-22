import React, { useState } from "react";

const NutrientTable = (props: any) => {
  console.log(props, "it is nutrient");
  const [data, setData] = useState(props.crop.nutrient);
  console.log(data, "it is data nutrient");
  
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
          {data.map((nutrient: any, index: number) => (
            <tr className="h-10 border-b border-black" key={index}>
              <td className="border-r border-black font-thin">
                {nutrient.name}
              </td>
              <td className="border-r border-black font-thin">
                {nutrient.Dosage}
              </td>
              <td className="border-r border-black font-thin">
                {nutrient.age}
              </td>
              <td className="border-r border-black font-thin">
                {nutrient.Method_application}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NutrientTable;
