import { MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCrops,getWeedsByCropId,getHerbicidesByWeedId } from "../../../Services/Api";
import HerbicideCal from "./HerbicideCal";

const Herbicide = (props: any) => {
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [allWeed, setAllWeed] = useState<any[]>([]);
  const [allHerbicides, setAllHerbicides] = useState<any[]>([]);
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
    const setWeeds = async (crop: string) => {
      const weeds: any[] = await getWeedsByCropId (crop);
      setAllWeed(weeds[1].data);
    };
    if (!!crop) setWeeds(crop);
    else setAllWeed([]);
  }, [crop]);

  useEffect(() => {
    const setWeeds = async (problem: string) => {
      const herbicides: any[] = await getHerbicidesByWeedId(problem);
      setAllHerbicides(herbicides[1].data);
    };
    if (!!problem) setWeeds(problem);
    else setAllHerbicides([]);
  }, [problem]);

  const [localsName, setLocalsName] = useState("");
  const onChangePlantationType = async (e: any, value: any) => {
    console.log(value, "value");
    setLocalsName(value.localName);
  };

  const [_product, setProduct] = useState("");
  
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
          {allWeed.map((weed) => (
            <MenuItem key={weed._id} value={weed._id}>
              {weed.name}
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
          
          {allHerbicides.map((herbicide) => (
            <MenuItem key={herbicide._id} value={herbicide._id}>
              {herbicide.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <HerbicideCal
      props={props.obj}
      product={_product}
      allHerbicides={allHerbicides}
      problem={problem}
      allWeed={allWeed}
      />
    </section>
  );
};

export default Herbicide;
