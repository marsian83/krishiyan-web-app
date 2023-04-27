import React, { useState } from "react";

const DeficiencySymtoms = (props: any) => {
  const [table, setTable] = useState(props.data.nutient);

  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[100%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%]">S.No</th>
            <th className="border-r border-black py-[1.2%]">
              Deficiency Nutient
            </th>
            <th className="border-r border-black py-[1.2%]">
              Notable Symptoms
            </th>
            <th className="border-r border-black py-[1.2%]">Images</th>
            <th className="border-r border-black py-[1.2%]">
              Solution (Product)
            </th>
            <th className="border-r border-black py-[1.2%]">
              Reccomendation description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">
              {table.value1.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value1.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">2</td>
            <td className="border-r border-black font-thin">
              {table.value2.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value2.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">3</td>
            <td className="border-r border-black font-thin">
              {table.value3.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value3.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">4</td>
            <td className="border-r border-black font-thin">
              {table.value4.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value4.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">5</td>
            <td className="border-r border-black font-thin">
              {table.value5.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value5.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value5.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value5.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value5.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">6</td>
            <td className="border-r border-black font-thin">
              {table.value6.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value6.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value6.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value6.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value6.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">7</td>
            <td className="border-r border-black font-thin">
              {table.value7.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value7.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value7.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value7.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value7.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">8</td>
            <td className="border-r border-black font-thin">
              {table.value8.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value8.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value8.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value8.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value8.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">9</td>
            <td className="border-r border-black font-thin">
              {table.value9.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value9.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value9.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value9.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value9.description}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">10</td>
            <td className="border-r border-black font-thin">
              {table.value10.Nutient1}
            </td>
            <td className="border-r border-black font-thin">
              {table.value10.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value10.image} style={{ width: "900px" }} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value10.Solution}
            </td>
            <td className="border-r border-black font-thin">
              {table.value10.description}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DeficiencySymtoms;
