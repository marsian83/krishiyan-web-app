import { Textarea } from "@material-tailwind/react";
import { TextField } from "@material-ui/core";
import { Autocomplete, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Api from "../../Services/Api";
import { getCrops, getvariteyByCropId } from "../../Services/Api";

const CropHealth = () => {
  let col: any = 12;
  let row: any = 5;
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [crop, setCrop] = useState("");
  const [text, setText] = React.useState("");
  const onChangeCrop = (e: any) => {
    setCrop(e.target.value);
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
      <div className="w-full max-w-sm mt-10 mb-5 ml-80">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              // for="inline-password"
            >
              Crop
            </label>
          </div>
          <div className="md:w-2/3">
            <TextField
              id="outlined-select-currency"
              select
              label="Select Crop"
              style={{
                width: 260,
              }}
              value={crop}
              onChange={onChangeCrop}
            >
              {allCrops.map((crop) => (
                <MenuItem key={crop._id} value={crop._id}>
                  {crop.localName}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              // for="inline-password"
            >
              Category
            </label>
          </div>
          <div className="md:w-2/3">
            <Autocomplete
              //   onChange={onChangeFertilizer}
              id="plantation-select"
              sx={{ width: 260 }}
              options={[
                {
                  value: "Pest",
                },
                {
                  value: "Disease",
                },
                {
                  value: "Weed",
                },
                {
                  value: "Deficiency",
                },
              ]}
              autoHighlight
              getOptionLabel={(option) => option.value}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Category"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              // for="inline-password"
            >
              Description
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-24"
              //   onChange={onChangeArea}
              id="inline-password"
              //   type="text"
              placeholder="Description"
            />
          </div>
        </div>

        <button
          type="submit"
          //   onClick={onSubmitHandler}
          className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CropHealth;
