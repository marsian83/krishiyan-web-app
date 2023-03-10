import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import Fertilizer from "../../Components/layouts/Calculator(CropAdvisory)/Fertilizer";
import Fungicide from "../../Components/layouts/Calculator(CropAdvisory)/Fungicide";
import Herbicide from "../../Components/layouts/Calculator(CropAdvisory)/Herbicide";
import Pesticide from "../../Components/layouts/Calculator(CropAdvisory)/Pesticide";
import Yield from "../../Components/layouts/Calculator(CropAdvisory)/Yield";

const FertiCal = () => {
  const [crops, setCrops] = useState<any>();
  const [type, setType] = useState("");
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");

  const [fertilizerTab, setFertilizerTab] = useState(true);
  const [pesticideTab, setPesticideTab] = useState(false);
  const [herbicideTab, setHerbicideTab] = useState(false);
  const [fungicideTab, setFungicideTab] = useState(false);
  const [yieldTab, setYieldTab] = useState(false);

  const onClickFertilizer = () => {
    setFertilizerTab(true);
    setPesticideTab(false);
    setHerbicideTab(false);
    setFungicideTab(false);
    setYieldTab(false);
  };

  const onClickPesticide = () => {
    setFertilizerTab(false);
    setPesticideTab(true);
    setHerbicideTab(false);
    setFungicideTab(false);
    setYieldTab(false);
  };

  const onClickHerbicide = () => {
    setFertilizerTab(false);
    setPesticideTab(false);
    setHerbicideTab(true);
    setFungicideTab(false);
    setYieldTab(false);
  };

  const onClickFungicide = () => {
    setFertilizerTab(false);
    setPesticideTab(false);
    setHerbicideTab(false);
    setFungicideTab(true);
    setYieldTab(false);
  };

  const onClickYieldTab = () => {
    setFertilizerTab(false);
    setPesticideTab(false);
    setHerbicideTab(false);
    setFungicideTab(false);
    setYieldTab(true);
  };

  const getCrops = async () => {
    const [err, res] = await Api.getCrops();

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      setCrops(res?.data);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getCrops();
    };
    init();
  }, []);

  return (
    <div>
      <Header title="Crop Advisary" subtitle="Ferti Cal" />
      <section className="p-5">
        <div className="grid grid-cols-[30%_30%_30%_10%]">
          {/* <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
            <label className="text-[#13490A] text-center">Type</label>
            <input
              placeholder="Cereal"
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            />
          </div> */}
          <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
            <label className="text-[#13490A] text-center">Crop</label>
            <input
              placeholder="Crop"
              onChange={(e: any) => setCrop(e.target.value)}
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            />
          </div>
          {/* <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
            <label className="text-[#13490A] text-center">Variety</label>
            <input
              placeholder="Variety"
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            />
          </div> */}
        </div>
        {crops
          ?.filter((val: any) => {
            if (crop === "") {
              return;
            } else if (
              val?.localName?.toLowerCase().includes(crop.toLowerCase())
            ) {
              return val;
            }
          })
          ?.map((obj: any) => (
            <>
              <div className="grid grid-cols-[12%_12%_12%_12%_12%] gap-[6%] mx-[10%] mt-6 mb-9">
                <button
                  onClick={onClickFertilizer}
                  className="bg-[#526D4E] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8"
                >
                  Fertilizer
                </button>
                <button
                  onClick={onClickPesticide}
                  className="bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8"
                >
                  Pesticide
                </button>
                <button
                  onClick={onClickHerbicide}
                  className="bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8"
                >
                  Herbicide
                </button>
                <button
                  onClick={onClickFungicide}
                  className="bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8"
                >
                  Fungicide
                </button>
                <button
                  onClick={onClickYieldTab}
                  className="bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8"
                >
                  Yield
                </button>
              </div>
              {/* Tabs */}
              {fertilizerTab ? <Fertilizer crop={obj} /> : <></>}
              {pesticideTab ? <Pesticide /> : <></>}
              {herbicideTab ? <Herbicide /> : <></>}
              {fungicideTab ? <Fungicide /> : <></>}
              {yieldTab ? <Yield /> : <></>}
            </>
          ))}
      </section>
    </div>
  );
};

export default FertiCal;
