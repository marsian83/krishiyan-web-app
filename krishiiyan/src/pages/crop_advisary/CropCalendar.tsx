import React, { useEffect, useState } from "react";
import Header from "../../Components/layouts/Header";
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


const CropCalendar = () => {
  const [crops, setCrops] = useState<any>();
  const [type, setType] = useState("");
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");
  const [dateOfSowing, setDateOfSowing] = useState("");
  const [plantationType, setPlantationType] = useState("");


  const onChangePlantationType = (e: any, value: any) => {
    setPlantationType(value.value)
  };
  
  const onChangedateOfSowing = (e: any) => {
    let date = moment(e.target.value).toISOString(); //ISO 8601 format
    setDateOfSowing(date);
    console.log(e.target.value)
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
      <Header title="Crop Advisary" subtitle="Crop Calendar" />
      <section className="p-[1%]">
        <div className="grid grid-cols-[50%_40%]">
          <div className="font-extrabold grid grid-cols-[40%_40%] items-center">
            <label className="text-[#13490A]">Select the Crop</label>
            {/* <input
              placeholder="Crop"
              onChange={(e: any) => setCrop(e.target.value)}
              type="text"
              className="bg-[#F3FFF1] shadow-[4px_4px_3px_rgba(0,0,0,0.25)] rounded-md text-center h-8"
            /> */}
            <Autocomplete
              onChange={onChangePlantationType}
              id="plantation-select"
              // sx={{ bgcolor: '#F3FFF1', boxShadow: '4px 4px 3px rgba(0,0,0,0.25)', borderRadius: '6px', textAlign: 'center', height: '2rem' }}
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
          <div className="font-extrabold grid grid-cols-[50%_50%] items-center">
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
    </div>
  );
};

export default CropCalendar;
