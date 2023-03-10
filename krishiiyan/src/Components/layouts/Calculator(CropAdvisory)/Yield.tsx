import React, { useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { getCrops, getvariteyByCropId } from "../../../Services/Api";
import YieldCal from "../../../pages/crop_advisary/YieldCal";
import moment from "moment";

const Yield = (props: any) => {
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [allPests, setAllPests] = useState<any[]>([]);
  const [allPesticides, setAllPesticides] = useState<any[]>([]);
  const [crop, setCrop] = useState("");
  const [dateOfSowing, setDateOfSowing] = useState<any>("");

  const [problem, setProblem] = useState("");

  useEffect(() => {
    const setCrops = async () => {
      const crops: any[] = await getCrops();
      setAllCropes(crops[1].data);
    };
    setCrops();
  }, []);

  useEffect(() => {
    const setPests = async (crop: string) => {
      const pests: any[] = await getvariteyByCropId(crop);
      setAllPests(pests[1].data);
    };
    if (!!crop) setPests(crop);
    else setAllPests([]);
  }, [crop]);

  const [localsName, setLocalsName] = useState("");

  const [_product, setProduct] = useState("");
  const [crops, setCrops] = useState([]);
  const onChangePlantationType = async (e: any, value: any) => {
    console.log(value, "value");
    setLocalsName(value.localName);
  };

  console.log(allCrops, crop);

  const onChangedateOfSowing = (e: any) => {
    let date = moment(e.target.value).toDate(); //ISO 8601 format
    console.log(date, "UNIQUE");
    setDateOfSowing(date);
  };
  return (
    <section className="p-5">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Crop"
          sx={{
            width: "200px",
            marginLeft: "20px",
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

        <TextField
          id="outlined-select-currency"
          select
          label="Select Variety"
          sx={{ width: "300px", marginLeft: "20px" }}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        >
          {allPests.map((pest) => (
            <MenuItem key={pest._id} value={pest._id}>
              {pest.nameOfvariety}
            </MenuItem>
          ))}
        </TextField>

        <div
          className="font-extrabold grid grid-cols-[50%_50%] items-center"
          style={{ width: "370px" }}
        >
          <label className="text-[#13490A] text-center">Date of Sowing</label>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[10rem] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={onChangedateOfSowing}
              id="inline-password"
              type="date"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <YieldCal
        props={props.obj}
        product={_product}
        crop={crop}
        allCrops={allCrops}
        allPesticides={allPesticides}
        problem={problem}
        allPests={allPests}
        dateOfSowing={dateOfSowing}
      />
    </section>
  );
};

export default Yield;
