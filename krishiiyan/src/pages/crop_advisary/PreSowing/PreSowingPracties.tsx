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
          <br /> 
          {
            data.map((option :any, index:any)=>{
              return (
                <li>
                  {option.Intercultural_Operations}
                </li>
              )  
            })
          }
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
    </section>
  );
};

export default ProductionReqContent;
