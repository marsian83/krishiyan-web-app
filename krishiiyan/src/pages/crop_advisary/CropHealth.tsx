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
import { extractCodeFromDriveLink } from "../../handleImageCode";


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
    value: "Weeds",
  },
  // {
  //   value: "Nutrient Deficiency",
  // },
  // {
  //   value: "Others",
  // },
];

const CropHealth = () => {
  const [crops, setCrops] = useState<any>();
  const [type, setType] = useState("");
  const [localsName, setLocalsName] = useState<any>();
  const [scientficCrop, setScientificCrop] = useState<any>();
  const [cropDetails, setCropDetails] = useState<any>();
  const [crop, setCrop] = useState("");
  const [variety, setVariety] = useState("");
  const [selectedIssue, setSelectedIssue] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [solution, setSolution] = useState<any>();
  const [solutionDetails, setSolutionDetails] = useState<any>();
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  let navigate = useNavigate();
  // navigate("/support")
  const onChangePlantationType = (e: any, value: any) => {
    setLocalsName(value.localName);
  };
  const onChangechooseType = (e: any) => {
    console.log(e.target.value);
    if (e.target.value == "Pest") {
      setSelectedIssue("pest");
      setSolution("pesticide");
    } else if (e.target.value == "Diseases") {
      setSelectedIssue("disease");
      setSolution("fungicide");
    } else if (e.target.value == "Weeds") {
      setSelectedIssue("weed");
      setSolution("herbicide");
    }
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
        console.log(res);
        // setCropDetails(res?.data);
      }

      setLoading(false);
    }
  };

  const onChangeScientificName = async (e: any, value: any) => {
    console.log(value, "value");
    setScientificCrop(value.scientificName);
  };

  const onSubmit = async () => {
    console.log(selectedIssue, localsName);
    console.log("onclick ...........................");
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          `/cropHealth/${selectedIssue}/${localsName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        setCropDetails(data);
        return;
      } else {
        toast.error("No data found!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  useEffect(() => {
    const init = async () => {
      await getCrops();
    };
    init();
  }, []);

  /****Solutions **** */
  const apiUrl = process.env.REACT_APP_BACKEND_URL + `/cropHealth/${solution}/`;

  // Function to fetch data for a specific solution (pesticide, fungicide, or herbicide)
  const fetchSolutionData = async (solutionId: any) => {
    console.log(solution);
    try {
      const response = await fetch(apiUrl + solutionId);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching solution data:", error);
    }
  };
  const fetchDetailsForIds = async (ids: any) => {
    const details = await Promise.all(
      ids.map((id: any) => fetchSolutionData(id))
    );
    return details;
  };

  return (
    <div>
      <Header title="Crop Advisory" subtitle="Crop Health" />
      <section className="p-[1%] grid gap-y-1 mt-5 mobile:pt-[40rem] mobile:absolute mobile:left-0">
        <div className="flex mobile:flex-col mobile:gap-y-4" style={{}}>
          <div
            className="font-extrabold grid grid-cols-[50%_40%] items-center mobile:flex mobile:flex-col"
            style={{ width: "550px" }}
          >
            <label className="text-[#13490A] text-end mr-3">
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
            className="font-extrabold ml-10 grid grid-cols-[20%_40%] items-center mobile:flex mobile:flex-col"
            style={{ width: "450px" }}
          >
            {/* <label className="text-[#13490A] text-end mr-3">Issues</label>
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
            /> */}
            <div
              className="font-extrabold grid grid-cols-[50%_40%] items-center mobile:flex mobile:flex-col"
              style={{ width: "550px" }}
            >
              <label className="text-[#13490A] text-end mr-3">
                Select the issue:
              </label>
              <select
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-200"
                value={selectedIssue}
                onChange={onChangechooseType}
              >
                <option value="">{selectedIssue}</option>
                {IssuesOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ marginRight: "25px", marginTop: "5px" }}>
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
                style={{ padding: "10px", marginTop: "5px" }}
                type="submit"
                onClick={onSubmit}
                className="bg-[#05AB2A] text-[#F3FFF1] shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 w-[6vw] rounded text-sm font-thin mobile:w-max"
              >
                Submit
              </button>
            )}
          </div>
        </div>
        <>
          <table className="table-fixed border-collapse border border-black font-bold text-base mx-auto">
            <thead className="border-b border-black">
              <tr className="text-center">
                <th className="border-r border-black py-[1.2%] text-2xl font-extrabold w-[10%]">
                  Name
                </th>
                <th className="border-r border-black py-[1.2%] text-2xl font-extrabold">
                  Image
                </th>
                <th className="border-r border-black py-[1.2%] text-2xl font-extrabold w-[20%]">
                  Description
                </th>
                <th className="border-r border-black py-[1.2%] text-2xl font-extrabold w-[15%]">
                  Solution
                </th>
                <th></th>
                <th className="border-r border-black py-[1.2%] text-2xl font-extrabold w-[10%]">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {console.log(cropDetails)}
              {cropDetails &&
                cropDetails.map((curr: any) => {
                  return (
                    <tr className="border-b border-black text-center">
                      <td className="border-r border-black font-thin text-start pl-2 pr-2 text-xl">
                        {curr.name}
                      </td>
                      <td className="border-r border-black">
                        <div className="grid grid-cols-[50%_50%]">
                          {curr.images.map((image: any, index: any) => {
                            return (
                              <img
                                style={{ width: 250, height: 250 }}
                                src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
                                  image
                                )}`}
                              />
                              // <img src={image}/>
                            );
                          })}
                        </div>
                      </td>
                      <td className="border-r border-black w-[35%] font-thin text-start pl-2 pr-2 text-xl w-[20%]">
                        {curr.description}
                      </td>
                      <td className="border-r border-black flex flex-col justify-left items-left font-thin text-start pl-2 pr-2 text-xl ">
                        {selectedIssue == "pest" &&
                          curr.pesticidesIds.map((sol: any, index: number) => {
                            return <h6>{sol.name}</h6>;
                          })}
                        {selectedIssue == "disease" &&
                          curr.fungicidesIds.map((sol: any, index: number) => {
                            return <h6>{sol.name}</h6>;
                          })}
                        {selectedIssue == "weed" &&
                          curr.herbicidesIds.map((sol: any, index: number) => {
                            return <h6>{sol.name}</h6>;
                          })}
                      </td>
                      <td></td>
                      <td className="border-r border-black flex flex-col justify-left items-left font-thin text-start pl-2 pr-2 text-xl">
                        {selectedIssue == "pest" &&
                          curr.pesticidesIds.map((sol: any, index: number) => {
                            return <h6>{sol.type}</h6>;
                          })}
                        {selectedIssue == "disease" &&
                          curr.fungicidesIds.map((sol: any, index: number) => {
                            return <h6>{sol.type}</h6>;
                          })}
                        {selectedIssue == "weed" &&
                          curr.herbicidesIds.map((sol: any, index: number) => {
                            return <h6>{sol.type}</h6>;
                          })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      </section>
    </div>
  );
};

export default CropHealth;
