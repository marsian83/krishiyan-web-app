import React, { useState } from "react";

const WeedManagementT = (props: any) => {
  const [table, setTable] = useState(props.data.WeedMangement.value);
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>
            <th className="border-r border-black py-[1.2%]">Type of weed</th>
            <th className="border-r border-black py-[1.2%]">
              Weed Name (Local)
            </th>
            <th className="border-r border-black py-[1.2%]">Scientific Name</th>

            <th className="border-r border-black py-[1.2%]">
              Image of the weed
            </th>
            <th className="border-r border-black py-[1.2%]">
              Solution (Product)
            </th>
            <th className="border-r border-black py-[1.2%]">
              Reccomendation description
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Stage1 */}
          {/* {oldCultivation?.map((cultivation: any, index: any) => ( */}
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">
              {table.value1.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value1.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value1.solution}
            </td>
          </tr>

          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">2</td>
            <td className="border-r border-black font-thin">
              {table.value2.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value2.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value2.solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">3</td>
            <td className="border-r border-black font-thin">
              {table.value3.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value3.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value3.solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">4</td>
            <td className="border-r border-black font-thin">
              {table.value4.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value4.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value4.solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">5</td>
            <td className="border-r border-black font-thin">
              {table.value5.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value5.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value5.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value5.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value5.solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">6</td>
            <td className="border-r border-black font-thin">
              {table.value6.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value6.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value6.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value6.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value6.solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">7</td>
            <td className="border-r border-black font-thin">
              {table.value7.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value7.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value7.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value7.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value7.solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">8</td>
            <td className="border-r border-black font-thin">
              {table.value8.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value8.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value8.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value8.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value8.solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">9</td>
            <td className="border-r border-black font-thin">
              {table.value9.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value9.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value9.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value9.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value9.solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">10</td>
            <td className="border-r border-black font-thin">
              {table.value10.type_weed}
            </td>
            <td className="border-r border-black font-thin">
              {table.value10.weed_name}
            </td>
            <td className="border-r border-black font-thin">
              {table.value10.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.value10.image} />
            </td>
            <td className="border-r border-black font-thin">
              {table.value10.solution}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </>
  );
};

export default WeedManagementT;
