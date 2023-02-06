import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import ProductionVarContent from "./ProductionVarContent";
import ProductionReqContent from "./ProductionReqContent";
import Stepper from "../../Components/themes/Stepper";
const Production = () => {
  let Col: any = 2;
  let Col2: any = 5;
  let Row: any = 6;
  const [crops, setCrops] = useState<any>();
  const [type, setType] = useState("");
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");

  const [general, setGeneral] = useState(true);
  const [varietyTab, setVarietyTab] = useState(false);
  const [requirement, setRequirement] = useState(false);

  const onClickGeneral = () => {
    setGeneral(true);
    setVarietyTab(false);
    setRequirement(false);
  };
  const onClickvarietyTab = () => {
    setGeneral(false);
    setVarietyTab(true);
    setRequirement(false);
  };
  const onClickrequirement = () => {
    setGeneral(false);
    setVarietyTab(false);
    setRequirement(true);
  };

  const getCrops = async () => {
    const [err, res] = await Api.getCrops();

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      // ;
      
      setCrops(res?.data);
    }
    // console.log(res?.data?.data,"crops....");
  };

  useEffect(() => {
    const init = async () => {
      await getCrops();
    };
    init();
  }, []);

  return (
    <>
      <Header title="Crop Advisary" subtitle="Production" />
      <section className="p-5 grid grid-cols-[30%_30%_30%_10%]">
        <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
          <label className="text-[#13490A] text-center">Type</label>
          <input
            placeholder="Cereal"
            // defaultValue={type}
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
          />
        </div>
        <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
          <label className="text-[#13490A] text-center">Crop</label>
          <input
            // defaultValue={crop}
            placeholder="Crop"
            onChange={(e: any) => setCrop(e.target.value)}
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
          />
        </div>
        <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
          <label className="text-[#13490A] text-center">Variety</label>
          <input
            placeholder="Variety"
            // defaultValue={variety}
            type="text"
            className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
          />
        </div>
      </section>
      {crops?.length > 0 &&
        crops
          ?.filter((val: any) => {
            if (crop === "") {
              return
            } else if (
              val?.localName?.toLowerCase().includes(crop.toLowerCase())
            ) {
              return val;
            }
          })
          .map((obj: any) => (
            <>
              <section className="pl-3 pt-3">
                <h2 className="mx-[30%] text-[#13490A] font-extrabold mb-3">
                  {obj?.localName}
                </h2>
                <div className="flex rounded-md mb-1 gap-2">
              <button
                onClick={onClickGeneral}
                className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
              >
                General
              </button>
              <button
                onClick={onClickvarietyTab}
                className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
              >
                Variety
              </button>
              <button
                onClick={onClickrequirement}
                className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
              >
                Requirement
              </button>
            </div>
                <div className="p-4">
                  {general ? (
                    <>
                      <table className="table-auto border border-black border-collapse">
                        <tr className="text-[#13490A] font-normal text-sm w-auto">
                          <td
                            className="border border-black w-[20%]"
                            rowSpan={Row}
                          >
                            <img
                              src="Images/Maize01.png"
                              alt="maize"
                              className=""
                            />
                          </td>
                          <td className="border border-black w-[28%]">
                            <span className="text-[#13490A] font-bold text-sm">
                              Common Name:
                            </span>
                            {obj?.localName}{" "}
                          </td>
                          <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              Climate:
                            </span>{" "}
                            {obj.climate.map((i: any) => (
                              <>{i} , </>
                            ))}
                          </td>
                          <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              Soil:
                            </span>{" "}
                            {obj?.soil}
                          </td>
                        </tr>
                        <tr className="text-[#13490A] font-normal text-sm">
                          <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              Season:
                            </span>{" "}
                            {obj.season.map((i: any) => (
                              <>{i} , </>
                            ))}
                          </td>
                          <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              Temperature:
                            </span>{" "}
                            {obj?.temperature} C
                          </td>
                          <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              pH:
                            </span>{" "}
                            {obj?.ph}
                          </td>
                        </tr>
                        <tr className="text-[#13490A] font-normal text-sm">
                          <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              States:
                            </span>{" "}
                            {obj.states.map((i: any) => (
                              <>{i} , </>
                            ))}
                          </td>
                          <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              Rainfall:
                            </span>{" "}
                          </td>
                        </tr>
                        <tr className="text-[#13490A] font-normal text-sm border-collapse h-10">
                          <td className="border border-black">
                            <span className="text-[#13490A] font-bold text-sm">
                              Type:
                            </span>{" "}
                            {obj.cropTypes.map((i: any) => (
                              <>{i} , </>
                            ))}
                          </td>
                          <td className="border border-black" colSpan={Col}>
                            <span className="text-[#13490A] font-bold text-sm">
                              Varieties:
                            </span>{" "}
                            {/* {obj.varieties.map((i: any) => (
                              <>{i} , </>
                            ))} */}
                          </td>
                        </tr>
                     
                        <tr className="h-10 border border-black">
                          <th
                            className="border border-black text-left"
                            colSpan={Col2}
                          >
                            Key Market Details
                          </th>
                        </tr>
                      </table>
                      <table className="border-collapse">
                        <td className="text-sm  border border- p-4">
                          {obj?.description}
                        </td>

                      </table>
                    </>
                  ) : (
                    <></>
                  )}

                  {varietyTab ? (
                    <>
                      <ProductionVarContent />
                    </>
                  ) : (
                    <></>
                  )}

                  {requirement ? (
                    <>
                      <ProductionReqContent crop={obj} />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </section>
              
            </>
          ))}
    </>
  );
};

export default Production;
