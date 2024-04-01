import React, { useState } from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const WeatherInjuses = (props: any) => {
  const [table, setTable] = useState(props.data.weatherInjuries);

  if (!props.data.weatherInjuries || props.data.weatherInjuries.length === 0) {
    return <p>Data not available</p>;
  }

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
          </tr>
        </thead>
        <tbody>
          {table.map((item: any, index: any) => {
            return (
              <tr className="h-10 border-b border-black" key={index}>
                <td className="border-r border-black font-thin pl-2 pr-2 text-xl">
                  {index + 1}
                </td>
                <td>
                  {item && item.image ? (
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
                      className="border-r border-black py-[1.2%] text-xl w-[20%] justify-center"
                    />
                  ) : (
                    <div>No image</div>
                  )}
                </td>

                <td className="font-thin pl-2 pr-2 text-xl">
                  {item && item.causes ? item.causes : "N/A"}
                </td>
                <td className="font-thin pl-2 pr-2 text-xl">
                  {item && item.symptoms ? item.symptoms : "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default WeatherInjuses;
