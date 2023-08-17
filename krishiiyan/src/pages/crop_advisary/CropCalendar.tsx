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
  const [localsName, setLocalsName] = useState<any>();
  const [scientficCrop, setScientificCrop] = useState<any>("");
  const [dateOfSowing, setDateOfSowing] = useState<any>("");
  const [cropDetails, setCropDetails] = useState<any>();
  const [loading, setLoading] = useState(false);

  const onChangePlantationType = (e: any, value: any) => {
    setLocalsName(e.target.value);
    console.log(localsName);
  };

  const onChangedateOfSowing = (e: any) => {
    let date = e.target.value; //ISO 8601 forma
    console.log(date.toString());
    setDateOfSowing(date.toString());
    console.log(e.target.value);
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

  const getcropCalender = async (
    localName: any,
    scientficCrop: any,
    dateOfSowing: number | null = null
  ) => {
    if (localName || scientficCrop) {
      setLoading(true);
      const [err, res] = await Api.getCropsbyName(
        localName,
        scientficCrop,
        dateOfSowing
      );

      if (err) {
        console.log(err);
        toast.error(err.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      if (res) {
        console.log(res);
        if (res?.data === null) {
          toast.error("crop not found!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log(res, "Res");
        setCropDetails(res?.data);
      }

      setLoading(false);
    }
  };
  const onSubmit = async () => {
    // const res = await Api.(localsName,scientficCrop );
    const res = await getcropCalender(localsName, scientficCrop, dateOfSowing);
    // await getcropName();
  };

  useEffect(() => {
    const init = async () => {
      await getCrops();
    };
    init();
  }, []);

  const getCropStages = async () => {
    const data = await fetch(
      process.env.REACT_APP_BASE_URL +
        "/cropCalender/" +
        localsName +
        "/" +
        dateOfSowing,
      {
        method: "GET",
      }
    );
  };
  return (
    <div>
      <Header title="Crop Advisory" subtitle="Crop Calendar" />
      <section className="p-[1%]">
        {/* <div style={{width:"100%",height:"105px",backgroundColor:"red"}}>

        </div> */}

        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div
            className="font-extrabold grid grid-cols-[40%_40%] items-center"
            style={{ width: "550px" }}
          >
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
              options={crops}
              autoHighlight
              getOptionLabel={(crops) => crops?.localName}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Crop Name"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </div>
          <div
            className="font-extrabold grid grid-cols-[30%_20%] items-center"
            style={{ width: "550px" }}
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
          <div style={{ marginRight: "300px", marginTop: "7px" }}>
            {loading ? (
              <button
                style={{ marginLeft: "2px" }}
                type="submit"
                disabled={loading}
                className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-full rounded text-sm font-thin"
              >
                {/* <Loader /> */}
                Fetching Info...
              </button>
            ) : (
              <button
                style={{ padding: "9px" }}
                type="submit"
                onClick={onSubmit}
                className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
              >
                ENTER
              </button>
            )}
          </div>
        </div>

        <div className="my-10">
          {cropDetails
            // ?.filter((val: any) => {
            //   if (crop === "") {
            //     return;
            //   } else if (
            //     val?.localName?.toLowerCase().includes(crop.toLowerCase())
            //   ) {
            //     return val;
            //   }
            // })
            ?.map((obj: any) => (
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
