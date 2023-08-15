import React, { useState } from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const DiseaseManagement = (props: any) => {
  const [table, setTable] = useState(props.data.diseaseManagement);
  console.log(table)
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[100%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>
            <th className="border-r border-black py-[1.2%]">
              Casual agent
            </th>
            <th className="border-r border-black py-[1.2%]">Characteristics</th>
            <th className="border-r border-black py-[1.2%]">
              Name
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
        {
            table.map((item: any, index: any) => {
              return (
                <tr className="h-10 border-b border-black">
                <td className="border-r border-black font-thin">{index+1}</td>
                <td className="border-r border-black font-thin">
                  {/* {table.Value1.name_pest} */}
                  {
                    item.causal
                  }
                </td>
                <td className="border-r border-black font-thin">
                  {/* {table.Value1.scientificName} */}
                  {
                    item.characteristics

                  }
                </td>
                <td className="border-r border-black font-thin">
                  {/* {table.Value1.scientificName} */}
                  {
                    item.name

                  }
                </td>
                {/* <td className="border-r border-black font-thin"> */}
                  {/* {table.Value1.characteristic} */}
                {/* </td> */}
                <td className="border-r border-black font-thin">
                  {/* {table.Value1.Notable_Symptoms} */}
                  {
                    item.symptoms
                  }
                </td>
                <td className="border-r border-black font-thin">
                  {/* <img src={table.Value1.images.image1} />
                  <img src={table.Value1.images.image2} /> */}
                  {/* {
                    item.images &&
                    item.images.map((image: any) => {
                      return (
                        <img src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(image)}`} style={{ marginTop: "20px" ,width:"200px", height:"200px", objectFit:"cover" }} />
                      )
                    })
                  } */}

                </td>
                <td className="border-r border-black font-thin">
                  {/* {table.Value1.Solution} */}
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

export default DiseaseManagement;
