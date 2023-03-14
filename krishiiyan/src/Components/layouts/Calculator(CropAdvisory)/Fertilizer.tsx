import React, { useState, useEffect } from "react";
import InputCal from "./InputCal";
import * as Api from "../../../Services/Api";
import { toast } from "react-toastify";
import { getCrops } from "../../../Services/Api";
import { MenuItem, TextField } from "@mui/material";

const Fertilizer = (props: any) => {
  const [crop, setCrop] = useState("");
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [fertilizer, setFertilizer] = useState<any>();
  const [area, setArea] = useState("");

  const onClickCalculate = async () => {
    if (area !== "" && area !== undefined) {
      const [err, res] = await Api.fertilizerCalculator(crop, area);

      if (err) {
        toast.error(err?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      if (res) {
        setFertilizer(res.data);
      }
    }
  };
  useEffect(() => {
    const setCrops = async () => {
      const crops: any[] = await getCrops();
      setAllCropes(crops[1].data);
    };
    setCrops();
  }, []);

  return (
    <>
      <section className="p-5">
        <TextField
          id="outlined-select-currency"
          select
          label="Select Crop"
          sx={{
            width: "200px",
            display: "flex",
            justifyContent: "start",
          }}
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        >
          {allCrops.map((crop) => (
            <MenuItem key={crop._id} value={crop._id}>
              {crop.localName}
            </MenuItem>
          ))}
        </TextField>
        <section className="p-5">
          <div className="font-extrabold grid grid-cols-[25%_40%_15%_25%] gap-[2%] mx-[20%] mb-[3%] items-center">
            <label className="text-center">Area</label>
            <input
              type="text"
              placeholder="hectare"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
              onChange={(e: any) => setArea(e.target.value)}
            />
            <button
              onClick={onClickCalculate}
              className="bg-[#05AB2A] text-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] font-light rounded-md h-8 items-center"
            >
              Calculate
            </button>
          </div>
        </section>

        {fertilizer !== "" && fertilizer !== undefined ? (
          <table className="table-auto border-collapse border border-black font-bold text-base w-[80%] mx-auto">
            <thead className="border-b border-black">
              <tr className="text-center">
                <th className="border-r border-black py-[1.2%]">Crop Stage</th>
                <th className="border-r border-black py-[1.2%]">Nutrients</th>
                <th className="border-r border-black py-[1.2%]">Quantity</th>
                <th className="border-r border-black py-[1.2%]">Products</th>
              </tr>
            </thead>
            <tbody>
              {/* Stage1 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">
                  {fertilizer?.STAGE1?.cropStage}
                </td>
                <td className="border-r border-black">
                  {fertilizer?.STAGE1?.nutrients.map((val: any) => (
                    <>
                      {val} <br />
                    </>
                  ))}
                </td>
                <td className="border-r border-black">
                  {fertilizer?.STAGE1?.fertilizer?.nitrogen_prod_recommended?.quantity.toFixed(
                    0
                  )}{" "}
                  Kg <br />
                  {fertilizer?.STAGE1?.fertilizer?.phosphorous_prod_recommended?.quantity.toFixed(
                    0
                  )}{" "}
                  Kg <br />
                  {fertilizer?.STAGE1?.fertilizer?.pottasium_prod_recommended?.quantity.toFixed(
                    0
                  )}{" "}
                  Kg <br />
                  {fertilizer?.STAGE1?.fertilizer?.zinc_prod_recommended?.quantity.toFixed(
                    0
                  )}{" "}
                  Kg <br />
                </td>

                <td className="border-r border-black">
                  {
                    fertilizer?.STAGE1?.fertilizer?.nitrogen_prod_recommended
                      ?.name
                  }{" "}
                  <br />
                  {
                    fertilizer?.STAGE1?.fertilizer?.phosphorous_prod_recommended
                      ?.name
                  }{" "}
                  <br />
                  {
                    fertilizer?.STAGE1?.fertilizer?.pottasium_prod_recommended
                      ?.name
                  }{" "}
                  <br />
                  {
                    fertilizer?.STAGE1?.fertilizer?.zinc_prod_recommended?.name
                  }{" "}
                  <br />
                </td>
              </tr>

              {/* Stage2 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">
                  {fertilizer?.STAGE2?.cropStage}
                </td>

                <td className="border-r border-black">
                  {fertilizer?.STAGE2?.nutrients.map((val: any) => (
                    <>
                      {val} <br />
                    </>
                  ))}
                </td>

                <td className="border-r border-black">
                  {fertilizer?.STAGE2?.fertilizer?.quantity.toFixed(0)} Kg
                </td>

                <td className="border-r border-black">
                  {fertilizer?.STAGE2?.fertilizer?.name}
                </td>
              </tr>

              {/* Stage3 */}
              <tr className="h-10 border-b border-black">
                <td className="border-r border-black">
                  {fertilizer?.STAGE3?.cropStage}
                </td>
                <td className="border-r border-black">
                  {fertilizer?.STAGE3?.nutrients.map((val: any) => (
                    <>
                      {val} <br />
                    </>
                  ))}
                </td>

                <td className="border-r border-black">
                  {fertilizer?.STAGE3?.fertilizer?.quantity.toFixed(0)} Kg
                </td>

                <td className="border-r border-black">
                  {fertilizer?.STAGE3?.fertilizer?.name}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Fertilizer;
