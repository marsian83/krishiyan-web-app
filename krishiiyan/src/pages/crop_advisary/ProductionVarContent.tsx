import React, { useState } from "react";

const ProductionVarContent = (props: any) => {
  console.log(props, "it is varity");
  const [data, setData] = useState<any>(props.crop.varietyInformation);
  // console.log(props);
  console.log(props)

  // setData(props?.crop.varietyInformation.value.value1);

  // console.log(data, "it is data");
  return (
    <>
      {/* <table className="border border-black border-collapse h-[60vh] w-[60%]">
        <tr className="text-[#13490A] font-bold text-base text-center">
          <th className="border border-black border-collapse">S.No</th>
          <th className="border border-black border-collapse">Name</th>
          <th className="border border-black border-collapse">
            Area of Adaption
          </th>
          <th className="border border-black border-collapse">Av.Yield t/ha</th>
          <th className="border border-black border-collapse">Type</th>
          <th className="border border-black border-collapse">Speciality</th>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">01</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">02</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">03</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">04</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">05</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">06</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">07</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">08</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
        <tr className="text-[#13490A] font-bold text-base text-center">
          <td className="w-fit border border-black border-collapse">09</td>
          <td className="w-fit border border-black border-collapse">
            Shalimar sweet Corn-1
          </td>
          <td className="w-fit border border-black border-collapse">
            SKUAST,kashmir
          </td>
          <td className="w-fit border border-black border-collapse">3220(E)</td>
          <td className="w-fit border border-black border-collapse">Sweet</td>
          <td className="w-fit border border-black border-collapse">J&K</td>
        </tr>
      </table> */}

      <table className="table-auto border-collapse border border-black font-bold text-base w-[90%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            <th className="border-r border-black py-[1.2%]">S.No</th>
            <th className="border-r border-black py-[1.2%]">
              Name of the variety/hybrid
            </th>
            <th className="border-r border-black py-[1.2%]">
              Area of Adaptation (Districts)
            </th>
            <th className="border-r border-black py-[1.2%]">
              Average yield (Quintal/acre)
            </th>
            <th className="border-r border-black py-[1.2%]">Type of variety</th>
            <th className="border-r border-black py-[1.2%]">Speciality</th>
          </tr>
        </thead>
        <tbody>
          {

          }
          {/* <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">1</td>
            <td className="border-r border-black font-thin">
              {data.value.value1.Name}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value1.Area_Adaptation}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value1.Average_yield}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value1.Type_variety}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value1.Speciality}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">2</td>
            <td className="border-r border-black font-thin">
              {data.value.value2.Name}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value2.Area_Adaptation}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value2.Average_yield}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value2.Type_variety}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value2.Speciality}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">3</td>
            <td className="border-r border-black font-thin">
              {data.value.value3.Name}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value3.Area_Adaptation}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value3.Average_yield}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value3.Type_variety}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value3.Speciality}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">4</td>
            <td className="border-r border-black font-thin">
              {data.value.value4.Name}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value4.Area_Adaptation}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value4.Average_yield}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value4.Type_variety}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value4.Speciality}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">5</td>
            <td className="border-r border-black font-thin">
              {data.value.value5.Name}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value5.Area_Adaptation}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value5.Average_yield}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value5.Type_variety}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value5.Speciality}
            </td>
          </tr>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">6</td>
            <td className="border-r border-black font-thin">
              {data.value.value6.Name}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value6.Area_Adaptation}
            </td>

            <td className="border-r border-black font-thin">
              {data.value.value6.Average_yield}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value6.Type_variety}
            </td>
            <td className="border-r border-black font-thin">
              {data.value.value6.Speciality}
            </td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default ProductionVarContent;
