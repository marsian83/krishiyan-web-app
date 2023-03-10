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
import { useNavigate } from "react-router-dom";

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
  const [localsName, setLocalsName] = useState<any>();
  const [scientficCrop, setScientificCrop] = useState<any>();
  const [cropDetails, setCropDetails] = useState<any>();
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");
  const [plantationType, setPlantationType] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  // navigate("/support")
  const onChangePlantationType = (e: any, value: any) => {
    setLocalsName(value.localName);
    // navigate("/support")
  };
  const onChangechooseType = (e: any, value: any) => {
    navigate("/support");
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

  const getcropName = async (localName: any, scientficCrop: any) => {
    if (localName || scientficCrop) {
      setLoading(true);
      const [err, res] = await Api.getCropsbyName(localName, scientficCrop);
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

  const onChangeScientificName = async (e: any, value: any) => {
    console.log(value, "value");
    setScientificCrop(value.scientificName);
  };

  const onSubmit = async () => {
    const res = await getcropName(localsName, scientficCrop);
    console.log("onclick ...........................");
    // await getcropName();
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
        <div
          className=" "
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "row",
          }}
        >
          <div
            className="font-extrabold grid grid-cols-[50%_40%] items-center"
            style={{ width: "550px" }}
          >
            <label className="text-[#13490A] text-center">
              Select your Crop
            </label>
            <Autocomplete
              onChange={onChangePlantationType}
              id="plantation-select"
              sx={{ width: "100%" }}
              options={crops}
              autoHighlight
              getOptionLabel={(crops) => crops?.localName}
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
          <div
            className="font-extrabold ml-10 grid grid-cols-[30%_40%] items-center"
            style={{ width: "450px" }}
          >
            <label className="text-[#13490A] text-center">Issues:</label>
            <Autocomplete
              onChange={onChangechooseType}
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
          <div style={{ marginRight: "25px" }}>
            {loading ? (
              <button
                style={{ marginLeft: "20px" }}
                type="submit"
                disabled={loading}
                className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-full rounded text-sm font-thin"
              >
                {/* <Loader /> */}
                Fetching Info...
              </button>
            ) : (
              <button
                style={{ padding: "10px" }}
                type="submit"
                onClick={onSubmit}
                className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin"
              >
                submit
              </button>
            )}
          </div>
        </div>

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
              <table className="table-fixed border-collapse border border-black font-bold text-base mx-auto">
                <thead className="border-b border-black">
                  <tr className="text-center">
                    <th className="border-r border-black py-[1.2%]">Name</th>
                    <th className="border-r border-black py-[1.2%]">Image</th>
                    <th className="border-r border-black py-[1.2%]">
                      Description
                    </th>
                    <th className="border-r border-black py-[1.2%]">
                      Solution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {obj?.pestMgmt?.map((curr: any) => {
                    return (
                      <tr className="border-b border-black text-center">
                        <td className="border-r border-black">{curr.name}</td>
                        <td className="border-r border-black">
                          <div className="grid grid-cols-[50%_50%]">
                            <img
                              src={curr?.image}
                              alt="Image"
                              className="h-full"
                            />
                            {/* <img src={curr?.image} alt="image" className="h-full" /> */}
                          </div>
                        </td>
                        <td className="border-r border-black w-[35%]">
                          {curr.description}
                        </td>
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
