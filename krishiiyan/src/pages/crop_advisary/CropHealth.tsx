import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
import TableData from "./Tabledata";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import HorizontalNonLinearStepper from "../../Components/themes/Stepper";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import moment from "moment";


const PlantationOptions = [
  {
    value: "Creals",
  },
  {
    value: "Pulses",
  },
  {
    value: "Maize",
  },
];

const IssuesOptions = [
  {
    value: "Pest",
  },
  {
    value: "Diseases",
  },
  {
    value: "Nutrient Deficiency",
  },
  {
    value: "Weeds",
  },
  {
    value: "Others",
  },
];

const CropHealth = () => {
  const [crops, setCrops] = useState<any>();
  const [type, setType] = useState("");
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");
  const [plantationType, setPlantationType] = useState("");


  const onChangePlantationType = (e: any, value: any) => {
    setPlantationType(value.value)
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
      <Header title="Crop Advisary" subtitle="Crop Health" />
      <section className="p-[1%] grid gap-y-2">
        <div className="grid grid-cols-[50%_50%] ">
          <div className="font-extrabold grid grid-cols-[50%_40%] items-center">
            <label className="text-[#13490A] text-center">Select your Crop</label>
            <Autocomplete
              onChange={onChangePlantationType}
              id="plantation-select"
              sx={{ width: '100%' }}
              options={PlantationOptions}
              autoHighlight
              getOptionLabel={(option) => option.value}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose plantation type"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </div>
          <div className="font-extrabold ml-10 grid grid-cols-[30%_40%] items-center">
            <label className="text-[#13490A] text-center">Issues:</label>
            <Autocomplete
              onChange={onChangePlantationType}
              id="plantation-select"
              // sx={{ bgcolor: '#F3FFF1', boxShadow: '4px 4px 3px rgba(0,0,0,0.25)', borderRadius: '6px', textAlign: 'center', height: '2rem' }}
              options={IssuesOptions}
              autoHighlight
              getOptionLabel={(option) => option.value}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose issue type"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </div>
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
          .map((obj: any) => (
            <>
              <table className="table-fixed border-collapse border border-black font-bold text-base mx-auto">
                <thead className="border-b border-black">
                  <tr className="text-center">
                    <th className="border-r border-black py-[1.2%]">Name</th>
                    <th className="border-r border-black py-[1.2%]">Image</th>
                    <th className="border-r border-black py-[1.2%]">Description</th>
                    <th className="border-r border-black py-[1.2%]">Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    obj?.pestMgmt?.map((curr: any) => {
                      return (
                        <tr className="border-b border-black text-center">
                          <td className="border-r border-black">{curr.name}</td>
                          <td className="border-r border-black">
                            <div className="grid grid-cols-[50%_50%]">
                              <img src={curr?.image} alt="Image" className="h-full" />
                              {/* <img src={curr?.image} alt="image" className="h-full" /> */}
                            </div>
                          </td>
                          <td className="border-r border-black w-[35%]">{curr.description}</td>
                          <td className="border-r border-black flex flex-col justify-center items-center">
                            {/* {obj?.pestMgmt?.solution?.map((o:any) =>(
                        <>
                        <h6>{o?.name}</h6>
                        <h6>Fipronill</h6>
                        </>
                      ))} */}
                            <h6>Fipronill</h6>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </>
          ))}
      </section>
    </div>
  );
};

export default CropHealth;
