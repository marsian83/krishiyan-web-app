import React from "react";

const SeedTable = (props: any) => {
  console.log(props.data.Seed_treatment.Dosage, "it is seed");
  return (
    <section className="p-2">
      <span className="font-extrabold mr-[4%]">Seed treatment methods</span>

      <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%]">
              Name of the chemical and Methodology
            </th>
            <th className="border-r border-black py-[1.2%]">Dosage</th>
          </tr>
        </thead>
        <tbody>
          {/* Stage1 */}
          {/* {oldCultivation?.map((cultivation: any, index: any) => ( */}
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">
              {/* {index + 1} */}
              {props.data.Seed_treatment.nameOfChemical}
            </td>
            <td className="border-r border-black font-thin">
              {/* {cultivation?.crop} */}
              {props.data.Seed_treatment.Dosage}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </section>
  );
};

export default SeedTable;
