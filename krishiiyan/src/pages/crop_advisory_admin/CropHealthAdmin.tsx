import { Textarea } from "@material-tailwind/react";
import { TextField } from "@material-ui/core";
import { Autocomplete, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";

import {
  getCrops,
  getFarmers,
  createFarmerSupportHealth,
} from "../../Services/Api";
import CSVReader from "../CSVUpload/CSVUpload";
import Header from "../../Components/layouts/Header";

const CropHealthAdmin = () => {
  let col: any = 12;
  let row: any = 5;
  const [allCrops, setAllCropes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [crop, setCrop] = useState("");
  const [text, setText] = useState("");
  const [farmer, setFarmer] = useState("");
  const [allFarmer, setAllFarmer] = useState<any>([]);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<any>();
  const [farmerDetail, setFarmerDetail] = useState<any>();
  const [description, setDescription] = useState("");
  const [farmerID, setFarmerID] = useState<any>("");
  const [solution, setSolution] = useState("");
  const [healthName, setHealthName] = useState("");
  const [name, setName] = useState("");
  const onChangeCrop = (e: any) => {
    setCrop(e.target.value);
  };
  function refreshPage() {
    window.location.reload();
  }

  useEffect(() => {
    const setCrops = async () => {
      const crops: any[] = await getCrops();
      setAllCropes(crops[1].data);
    };
    setCrops();
  }, []);

  useEffect(() => {
    const setFarmers = async () => {
      const farmers: any[] = await getFarmers();
      // setAllFarmer(farmers[1].data);
    };
    setFarmers();
  }, []);

  const onChangeFarmerName = (e: any) => {
    setFarmer(e.target.value);
  };

  const getFarmerById = async () => {
    if (farmerID) {
      const [err, res] = await Api.getFarmer(farmerID);
      if (err) {
        console.log(err);
      }
      if (res) {
        console.log(res);

        setFarmerDetail(res?.data);
      }

      setLoading(false);
    }
  };

  const onChangeCategory = (e: any) => {
    setCategory(e.target.value);
  };
  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const onChangeSolution = (e: any) => {
    setSolution(e.target.value);
  };
  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  useEffect(() => {
    const init = async () => {
      await getFarmerById();
    };
    init();
  }, [farmerID]);

  useEffect(() => {
    if (!localStorage.Number) return;
    setFarmerID(localStorage.Number);
  }, []);

  const handleHealthSubmit = async () => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    try {
      if (!category || !crop || !image || !description || !solution) {
        toast.error("Please fill in all the details", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      console.log(process.env.REACT_APP_BACKEND_URL);
      let endpoint = "";
      if (category === "pest") {
        endpoint = "pest";
      } else if (category === "weed") {
        endpoint = "weed";
      } else {
        endpoint = "disease";
      }

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}cropHealth/role-admin/${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify({
            localName: crop,
            name: category,
            images: [image],
            description: description,
            solution: solution,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.status == "success")
        toast.success("Crop Health Created Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err: any) {
      console.log(err);
      toast.error(err.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <div>
        <Header title="Crop Health" subtitle="" />

        <div className="w-full max-w-sm mt-10 mb-5 ml-80">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Crop
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                placeholder="Crop"
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setCrop(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="text-[#13490A] font-extrabold text-sm mx-5">
                Category
              </label>
            </div>
            <div className="md:w-2/3">
              <select
                className="bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChangeCategory}
              >
                <option value="">Select a category</option>
                <option value="pest">Pest</option>
                <option value="weed">Weed</option>
                <option value="disease">Disease</option>
              </select>
            </div>
          </div>{" "}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="text-[#13490A] font-extrabold text-sm mx-5"
                // for="inline-password"
              >
                Name of {category}
              </label>
            </div>
            <div className="md:w-2/3 ">
              <textarea
                className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                onChange={onChangeName}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="text-[#13490A] font-extrabold text-sm mx-5"
                // for="inline-password"
              >
                Image Link
              </label>
            </div>
            <div className="md:w-2/3 ">
              <textarea
                className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Image Link"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              ></textarea>
            </div>
          </div>{" "}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="text-[#13490A] font-extrabold text-sm mx-5"
                // for="inline-password"
              >
                Solution
              </label>
            </div>
            <div className="md:w-2/3 ">
              <textarea
                className="bg-[#F3FFF1]  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Solution"
                onChange={onChangeSolution}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="text-[#13490A] font-extrabold text-sm mx-5"
                // for="inline-password"
              >
                Description
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className=" bg-[#F3FFF1] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-400 h-24"
                //   onChange={onChangeArea}
                id="inline-password"
                placeholder="Maximum Of 50 Characters"
                onChange={onChangeDescription}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleHealthSubmit}
            className="bg-[#05AB2A] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin"
          >
            Submit
          </button>
          OR
          <CSVReader />
        </div>
      </div>
    </>
  );
};

export default CropHealthAdmin;
