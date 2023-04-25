import React, { useState } from "react";

const IrrigationTable = (props: any) => {
  const [data, setData] = useState<any>(props.crop.IrrigationMgmt);
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>
            <th className="border-r border-black py-[1.2%]">Component</th>
            <th className="border-r border-black py-[1.2%]">Discription</th>
            <th className="border-r border-black py-[1.2%]">
              Cost of Component
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Stage1 */}
          {/* {oldCultivation?.map((cultivation: any, index: any) => ( */}
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">Cost Harvesting</td>
            <td className="border-r border-black font-thin">
              {data.Cost_Harvesting.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_Harvesting.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">2</td>
            <td className="border-r border-black font-thin">Cost Pesticides</td>
            <td className="border-r border-black font-thin">
              {data.Cost_Pesticides.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_Pesticides.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">3</td>
            <td className="border-r border-black font-thin">
              Cost Transportation
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_Transportation.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_Transportation.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">4</td>
            <td className="border-r border-black font-thin">
              Cost Mischallaneous
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_mischallaneous.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_mischallaneous.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">5</td>
            <td className="border-r border-black font-thin">Cost Protectopn</td>
            <td className="border-r border-black font-thin">
              {data.Cost_protectopn.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_protectopn.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">6</td>
            <td className="border-r border-black font-thin">Cost Sowing</td>
            <td className="border-r border-black font-thin">
              {data.Cost_sowing.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_sowing.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">7</td>
            <td className="border-r border-black font-thin">Cost Weeding</td>
            <td className="border-r border-black font-thin">
              {data.Cost_weeding.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Cost_weeding.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">8</td>
            <td className="border-r border-black font-thin">Cots Fertilizer</td>
            <td className="border-r border-black font-thin">
              {data.Cots_Fertilizer.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Cots_Fertilizer.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">9</td>
            <td className="border-r border-black font-thin">
              Land Preparation
            </td>
            <td className="border-r border-black font-thin">
              {data.Land_preparation.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Land_preparation.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">10</td>
            <td className="border-r border-black font-thin">Net Profit</td>
            <td className="border-r border-black font-thin">
              {data.Net_Profit.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Net_Profit.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">11</td>
            <td className="border-r border-black font-thin">
              Total Cultivation
            </td>
            <td className="border-r border-black font-thin">
              {data.Total_cultivation.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Total_cultivation.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">12</td>
            <td className="border-r border-black font-thin">
              Total Production
            </td>
            <td className="border-r border-black font-thin">
              {data.Total_production.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.Total_production.Cost_Component}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">13</td>
            <td className="border-r border-black font-thin">
              cost Seed Materials
            </td>
            <td className="border-r border-black font-thin">
              {data.cost_seed_materials.discription}
            </td>
            <td className="border-r border-black font-thin">
              {data.cost_seed_materials.Cost_Component}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </>
  );
};

export default IrrigationTable;
