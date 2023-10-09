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
            <th className="border-r border-black py-[1.2%] text-xl font-extrabold w-[15%]">
              Nutrients
            </th>
            <th className="border-r border-black py-[1.2%] text-xl font-extrabold">
              Dosage (kg/acre)
            </th>
            <th className="border-r border-black py-[1.2%] text-xl font-extrabold">
              Age of the crop
            </th>
            <th className="border-r border-black py-[1.2%] text-xl font-extrabold">
              Method of application
            </th>
          </tr>
        </thead>
        <tbody>
  {data.map((nutrient: any, index: number) => {
    if (nutrient.name && nutrient.Dosage && nutrient.age && nutrient.Method_application) {
      return (
        <tr className="h-10 border-b border-black" key={index}>
          <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
            {nutrient.name}
          </td>
          <td className="border-r border-black font-thin">
            {nutrient.Dosage}
          </td>
          <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
            {nutrient.age}
          </td>
          <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
            {nutrient.Method_application}
          </td>
        </tr>
      );
    }
    return null;
  })}
</tbody>
      </table>
    </section>
  );
};

export default NutrientTable;
