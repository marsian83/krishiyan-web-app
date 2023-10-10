import React, { useState } from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const DiseaseManagement = (props: any) => {
  const [table, setTable] = useState(props.data.diseaseManagement);
  console.log(table);
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[100%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1 text-xl">
              S.No
            </th>
            <th className="border-r border-black py-[1.2%]  pl-1 pr-1 text-xl">
              Casual agent
            </th>
            {/* <th className="border-r border-black py-[1.2%]  pl-1 pr-1 text-xl">
              Characteristics
            </th> */}
            <th className="border-r border-black py-[1.2%]  pl-1 pr-1 text-xl">
              Name
            </th>
            <th className="border-r border-black py-[1.2%]  pl-1 pr-1 text-xl">
              Notable symptoms
            </th>
            <th className="border-r border-black py-[1.2%] text-xl w-[20%] justify-center">
              Image (Disease with symptoms, 1,2)
            </th>
            <th className="border-r border-black py-[1.2%]  pl-1 pr-1 text-xl">
              Solution to the issue
            </th>
          </tr>
        </thead>
        <tbody>
          {table.map((item: any, index: any) => {
            return (
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black font-thin  pl-2 pr-2 text-xl">
                  {index + 1}
                </td>
                <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                  {/* {table.Value1.name_pest} */}
                  {item.causal}
                </td>
                {/* <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                  {item.characteristics}
                </td> */}
                <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                  {/* {table.Value1.scientificName} */}
                  {item.name}
                </td>
                {/* <td className="border-r border-black font-thin"> */}
                {/* {table.Value1.characteristic} */}
                {/* </td> */}
                <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                  {/* {table.Value1.Notable_Symptoms} */}
                  {item.symptoms}
                </td>
                <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                  {/* <img src={table.Value1.images.image1} />
                  <img src={table.Value1.images.image2} /> */}
                  {item.images &&
                    item.images.map((image: any) => {
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
                <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                  {/* {table.Value1.Solution} */}
                  {item.solutions}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DiseaseManagement;
