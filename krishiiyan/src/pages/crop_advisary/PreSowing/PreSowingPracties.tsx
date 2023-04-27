import React, { useState } from "react";
import SeedTable from "./seedTable";
import "../ProductReq.css";
const ProductionReqContent = (props: any) => {
  const [land, setLand] = useState(true);
  const [seedTab, setSeedTab] = useState(false);
  const [interculteral, setinterculteral] = useState(false);
  const [soil, setSoil] = useState(false);
  const [openTab, setOpenTab] = useState("Land Prepation");

  const [data, setData] = useState<any>(props.crop.presowingPractices);

  const onClickLand = () => {
    setLand(true);
    setSeedTab(false);
    setinterculteral(false);
    setSoil(false);
  };
  const onClickSeed = () => {
    setLand(false);
    setSeedTab(true);
    setinterculteral(false);
    setSoil(false);
  };
  const onClickInterculteral = () => {
    setLand(false);
    setSeedTab(false);
    setinterculteral(true);
    setSoil(false);
  };
  const onClickSoiltab = () => {
    setLand(false);
    setSeedTab(false);
    setinterculteral(false);
    setSoil(true);
  };

  console.log(props?.crop?.presowingPractices?.Land_Preparation, "it is props");
  let Col: any = 2;
  return (
    <section>
      <div className="flex rounded-md mb-1 gap-2 btn">
        <button
          onClick={() => {
            onClickLand();
            setOpenTab("Land Prepation");
          }}
          className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
            // openTab === "Land Prepation" ? "bg-[#526D4E]" : "bg-[#05AB2A]"
            openTab === "Land Prepation" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
          }`}
        >
          Land Prepation
        </button>
        <button
          onClick={() => {
            onClickSeed();
            setOpenTab("Seed treatment");
          }}
          className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
            // openTab === "Seed treatment" ? "bg-[#526D4E]" : "bg-[#05AB2A]"
            openTab === "Seed treatment" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
          }`}
        >
          Seed Treatment
        </button>
        <button
          onClick={() => {
            onClickInterculteral();
            setOpenTab("Interculteral operation");
          }}
          className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
            // openTab === "Interculteral operation"? "bg-[#526D4E]": "bg-[#05AB2A]"
            openTab === "Interculteral operation"
              ? "bg-[#05AB2A]"
              : "bg-[#526D4E]"
          }`}
        >
          Interculteral Operation
        </button>
        <button
          onClick={() => {
            onClickSoiltab();
            setOpenTab("Soil condition");
          }}
          className={` text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] w-[6vw] rounded text-sm font-thin ${
            // openTab === "Soil condition" ? "bg-[#526D4E]" : "bg-[#05AB2A]"
            openTab === "Soil condition" ? "bg-[#05AB2A]" : "bg-[#526D4E]"
          }`}
        >
          Soil Condition
        </button>
      </div>
      <br />

      {land ? (
        <div>
          <span className="font-extrabold mr-[4%]">Land Preparation</span>
          <br />
          {data?.Land_Preparation}
        </div>
      ) : null}

      {seedTab ? (
        <>
          <SeedTable data={data} />
        </>
      ) : (
        <></>
      )}

      {interculteral ? (
        <div>
          <span className="font-extrabold mr-[4%]">
            Pre-sowing operations (if any) (Pre-emergence weeding,
            thinning,.....)
          </span>
          <br /> {data?.Pre_sowing}
        </div>
      ) : null}

      {soil ? (
        <div>
          <span className="font-extrabold mr-[4%]">
            Soil Conditions (Wet, irrigated, dry)
          </span>
          <br /> {data.Soil_Conditions}
        </div>
      ) : null}

      {/* <table className="table-auto border border-black border-collapse my-5 mx-[0.8%]">
        <tr className="h-[6vh] text-center bg-[#C6EDC0]">
          <th
            className="text-[#13490A] font-extrabold text-base w-full"
            colSpan={Col}
          >
            Soil
          </th>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base w-[50%] px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Texture:</span> Maize can
            be grown successfully in variety of soils ranging from loamy sand to
            clay loam.{" "}
          </td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Nitrogen Level:</span>
            {props?.crop?.nitrogen}{" "}
          </td>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Structure:</span> Fine
            porous.
          </td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Phosporus Level:</span>
            {props?.crop?.phosporous}%
          </td>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">
              Water holding Capacity:
            </span>{" "}
            Good water holding Characteristics(150-200mm)
          </td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Pottasium Level:</span>
            {props?.crop?.potash}%
          </td>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Soil Moisture:</span>{" "}
            {props?.crop?.zinc}%
          </td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Essential Nutrients:</span>{" "}
          </td>
        </tr>
        <tr className="h-[6vh] bg-[#C6EDC0]">
          <th className="text-[#13490A] font-extrabold text-base" colSpan={Col}>
            Climate
          </th>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Type:</span>
            {props?.crop?.cropTypes.map((i: any) => (
              <>{i} , </>
            ))}
          </td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]"></td>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]">
            <span className="font-extrabold mr-[4%]">Temperature:</span>{" "}
            {props?.crop?.temperature}C.
          </td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]"></td>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]"></td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]"></td>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]"></td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]"></td>
        </tr>
        <tr className="h-[6vh]">
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]"></td>
          <td className="border border-black border-collapse text-[#13490A] font-normal text-base px-[0.5%]"></td>
        </tr>
      </table> */}
    </section>
  );
};

export default ProductionReqContent;
