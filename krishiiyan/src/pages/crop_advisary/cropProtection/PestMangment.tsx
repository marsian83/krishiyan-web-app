import React, { useState } from "react";

const PestManagement = (props: any) => {
  const [table, setTable] = useState(props.data.PestManagement.value);
  return (
    <section className="p-2">
      <table className="table-auto border-collapse border border-black font-bold text-base w-[100%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th>

            <th className="border-r border-black py-[1.2%]">
              Name of the Pest
            </th>
            <th className="border-r border-black py-[1.2%]">Scientific Name</th>
            <th className="border-r border-black py-[1.2%]">
              Characteristic of the pest
            </th>
            <th className="border-r border-black py-[1.2%]">
              Notable symptoms
            </th>
            <th className="border-r border-black py-[1.2%]">
              Image (Pest/Damage)
            </th>
            <th className="border-r border-black py-[1.2%]">
              Solution to the issue
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Stage1 */}
          {/* {oldCultivation?.map((cultivation: any, index: any) => ( */}
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">
              {table.Value1.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value1.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value1.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value1.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value1.images.image1} />
              <img src={table.Value1.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value1.Solution}
            </td>
          </tr>

          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">2</td>
            <td className="border-r border-black font-thin">
              {table.Value2.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value2.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value2.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value2.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value2.images.image1} />
              <img
                src={table.Value2.images.image2}
                style={{ marginTop: "20px" }}
              />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value2.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">3</td>
            <td className="border-r border-black font-thin">
              {table.Value3.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value3.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value3.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value3.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value3.images.image1} />
              <img src={table.Value3.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value3.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">4</td>
            <td className="border-r border-black font-thin">
              {table.Value4.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value4.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value4.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value4.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value4.images.image1} />
              <img src={table.Value4.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value4.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">5</td>
            <td className="border-r border-black font-thin">
              {table.Value5.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value5.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value5.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value5.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value5.images.image1} />
              <img src={table.Value5.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value5.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">6</td>
            <td className="border-r border-black font-thin">
              {table.Value6.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value6.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value6.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value6.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value6.images.image1} />
              <img src={table.Value6.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value6.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">7</td>
            <td className="border-r border-black font-thin">
              {table.Value7.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value7.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value7.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value7.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value7.images.image1} />
              <img src={table.Value7.images.image2} />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value7.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">8</td>
            <td className="border-r border-black font-thin">
              {table.Value8.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value8.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value8.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value8.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value8.images.image1} />
              <img
                src={table.Value8.images.image2}
                style={{ marginTop: "20px" }}
              />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value8.Solution}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">9</td>
            <td className="border-r border-black font-thin">
              {table.Value9.name_pest}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value9.scientificName}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value9.characteristic}
            </td>
            <td className="border-r border-black font-thin">
              {table.Value9.Notable_Symptoms}
            </td>
            <td className="border-r border-black font-thin">
              <img src={table.Value9.images.image1} />
              <img
                src={table.Value9.images.image2}
                style={{ marginTop: "20px" }}
              />
            </td>
            <td className="border-r border-black font-thin">
              {table.Value9.Solution}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </section>
  );
};

export default PestManagement;
