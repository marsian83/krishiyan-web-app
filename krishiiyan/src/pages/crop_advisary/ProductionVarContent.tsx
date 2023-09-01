import React, { useEffect, useState } from "react";

const ProductionVarContent = (props: any) => {
  const [data, setData] = useState<any>([]);
  console.log(props.crop.localName);
  useEffect(() => {
    // const getVarieties = async (varietyIds: []) => {
    //   varietyIds.map(async (id: string) => {
    //     const res = await fetch(
    //       process.env.REACT_APP_BACKEND_URL + "crop/variety/" + props.crop.localName ,
    //       {
    //         method: "GET",
    //       }
    //     );
    //     const data = await res.json();
    //     console.log(data.varities);
    //     setData((prevData: any) => [...prevData, data.varities]);
    //   });
    // };
    const getVarieties = async (name: String) => {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/crop/variety/" + name,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data.varieties);
      setData(data.varieties);
    };
    getVarieties(props.crop.localName);
  }, []);
  console.log(data, "it is data");
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
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              S.No
            </th>
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Name of the variety/hybrid
            </th>
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Product Condition
            </th>
            {/* <th className="border-r border-black py-[1.2%]">
              Average yield (Quintal/acre)
            </th> */}
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Area of adoption
            </th>
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Crop cycle
            </th>
            <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
              Speciality
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index} className="h-10 border-b border-black">
              <td className="border-r border-black font-thin">{index + 1}</td>
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.nameOfvariety}
              </td>
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.productCondition}
              </td>
              {/* <td className="border-r border-black font-thin">
                {item.Yield.length === 0 ? (
                  "0"
                ) : (
                  <>
                    {item.Yield.map((eachYield: any, yieldIndex: number) => (
                      <React.Fragment key={yieldIndex}>
                        {eachYield}
                      </React.Fragment>
                    ))}
                  </>
                )}
              </td> */}
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.areaOfadadoption}
              </td>
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.cropCycle}
              </td>
              <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                {item.salientFeatures}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
    </>
  );
};

export default ProductionVarContent;
