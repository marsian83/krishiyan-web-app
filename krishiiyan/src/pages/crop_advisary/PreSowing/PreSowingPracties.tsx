import React, { useState } from "react";
import SeedTable from "./seedTable";
import "../ProductReq.css";
const ProductionReqContent = (props: any) => {
  const [land, setLand] = useState(true);
  const [seedTab, setSeedTab] = useState(false);
  const [interculteral, setinterculteral] = useState(false);
  const [soil, setSoil] = useState(false);

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
  let Col: any = 2;
  return (
    <section>
      <div className="flex rounded-md mb-1 gap-2 btn">
        <button
          onClick={onClickLand}
          className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
        >
          Land Prepation
        </button>
        <button
          onClick={onClickSeed}
          className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
        >
          Seed treatment
        </button>
        <button
          onClick={onClickInterculteral}
          className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
        >
          Interculteral operation
        </button>
        <button
          onClick={onClickSoiltab}
          className="bg-[#05AB2A] text-[#F3FFF1] rounded-md h-[4.5vh] w-[6vw] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-sm"
        >
          Soil condition
        </button>
      </div>
      <br />

      {land ? (
        <div>
          <span className="font-extrabold mr-[4%]">Method of Prepation</span>
          <br /> Maize can be grown successfully in variety of soils ranging
          from loamy sand to clay loam.
        </div>
      ) : null}

      {seedTab ? (
        <>
          <SeedTable />
        </>
      ) : (
        <></>
      )}

      {interculteral ? (
        <div>
          <span className="font-extrabold mr-[4%]">
            Method of interculteral
          </span>
          <br /> Maize can be grown successfully in variety of soils ranging
          from loamy sand to clay loam.
        </div>
      ) : null}

      {soil ? (
        <div>
          <span className="font-extrabold mr-[4%]">Method of soil</span>
          <br /> Maize can be grown successfully in variety of soils ranging
          from loamy sand to clay loam.
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
