import React, { useState } from "react";

const WeatherInjuses = (props: any) => {
  const [table, setTable] = useState(props.data.weatherInjuries.value);
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>
            <th className="border-r border-black py-[1.2%]">Type of Injury</th>
            <th className="border-r border-black py-[1.2%]">Causes</th>
            <th className="border-r border-black py-[1.2%]">
              Symptom Description
            </th>
            <th className="border-r border-black py-[1.2%]">Symptom images</th>
            <th className="border-r border-black py-[1.2%]">
              How to overcome?
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10 border-b border-black">
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
          </tr>

          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">2</td>
            <td className="border-r border-black font-thin">
              {table.value2.type_injury}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.causes}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.symptom}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value2.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.overcom}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">3</td>
            <td className="border-r border-black font-thin">
              {table.value3.type_injury}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.causes}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.symptom}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value3.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.overcom}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">4</td>
            <td className="border-r border-black font-thin">
              {table.value4.type_injury}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.causes}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.symptom}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value4.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.overcom}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </>
  );
};

export default WeatherInjuses;
