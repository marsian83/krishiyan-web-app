import React, { useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import {
  getCrops,
  getPesticidesByPestId,
  getPestsByCropId,
} from "../../../Services/Api";
import PesticideCal from "./PesticideCal";

const Pesticide = (props: any) => {
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [allPests, setAllPests] = useState<any[]>([]);
  const [allPesticides, setAllPesticides] = useState<any[]>([]);
  const [crop, setCrop] = useState("");
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
      const pests: any[] = await getPestsByCropId(crop);
      setAllPests(pests[1].data);
    };
    if (!!crop) setPests(crop);
    else setAllPests([]);
  }, [crop]);

  useEffect(() => {
    const setPests = async (problem: string) => {
      const pesticides: any[] = await getPesticidesByPestId(problem);
      setAllPesticides(pesticides[1].data);
    };
    if (!!problem) setPests(problem);
    else setAllPesticides([]);
  }, [problem]);

  const [localsName, setLocalsName] = useState("");

  const [_product, setProduct] = useState("");
  const [crops, setCrops] = useState([]);
  const onChangePlantationType = async (e: any, value: any) => {
    console.log(value, "value");
    setLocalsName(value.localName);
  };
  console.log(allCrops, crop);
  return (
    <section className="p-5">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Crop"
          sx={{ width: "200px", marginLeft: "20px" }}
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
          label="Select Problem"
          sx={{ width: "300px", marginLeft: "20px" }}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        >
          {allPests.map((pest) => (
            <MenuItem key={pest._id} value={pest._id}>
              {pest.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Product"
          sx={{ width: "300px", marginLeft: "20px" }}
          value={_product}
          onChange={(e) => setProduct(e.target.value)}
        >
          {allPesticides.map((pesticide) => (
            <MenuItem key={pesticide._id} value={pesticide._id}>
              {pesticide.name}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <PesticideCal
        props={props.obj}
        product={_product}
        allPesticides={allPesticides}
        problem={problem}
        allPests={allPests}
      />
    </section>
  );
};

export default Pesticide;
