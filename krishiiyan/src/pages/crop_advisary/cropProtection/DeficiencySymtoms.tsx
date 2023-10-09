import React, { useState } from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const DeficiencySymtoms = (props: any) => {
  const [table, setTable] = useState(props.data.nutrient);
  console.log(table)
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[100%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%]">S.No</th>
            <th className="border-r border-black py-[1.2%]">
              Notable symptoms
            </th>
            <th className="border-r border-black py-[1.2%]">
              Solution
            </th>
            <th className="border-r border-black py-[1.2%]">Images</th>
          </tr>
        </thead>
        <tbody>
        {
  table.map((d: any, index: any) => {
    if (
      d.deficiency &&
      d.deficiency.Notable_Symptoms &&
      d.deficiency.Solution &&
      d.deficiency.images &&
      d.deficiency.images.length > 0
    ) {
      return (
        <tr className="h-10 border-b border-black">
          <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl w-32">
            {index + 1}
          </td>
          <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl w-[200px]">
            {d.deficiency.Notable_Symptoms}
          </td>
          <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl w-[500px]">
            {d.deficiency.Solution}
          </td>
          <td className="border-r border-black font-thin ">
            {d.deficiency.images.map((image: any) => {
              return (
                <img
                  src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
                    image
                  )}`}
                  style={{
                    marginTop: "20px",
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              );
            })}
          </td>
        </tr>
      );
    } else {
      return null;
    }
  })
}

        </tbody>
        </table>
    </>
  );
};

export default DeficiencySymtoms;
