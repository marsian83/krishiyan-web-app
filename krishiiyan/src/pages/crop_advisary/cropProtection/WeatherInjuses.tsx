import React, { useState } from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const WeatherInjuses = (props: any) => {
  const [table, setTable] = useState(props.data.weatherInjuries);

  console.log(props.data.weatherInjuries);
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>
            <th className="border-r border-black py-[1.2%]">Image</th>
            <th className="border-r border-black py-[1.2%]">Causes</th>
            <th className="border-r border-black py-[1.2%]">
              Symptom Description
            </th>
            {/* <th className="border-r border-black py-[1.2%]">Symptom images</th>
            <th className="border-r border-black py-[1.2%]">
              How to overcome?
            </th> */}
          </tr>
        </thead>
        <tbody>
          {/* <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">
              {table.value1.type_injury}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.causes}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.symptom}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value1.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.overcom}
            </td>
          </tr> */}
          {/* ))} */}
          {
            table.map((item : any, index: any)=>{
              return (
                <tr className="h-10 border-b border-black">
                <td className="border-r border-black font-thin  pl-2 pr-2 text-xl">
                  {index + 1}
                </td>
                <td>
                <img
                        src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
                          item.image
                        )}`}
                        style={{
                          marginTop: "20px",
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                </td>
                
                <td className="font-thin  pl-2 pr-2 text-xl">
                  {item.causes}
                </td>
                <td className=" font-thin  pl-2 pr-2 text-xl">
                  {item.symptoms}
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

export default WeatherInjuses;
