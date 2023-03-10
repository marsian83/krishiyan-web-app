import { MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InputCal from "./InputCal";
import FungicideCal from './FungicideCal';
import {getDiseaseByCropId,getCrops,getFungicideByDiseaseId} from '../../../Services/Api'

const Fungicide = (props :any) => {
  
  const [crop, setCrop] = useState("");
  const [problem, setProblem] = useState("");
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [allDisease, setAllDisease] = useState<any[]>([]);
  const [allFungicide, setAllFungicide] = useState<any[]>([]);

  
  useEffect(() => {
    const setCrops = async () => {
      const crops: any[] = await getCrops();
      setAllCropes(crops[1].data);
    };
    setCrops();
  }, []);

  useEffect(() => {
    const setPests = async (crop: string) => {
      const disease: any[] = await getDiseaseByCropId(crop);
      setAllDisease(disease[1].data);
    };
    if (!!crop) setPests(crop);
    else setAllDisease([]);
  }, [crop]);

  useEffect(() => {
    const setPests = async (problem: string) => {
      const fungicides: any[] = await getFungicideByDiseaseId(problem);
      setAllFungicide(fungicides[1].data);
    };
    if (!!problem) setPests(problem);
    else setAllFungicide([]);
  }, [problem]);
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
          {allDisease.map((disease) => (
            <MenuItem key={disease._id} value={disease._id}>
              {disease.name}
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
          {allFungicide.map((fungicide) => (
            <MenuItem key={fungicide._id} value={fungicide._id}>
              {fungicide.name}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <FungicideCal
      props={props.obj}
      product={_product}
      allFungicide={allFungicide}
      allDisease={allDisease}
      problem={problem}
      />
        
        
      </section>
  )
}

export default Fungicide