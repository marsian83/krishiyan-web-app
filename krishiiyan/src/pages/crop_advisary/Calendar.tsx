import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import HorizontalNonLinearStepper from "../../Components/themes/Stepper";

const Calendar = () => {
  const [crops, setCrops] = useState<any>();
  const [type, setType] = useState("");
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");

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
    <>
      <Header title="Crop Advisary" subtitle="Calendar" />
      <section className="p-[1%]">
        <div className="grid grid-cols-[30%_30%_30%_10%] m">
          <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
            <label className="text-[#13490A] text-center">Type</label>
            <input
              placeholder="Cereal"
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            />
          </div>
          <div className="font-extrabold grid grid-cols-[30%_50%_20%] items-center">
            <label className="text-[#13490A] text-center">Crop</label>
            <input
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
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            />
          </div>
        </div>
        <div className="my-10">
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
            .map((obj: any) => (
              <>
                <h2 className="text-[#13490A] font-extrabold mb-3 text-center">
                  {obj?.localName}
                </h2>
                <HorizontalNonLinearStepper cropDetails={obj} />
              </>
            ))}
        </div>
      </section>
    </>
  );
};

export default Calendar;
